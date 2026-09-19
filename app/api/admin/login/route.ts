import { NextResponse } from 'next/server';
import { signIn } from '@/lib/admin-auth';
export const runtime = 'nodejs';
export async function POST(request: Request) {
  const { email = '', password = '' } = await request.json().catch(() => ({}));
  if (!await signIn(String(email), String(password))) return NextResponse.json({ error: '账号或密码错误' }, { status: 401 });
  return NextResponse.json({ ok: true });
}
