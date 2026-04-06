import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, reason, message, honeypot } = body;

    if (honeypot) return NextResponse.json({ success: true });

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: "Nombre y telefono son requeridos" }, { status: 400 });
    }

    try {
      const supabase = createSupabaseServerClient();
      await supabase.from("contact_submissions").insert({ name, phone, email, reason, message });
    } catch (dbError) {
      console.warn("Supabase not configured, logging to console:", dbError);
    }

    console.log("Contact submission:", { name, phone, email, reason, message });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}