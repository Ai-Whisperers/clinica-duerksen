import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase";

export async function GET() {
  try {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase
      .from("testimonials")
      .select("id,patient_name,rating,text,treatment_type,source,is_featured")
      .eq("is_active", true)
      .order("is_featured", { ascending: false });

    if (!error && data) {
      return NextResponse.json({ data });
    }
  } catch {}

  return NextResponse.json({ data: [], message: "Supabase not configured" });
}