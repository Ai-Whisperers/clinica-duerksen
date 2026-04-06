import { createSupabaseServerClient } from "@/lib/supabase";

export async function getBlogPosts() {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false });
  if (error) console.error("Error fetching blog posts:", error);
  return data ?? [];
}

export async function getBlogBySlug(slug: string) {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();
  if (error) console.error("Error fetching blog post:", error);
  return data;
}