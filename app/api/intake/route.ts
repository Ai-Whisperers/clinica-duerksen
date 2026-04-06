import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.firstName?.trim() || !body.phone?.trim()) {
      return NextResponse.json({ error: "Nombre y telefono son requeridos" }, { status: 400 });
    }

    try {
      const supabase = createSupabaseServerClient();
      await supabase.from("patient_intake").insert({
        first_name: body.firstName,
        last_name: body.lastName,
        cedula: body.cedula,
        birth_date: body.birthDate || null,
        phone: body.phone,
        email: body.email,
        allergies: body.allergies,
        medications: body.medications,
        conditions: body.conditions,
        pregnancy: body.pregnancy,
        last_visit: body.lastVisit,
        reason: body.reason,
        anxiety: body.anxiety,
        insurance: body.insurance,
        insurance_name: body.insuranceName,
      });
    } catch (dbError) {
      console.warn("Supabase not configured:", dbError);
    }

    console.log("Patient intake:", body);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Intake error:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}