import { createSupabaseServerClient } from "@/lib/supabase";

export async function getFaqItems() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("faq_items")
    .select("*")
    .eq("is_active", true)
    .order("category")
    .order("sort_order");
  if (error) console.error("Error fetching FAQ items:", error);
  return data ?? [];
}

export async function getFaqByCategory(category: string) {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("faq_items")
    .select("*")
    .eq("is_active", true)
    .eq("category", category)
    .order("sort_order");
  if (error) console.error("Error fetching FAQ by category:", error);
  return data ?? [];
}