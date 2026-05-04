import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase";
import { contactSchema } from "@/lib/validations";

const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (entry.count >= 5) return false;
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
    const { honeypot, ...data } = body;

    // Honeypot spam check
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        { error: "Datos inválidos", fields: fieldErrors },
        { status: 400 }
      );
    }

    try {
      const supabase = createSupabaseServerClient();
      await supabase.from("contact_submissions").insert(parsed.data);
    } catch {
      console.warn("Supabase not configured, contact saved to logs");
    }

    console.log("Contact submission:", parsed.data);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
