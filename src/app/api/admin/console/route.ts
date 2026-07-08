import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { executeAction, getAdminBySession, getDb, getModuleData, type DbModule } from "@/lib/admin/db";

export const runtime = "nodejs";

const cookieName = "qucheng_admin_session";
const modules = new Set([
  "dashboard",
  "products",
  "orders",
  "customers",
  "marketing",
  "reviews",
  "content",
  "forms",
  "seo",
  "sync",
  "users",
  "settings",
  "logs"
]);

async function requireUser() {
  getDb();
  const token = (await cookies()).get(cookieName)?.value;
  const user = token ? getAdminBySession(token) : null;
  if (!user) throw new Error("Unauthorized");
  return user;
}

function errorResponse(error: unknown) {
  if (error instanceof Error && error.message === "Unauthorized") {
    return NextResponse.json({ error: "请先登录后台" }, { status: 401 });
  }
  if (error instanceof Error && error.name === "Forbidden") {
    return NextResponse.json({ error: error.message }, { status: 403 });
  }
  return NextResponse.json({ error: error instanceof Error ? error.message : "服务器错误" }, { status: 400 });
}

export async function GET(request: Request) {
  try {
    await requireUser();
    const { searchParams } = new URL(request.url);
    const module = searchParams.get("module") || "dashboard";
    if (!modules.has(module)) return NextResponse.json({ error: "未知模块" }, { status: 404 });
    return NextResponse.json({ module, data: getModuleData(module as DbModule) });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const user = await requireUser();
    const body = await request.json().catch(() => ({}));
    const action = String(body.action || "");
    const payload = (body.payload || {}) as Record<string, unknown>;
    const result = await executeAction(user, action, payload, request);
    return NextResponse.json({ ok: true, result });
  } catch (error) {
    return errorResponse(error);
  }
}
