import { createSupabaseServerClient } from "@/lib/supabase";

export async function getServices() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("is_active", true)
    .order("sort_order");
  if (error) console.error("Error fetching services:", error);
  return data ?? [];
}

export async function getServiceBySlug(slug: string) {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("slug", slug)
    .eq("is_active", true)
    .single();
  if (error) console.error("Error fetching service:", error);
  return data;
}