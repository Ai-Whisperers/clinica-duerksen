"use server";

import { createSupabaseServerClient } from "@/lib/supabase";
import { contactSchema } from "@/lib/validations";

export async function submitContact(
  prevState: { success: boolean; error?: string; fields?: Record<string, string[]> } | null,
  formData: FormData
) {
  const honeypot = formData.get("website") as string;
  if (honeypot) return { success: true };

  const raw = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    reason: formData.get("reason") as string,
    message: formData.get("message") as string,
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      error: "Datos inválidos",
      fields: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  try {
    const supabase = createSupabaseServerClient();
    await supabase.from("contact_submissions").insert(parsed.data);
  } catch {
    console.warn("Supabase not configured, contact saved to logs");
  }

  console.log("Contact (server action):", parsed.data);
  return { success: true };
}
