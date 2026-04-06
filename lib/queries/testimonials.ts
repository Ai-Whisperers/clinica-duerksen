import { createSupabaseServerClient } from "@/lib/supabase";

export async function getTestimonials() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .eq("is_active", true)
    .order("is_featured", { ascending: false })
    .order("created_at", { ascending: false });
  if (error) console.error("Error fetching testimonials:", error);
  return data ?? [];
}

export async function getFeaturedTestimonials(limit = 3) {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .eq("is_active", true)
    .eq("is_featured", true)
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) console.error("Error fetching featured testimonials:", error);
  return data ?? [];
}