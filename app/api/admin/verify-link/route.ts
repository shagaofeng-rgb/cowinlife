import { NextResponse } from 'next/server';
import { useLoginToken } from '@/lib/admin-auth';
export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get('token') || '';
  return NextResponse.redirect(new URL(await useLoginToken(token) ? '/admin' : '/admin/login', request.url));
}
