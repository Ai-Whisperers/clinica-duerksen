import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase";
import { SERVICES } from "@/lib/services-data";

export async function GET() {
  try {
    const supabase = createSupabaseServerClient();
    const { data, error } = await supabase
      .from("services")
      .select("id,slug,title,description,icon,sort_order")
      .eq("is_active", true)
      .order("sort_order");

    if (!error && data?.length) {
      return NextResponse.json({ data, source: "supabase" });
    }
  } catch {}

  // Fallback to static data
  return NextResponse.json({
    data: SERVICES.map((s) => ({ slug: s.slug, title: s.title, description: s.description })),
    source: "static",
  });
}