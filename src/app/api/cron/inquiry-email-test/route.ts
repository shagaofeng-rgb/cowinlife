import { NextResponse } from "next/server";
import { sendInquiryNotification } from "@/lib/email/inquiry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.get("authorization");

  if (!cronSecret) {
    return NextResponse.json({ ok: false, error: "CRON_SECRET is not configured" }, { status: 500 });
  }

  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();
  const result = await sendInquiryNotification({
    id: `cron-${now.toISOString()}`,
    form_type: "scheduled_email_health_check",
    name: "Cowinlife Email Monitor",
    email: "system@cowinlife.com",
    phone: "-",
    country: "System",
    company_name: "Cowinlife",
    whatsapp: "-",
    requested_product: "Form email delivery test",
    quantity: "1",
    budget: "-",
    timeline: "Every half month",
    created_at: now.toISOString(),
    message:
      "This is an automated Cowinlife form email health check. If you received this message, the production inquiry email path is working."
  });

  if (!result.sent) {
    return NextResponse.json({ ok: false, email: result }, { status: 500 });
  }

  return NextResponse.json({ ok: true, email: result, checkedAt: now.toISOString() });
}
