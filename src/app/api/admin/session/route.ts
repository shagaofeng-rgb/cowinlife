import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { audit, createSession, deleteSession, getAdminBySession, getAdminByUsername, getDb, verifyPassword } from "@/lib/admin/db";

export const runtime = "nodejs";

const cookieName = "cowinlife_admin_session";

function clientIp(request: Request) {
  return request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "local";
}

export async function GET() {
  getDb();
  const token = (await cookies()).get(cookieName)?.value;
  if (!token) return NextResponse.json({ user: null }, { status: 401 });
  const user = getAdminBySession(token);
  if (!user) return NextResponse.json({ user: null }, { status: 401 });
  return NextResponse.json({
    user: {
      id: user.id,
      username: user.username,
      displayName: user.display_name,
      roleCode: user.role_code,
      permissions: JSON.parse(user.permissions_json)
    }
  });
}

export async function POST(request: Request) {
  if (process.env.NODE_ENV === "production" && !process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "后台管理员密码尚未在服务器环境变量中配置" }, { status: 503 });
  }
  getDb();
  const body = await request.json().catch(() => ({}));
  const username = String(body.username || "").trim();
  const password = String(body.password || "");
  const user = getAdminByUsername(username);

  if (!user) {
    audit(null, "后台登录失败", "admin", username, null, { reason: "user_not_found" }, request);
    return NextResponse.json({ error: "账号或密码错误" }, { status: 401 });
  }

  if (user.locked_until && new Date(user.locked_until).getTime() > Date.now()) {
    return NextResponse.json({ error: "账号临时锁定，请稍后再试" }, { status: 423 });
  }

  if (!verifyPassword(password, user.password_hash)) {
    const failedAttempts = Number(user.failed_attempts || 0) + 1;
    const lockedUntil = failedAttempts >= 5 ? new Date(Date.now() + 15 * 60 * 1000).toISOString() : null;
    getDb()
      .prepare("UPDATE admins SET failed_attempts = ?, locked_until = ?, updated_at = ? WHERE id = ?")
      .run(failedAttempts, lockedUntil, new Date().toISOString(), user.id);
    audit(null, "后台登录失败", "admin", String(user.id), null, { reason: "bad_password", failedAttempts }, request);
    return NextResponse.json({ error: "账号或密码错误" }, { status: 401 });
  }

  const session = createSession(user.id, clientIp(request), request.headers.get("user-agent") || "");
  getDb()
    .prepare("UPDATE admins SET failed_attempts = 0, locked_until = NULL, last_login_at = ?, last_login_ip = ?, updated_at = ? WHERE id = ?")
    .run(new Date().toISOString(), clientIp(request), new Date().toISOString(), user.id);
  audit(user, "后台登录成功", "admin", String(user.id), null, { username }, request);

  const response = NextResponse.json({
    user: {
      id: user.id,
      username: user.username,
      displayName: user.display_name,
      roleCode: user.role_code,
      permissions: JSON.parse(user.permissions_json)
    },
    expiresAt: session.expiresAt
  });
  response.cookies.set(cookieName, session.token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(session.expiresAt)
  });
  return response;
}

export async function DELETE(request: Request) {
  const token = (await cookies()).get(cookieName)?.value;
  const user = token ? getAdminBySession(token) : null;
  if (token) deleteSession(token);
  audit(user || null, "后台退出登录", "admin", user ? String(user.id) : "", null, null, request);
  const response = NextResponse.json({ ok: true });
  response.cookies.delete(cookieName);
  return response;
}
