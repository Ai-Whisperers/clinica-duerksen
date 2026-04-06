import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { service, date, time, name, phone, email, notes } = body;

    if (!name?.trim() || !phone?.trim() || !service || !date || !time) {
      return NextResponse.json({ error: "Campos requeridos incompletos" }, { status: 400 });
    }

    try {
      const supabase = createSupabaseServerClient();
      await supabase.from("appointment_requests").insert({
        name, phone, email,
        service_type: service,
        preferred_date: date,
        preferred_time: time,
        notes,
      });
    } catch (dbError) {
      console.warn("Supabase not configured:", dbError);
    }

    console.log("Appointment request:", { service, date, time, name, phone, email, notes });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Appointment error:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}