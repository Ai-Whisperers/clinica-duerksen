import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase";
import { appointmentSchema } from "@/lib/validations";

const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Demasiadas solicitudes. Intenta de nuevo en un minuto." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = appointmentSchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: "Datos inválidos", fields: fieldErrors },
        { status: 400 }
      );
    }

    const { service, date, time, name, phone, email, notes } = parsed.data;

    try {
      const supabase = createSupabaseServerClient();
      await supabase.from("appointment_requests").insert({
        name,
        phone,
        email,
        service_type: service,
        preferred_date: date,
        preferred_time: time,
        notes,
        status: "pending",
      });
    } catch {
      console.warn("Supabase not configured, appointment saved to logs");
    }

    console.log("Appointment request:", { service, date, time, name, phone, email, notes });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
