import tls from "node:tls";
import { storeConfig } from "@/config/store.config";

type InquiryRecord = Record<string, unknown>;

type SmtpResponse = {
  code: number;
  message: string;
};

type EmailResult =
  | { sent: true; to: string }
  | { sent: false; skipped: true; reason: string }
  | { sent: false; skipped: false; error: string };

const smtpHost = process.env.SMTP_HOST || "smtp.exmail.qq.com";
const smtpPort = Number(process.env.SMTP_PORT || 465);
const smtpUser = process.env.SMTP_USER || storeConfig.supportEmail;
const smtpPassword = process.env.SMTP_PASSWORD || "";
const inquiryTo = process.env.INQUIRY_EMAIL_TO || storeConfig.inquiryEmail;
const inquiryFrom = process.env.INQUIRY_EMAIL_FROM || smtpUser;
const inquiryFromName = process.env.INQUIRY_EMAIL_FROM_NAME || storeConfig.legalCompanyName;

function value(record: InquiryRecord, key: string) {
  const next = record[key];
  return next === null || next === undefined ? "" : String(next);
}

function encodeHeader(value: string) {
  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function dotStuff(value: string) {
  return value.replace(/^\./gm, "..");
}

function inquirySubject(record: InquiryRecord) {
  const id = value(record, "id") || "new";
  const country = value(record, "country") || "unknown country";
  const formType = value(record, "form_type") || "inquiry";
  return `[Cowinlife Inquiry #${id}] ${formType} from ${country}`;
}

function inquiryHtml(record: InquiryRecord) {
  const rows = [
    ["Inquiry ID", value(record, "id")],
    ["Type", value(record, "form_type")],
    ["Name", value(record, "name")],
    ["Email", value(record, "email")],
    ["Phone", value(record, "phone")],
    ["Country", value(record, "country")],
    ["Company", value(record, "company_name")],
    ["WhatsApp / WeChat", value(record, "whatsapp")],
    ["Product / SKU", value(record, "requested_product") || value(record, "related_product_id")],
    ["Quantity", value(record, "quantity")],
    ["Target budget", value(record, "budget")],
    ["Expected timeline", value(record, "timeline")],
    ["Created at", value(record, "created_at")]
  ];

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.55;color:#1f2a2e">
      <h2 style="margin:0 0 16px">New Cowinlife inquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:760px">
        ${rows
          .map(([label, item]) => `
            <tr>
              <td style="border:1px solid #dde3e1;padding:8px 10px;background:#f7faf9;font-weight:700;width:180px">${escapeHtml(label)}</td>
              <td style="border:1px solid #dde3e1;padding:8px 10px">${escapeHtml(item || "-")}</td>
            </tr>
          `)
          .join("")}
      </table>
      <h3 style="margin:22px 0 8px">Requirement details</h3>
      <div style="white-space:pre-wrap;border:1px solid #dde3e1;padding:14px;background:#fff">${escapeHtml(value(record, "message"))}</div>
      <p style="margin-top:18px;color:#64706d">This inquiry is also stored in the Cowinlife admin backend.</p>
    </div>
  `;
}

function inquiryText(record: InquiryRecord) {
  return [
    "New Cowinlife inquiry",
    `Inquiry ID: ${value(record, "id")}`,
    `Type: ${value(record, "form_type")}`,
    `Name: ${value(record, "name")}`,
    `Email: ${value(record, "email")}`,
    `Phone: ${value(record, "phone")}`,
    `Country: ${value(record, "country")}`,
    `Company: ${value(record, "company_name")}`,
    `WhatsApp / WeChat: ${value(record, "whatsapp")}`,
    `Product / SKU: ${value(record, "requested_product") || value(record, "related_product_id")}`,
    `Quantity: ${value(record, "quantity")}`,
    `Target budget: ${value(record, "budget")}`,
    `Expected timeline: ${value(record, "timeline")}`,
    `Created at: ${value(record, "created_at")}`,
    "",
    "Requirement details:",
    value(record, "message")
  ].join("\n");
}

function buildMessage(record: InquiryRecord) {
  const boundary = `cowinlife-${Date.now().toString(36)}`;
  const subject = inquirySubject(record);
  const replyTo = value(record, "email");
  const headers = [
    `From: ${encodeHeader(inquiryFromName)} <${inquiryFrom}>`,
    `To: <${inquiryTo}>`,
    `Reply-To: ${replyTo ? `<${replyTo}>` : `<${inquiryFrom}>`}`,
    `Subject: ${encodeHeader(subject)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <inquiry-${value(record, "id") || Date.now()}@cowinlife.com>`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`
  ];

  return [
    headers.join("\r\n"),
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    inquiryText(record),
    `--${boundary}`,
    "Content-Type: text/html; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    inquiryHtml(record),
    `--${boundary}--`,
    ""
  ].join("\r\n");
}

function readSmtpResponse(socket: tls.TLSSocket, state: { buffer: string }): Promise<SmtpResponse> {
  return new Promise((resolve, reject) => {
    const cleanup = () => {
      socket.off("data", onData);
      socket.off("error", onError);
      socket.off("timeout", onTimeout);
    };

    const parse = () => {
      const lines = state.buffer.split("\r\n");
      let offset = 0;
      for (const line of lines) {
        if (!line) {
          offset += 2;
          continue;
        }
        const complete = line.match(/^(\d{3}) /);
        offset += line.length + 2;
        if (complete) {
          const message = state.buffer.slice(0, offset).trim();
          state.buffer = state.buffer.slice(offset);
          cleanup();
          resolve({ code: Number(complete[1]), message });
          return true;
        }
      }
      return false;
    };

    const onData = (chunk: Buffer) => {
      state.buffer += chunk.toString("utf8");
      parse();
    };
    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };
    const onTimeout = () => {
      cleanup();
      reject(new Error("SMTP connection timed out"));
    };

    socket.on("data", onData);
    socket.on("error", onError);
    socket.on("timeout", onTimeout);
    parse();
  });
}

async function expectResponse(socket: tls.TLSSocket, state: { buffer: string }, code: number) {
  const response = await readSmtpResponse(socket, state);
  if (response.code !== code) {
    throw new Error(`SMTP expected ${code}, received ${response.code}: ${response.message}`);
  }
  return response;
}

async function command(socket: tls.TLSSocket, state: { buffer: string }, text: string, code: number) {
  socket.write(`${text}\r\n`);
  return expectResponse(socket, state, code);
}

function connectSmtp() {
  return new Promise<tls.TLSSocket>((resolve, reject) => {
    const socket = tls.connect({
      host: smtpHost,
      port: smtpPort,
      servername: smtpHost,
      rejectUnauthorized: true
    });
    socket.setTimeout(15000);
    socket.once("secureConnect", () => resolve(socket));
    socket.once("error", reject);
  });
}

async function sendViaSmtp(record: InquiryRecord) {
  const socket = await connectSmtp();
  const state = { buffer: "" };
  try {
    await expectResponse(socket, state, 220);
    await command(socket, state, "EHLO cowinlife.com", 250);
    await command(socket, state, "AUTH LOGIN", 334);
    await command(socket, state, Buffer.from(smtpUser).toString("base64"), 334);
    await command(socket, state, Buffer.from(smtpPassword).toString("base64"), 235);
    await command(socket, state, `MAIL FROM:<${inquiryFrom}>`, 250);
    await command(socket, state, `RCPT TO:<${inquiryTo}>`, 250);
    await command(socket, state, "DATA", 354);
    socket.write(`${dotStuff(buildMessage(record))}\r\n.\r\n`);
    await expectResponse(socket, state, 250);
    socket.write("QUIT\r\n");
  } finally {
    socket.end();
  }
}

export async function sendInquiryNotification(record: InquiryRecord): Promise<EmailResult> {
  if (!smtpUser || !smtpPassword || !inquiryTo || !inquiryFrom) {
    return { sent: false, skipped: true, reason: "SMTP environment is not configured" };
  }

  try {
    await sendViaSmtp(record);
    return { sent: true, to: inquiryTo };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown SMTP error";
    console.error("Inquiry email notification failed:", message);
    return { sent: false, skipped: false, error: message };
  }
}
