import { createHash, randomBytes } from 'node:crypto';
import { cookies } from 'next/headers';
import { query } from './database';

const COOKIE = 'cowin_admin_session';
const hash = (value: string) => createHash('sha256').update(value).digest('hex');
export const adminEmail = () => process.env.ADMIN_EMAIL || 'info@cowinlife.com';

export async function createLoginToken() {
  const token = randomBytes(32).toString('base64url');
  await query('DELETE FROM admin_tokens WHERE expires_at < now() OR used_at IS NOT NULL');
  await query('INSERT INTO admin_tokens (token_hash,email,expires_at) VALUES ($1,$2,now() + interval \'15 minutes\')', [hash(token), adminEmail()]);
  return token;
}

export async function useLoginToken(token: string) {
  const result = await query<{ email: string }>('UPDATE admin_tokens SET used_at=now() WHERE token_hash=$1 AND used_at IS NULL AND expires_at > now() RETURNING email', [hash(token)]);
  const email = result.rows[0]?.email;
  if (!email) return false;
  const session = randomBytes(32).toString('base64url');
  await query('INSERT INTO admin_sessions (token_hash,email,expires_at) VALUES ($1,$2,now() + interval \'14 days\')', [hash(session), email]);
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
