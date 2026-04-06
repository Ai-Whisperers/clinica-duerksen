import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email?.trim() || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalido" }, { status: 400 });
    }

    try {
      const supabase = createSupabaseServerClient();
      await supabase.from("newsletter_subscribers").insert({ email });
    } catch (dbError: any) {
      if (dbError?.code === "23505") {
        return NextResponse.json({ success: true, message: "Ya estas suscrito" });
      }
      console.warn("Supabase not configured:", dbError);
    }

    console.log("Newsletter signup:", email);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}