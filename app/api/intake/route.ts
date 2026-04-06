import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // TODO: Save to Supabase patient_intake table (encrypted)
    // TODO: Send notification to clinic
    console.log("Patient intake form:", body);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Intake form error:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}