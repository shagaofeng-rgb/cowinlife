import { NextResponse } from "next/server";
import { createPublicForm } from "@/lib/admin/db";
import { sendInquiryNotification } from "@/lib/email/inquiry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const form = createPublicForm({
      formType: String(body.formType || "contact"),
      email: String(body.email || ""),
      name: String(body.name || ""),
      phone: String(body.phone || ""),
      country: String(body.country || ""),
      companyName: String(body.companyName || ""),
      whatsapp: String(body.whatsapp || ""),
      requestedProduct: String(body.requestedProduct || ""),
      quantity: String(body.quantity || ""),
      budget: String(body.budget || ""),
      timeline: String(body.timeline || ""),
      message: String(body.message || ""),
      relatedProductId: String(body.relatedProductId || ""),
      request
    });
    if (!form) throw new Error("Form could not be created");
    const email = await sendInquiryNotification(form);
    return NextResponse.json({ form, email }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Form could not be created" }, { status: 400 });
  }
}
