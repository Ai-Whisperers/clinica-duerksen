import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { service, date, time, name, phone, email, notes } = body;

    if (!name?.trim() || !phone?.trim() || !service || !date || !time) {
      return NextResponse.json({ error: "Campos requeridos incompletos" }, { status: 400 });
    }

    // TODO: Save to Supabase appointment_requests table
    // TODO: Send WhatsApp notification to clinic
    // TODO: Send email confirmation to patient

    console.log("Appointment request:", { service, date, time, name, phone, email, notes });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Appointment request error:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}