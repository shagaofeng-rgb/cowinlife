import { createHash, randomBytes, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';
import { query } from './database';

const COOKIE = 'cowin_admin_session';
const hash = (value: string) => createHash('sha256').update(value).digest('hex');
export const adminEmail = () => process.env.ADMIN_EMAIL || 'info@cowinlife.com';

export async function signIn(email: string, password: string) {
  const expectedEmail = adminEmail().toLowerCase();
  const expectedPassword = process.env.ADMIN_PASSWORD || '';
  const validEmail = email.trim().toLowerCase() === expectedEmail;
  const supplied = Buffer.from(password);
  const expected = Buffer.from(expectedPassword);
  const validPassword = supplied.length === expected.length && timingSafeEqual(supplied, expected);
  if (!validEmail || !validPassword) return false;
  const session = randomBytes(32).toString('base64url');
  await query('INSERT INTO admin_sessions (token_hash,email,expires_at) VALUES ($1,$2,now() + interval \'14 days\')', [hash(session), expectedEmail]);
  const jar = await cookies();
  jar.set(COOKIE, session, { httpOnly: true, secure: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 14 });
  return true;
}

export async function isAdmin() {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return false;
  const result = await query('SELECT 1 FROM admin_sessions WHERE token_hash=$1 AND expires_at > now()', [hash(token)]);
  return result.rowCount === 1;
}
