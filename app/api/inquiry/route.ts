import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { query } from '@/lib/database';

export const runtime = 'nodejs';

const MAX_FIELDS = 30;
const MAX_VALUE_LENGTH = 4_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!);
}

function cleanValue(value: unknown) {
  return typeof value === 'string' ? value.trim().slice(0, MAX_VALUE_LENGTH) : '';
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as { fields?: Record<string, unknown>; products?: unknown; page?: unknown; pageTitle?: unknown };
    const entries = Object.entries(body.fields || {})
      .slice(0, MAX_FIELDS)
      .map(([name, value]) => [cleanValue(name).slice(0, 100), cleanValue(value)] as const)
      .filter(([name, value]) => name && value);

    if (entries.length === 0) {
      return NextResponse.json({ error: 'Please complete the form before submitting.' }, { status: 400 });
    }

    const email = entries.find(([name]) => /e-?mail/i.test(name))?.[1];
    if (email && !EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const password = process.env.SMTP_PASSWORD;
    const recipient = process.env.INQUIRY_EMAIL_TO || 'info@cowinlife.com';
    if (!host || !user || !password) {
      console.error('Inquiry email is not configured.');
      return NextResponse.json({ error: 'Email service is unavailable.' }, { status: 503 });
    }

    const port = Number(process.env.SMTP_PORT || 465);
    const productList = Array.isArray(body.products) ? body.products.map(cleanValue).filter(Boolean).slice(0, 20) : [];
    const page = cleanValue(body.page);
    const pageTitle = cleanValue(body.pageTitle);
    const name = entries.find(([field]) => /name/i.test(field))?.[1] || '';
    const textLines = [
      'New inquiry from cowinlife.com',
      pageTitle ? `Page: ${pageTitle}` : '',
      page ? `URL path: ${page}` : '',
      ...entries.map(([name, value]) => `${name}: ${value}`),
      productList.length ? `Products: ${productList.join(', ')}` : '',
    ].filter(Boolean);
    const htmlRows = entries.map(([name, value]) => `<tr><th align="left" style="padding:6px 12px 6px 0;vertical-align:top">${escapeHtml(name)}</th><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join('');

    const transport = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass: password },
    });

    await transport.sendMail({
      from: process.env.INQUIRY_EMAIL_FROM || user,
      to: recipient,
      replyTo: email,
      subject: `New website inquiry${pageTitle ? ` — ${pageTitle}` : ''}`.slice(0, 180),
      text: textLines.join('\n'),
      html: `<h2>New inquiry from cowinlife.com</h2>${pageTitle ? `<p><strong>Page:</strong> ${escapeHtml(pageTitle)}</p>` : ''}${page ? `<p><strong>URL path:</strong> ${escapeHtml(page)}</p>` : ''}<table>${htmlRows}</table>${productList.length ? `<p><strong>Products:</strong> ${productList.map(escapeHtml).join(', ')}</p>` : ''}`,
    });
    await query('INSERT INTO inquiries (name,email,message,page_path,products,fields) VALUES ($1,$2,$3,$4,$5,$6)', [name, email || '', entries.find(([field]) => /message|comment|inquiry/i.test(field))?.[1] || '', page, JSON.stringify(productList), JSON.stringify(Object.fromEntries(entries))]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Unable to send inquiry email:', error);
    return NextResponse.json({ error: 'We could not send your inquiry.' }, { status: 500 });
  }
}
