import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { adminEmail, createLoginToken } from '@/lib/admin-auth';

export const runtime = 'nodejs';
export async function POST(request: Request) {
  const { email } = await request.json().catch(() => ({}));
  if (String(email || '').trim().toLowerCase() !== adminEmail().toLowerCase()) return NextResponse.json({ ok: true });
  const token = await createLoginToken();
  const origin = new URL(request.url).origin;
  const transport = nodemailer.createTransport({ host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT || 465), secure: Number(process.env.SMTP_PORT || 465) === 465, auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD } });
  await transport.sendMail({ from: process.env.INQUIRY_EMAIL_FROM || process.env.SMTP_USER, to: adminEmail(), subject: 'Cowinlife 后台登录', text: `打开此链接登录后台：${origin}/api/admin/verify-link?token=${token}` });
  return NextResponse.json({ ok: true });
}
