import { createHash, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import { cookies } from 'next/headers';
import { query } from './database';

const COOKIE = 'cowin_admin_session';
const hash = (value: string) => createHash('sha256').update(value).digest('hex');
export const passwordHash = (password: string) => { const salt = randomBytes(16).toString('hex'); return `${salt}:${scryptSync(password, salt, 64).toString('hex')}`; };
const passwordMatches = (password: string, stored: string) => { const [salt, digest] = stored.split(':'); if (!salt || !digest) return false; const derived = Buffer.from(scryptSync(password, salt, 64).toString('hex')); const expected = Buffer.from(digest); return derived.length === expected.length && timingSafeEqual(derived, expected); };
export const adminEmail = () => process.env.ADMIN_EMAIL || 'info@cowinlife.com';

export async function signIn(email: string, password: string) {
  const expectedEmail = adminEmail().toLowerCase();
  const expectedPassword = process.env.ADMIN_PASSWORD || '';
  const validEmail = email.trim().toLowerCase() === expectedEmail;
  const supplied = Buffer.from(password);
  const expected = Buffer.from(expectedPassword);
  const validPassword = supplied.length === expected.length && timingSafeEqual(supplied, expected);
  let authenticated = validEmail && validPassword;
  if (!authenticated) {
    const account = await query<{ email:string; password_hash:string }>('SELECT email,password_hash FROM users WHERE lower(email)=lower($1) AND active=true LIMIT 1', [email.trim()]);
    authenticated = Boolean(account.rows[0] && passwordMatches(password, account.rows[0].password_hash));
  }
  if (!authenticated) return false;
  const session = randomBytes(32).toString('base64url');
  await query('INSERT INTO admin_sessions (token_hash,email,expires_at) VALUES ($1,$2,now() + interval \'14 days\')', [hash(session), email.trim().toLowerCase()]);
  const jar = await cookies();
  jar.set(COOKIE, session, { httpOnly: true, secure: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 14 });
  return true;
}

export async function isAdmin() {
  return Boolean(await adminRole());
}

export async function adminRole() {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return null;
  const result = await query<{email:string;role:string}>("SELECT s.email,CASE WHEN lower(s.email)=lower($2) THEN 'Super Admin' ELSE r.name END role FROM admin_sessions s LEFT JOIN users u ON lower(u.email)=lower(s.email) LEFT JOIN user_roles ur ON ur.user_id=u.id LEFT JOIN roles r ON r.id=ur.role_id WHERE s.token_hash=$1 AND s.expires_at>now() AND (lower(s.email)=lower($2) OR (u.active=true AND r.name IS NOT NULL)) LIMIT 1",[hash(token),adminEmail()]);
  return result.rows[0] || null;
}

export async function signOut() {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (token) await query('DELETE FROM admin_sessions WHERE token_hash=$1', [hash(token)]);
  jar.set(COOKIE, '', { httpOnly:true, secure:true, sameSite:'lax', path:'/', maxAge:0 });
}
