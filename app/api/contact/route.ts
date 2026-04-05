import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, reason, message, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    // Basic validation
    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: "Nombre y telefono son requeridos" },
        { status: 400 }
      );
    }

    // TODO: Save to Supabase when configured
    // const supabase = createSupabaseServerClient();
    // await supabase.from("contact_submissions").insert({ name, phone, email, reason, message });

    // TODO: Send email via Resend when configured
    // await resend.emails.send({ ... });

    console.log("Contact form submission:", { name, phone, email, reason, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}