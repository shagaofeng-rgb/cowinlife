import { NextResponse } from "next/server";
import { createPublicForm } from "@/lib/admin/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const form = createPublicForm({
      formType: String(body.formType || "contact"),
      email: String(body.email || ""),
      name: String(body.name || ""),
      message: String(body.message || ""),
      relatedProductId: String(body.relatedProductId || ""),
      request
    });
    return NextResponse.json({ form }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Form could not be created" }, { status: 400 });
  }
}
