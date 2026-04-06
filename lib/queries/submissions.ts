import { createSupabaseServerClient } from "@/lib/supabase";

export async function submitContact(data: {
  name: string; phone: string; email?: string; reason?: string; message?: string;
}) {
  const supabase = createSupabaseServerClient();
  const { error } = await supabase.from("contact_submissions").insert(data);
  if (error) throw error;
  return true;
}

export async function submitAppointment(data: {
  name: string; phone: string; email?: string;
  service_type?: string; preferred_date?: string; preferred_time?: string; notes?: string;
}) {
  const supabase = createSupabaseServerClient();
  const { error } = await supabase.from("appointment_requests").insert(data);
  if (error) throw error;
  return true;
}

export async function submitIntake(data: Record<string, string>) {
  const supabase = createSupabaseServerClient();
  const mapped = {
    first_name: data.firstName,
    last_name: data.lastName,
    cedula: data.cedula,
    birth_date: data.birthDate || null,
    phone: data.phone,
    email: data.email,
    allergies: data.allergies,
    medications: data.medications,
    conditions: data.conditions,
    pregnancy: data.pregnancy,
    last_visit: data.lastVisit,
    reason: data.reason,
    anxiety: data.anxiety,
    insurance: data.insurance,
    insurance_name: data.insuranceName,
  };
  const { error } = await supabase.from("patient_intake").insert(mapped);
  if (error) throw error;
  return true;
}

export async function subscribeNewsletter(email: string) {
  const supabase = createSupabaseServerClient();
  const { error } = await supabase.from("newsletter_subscribers").insert({ email });
  if (error) throw error;
  return true;
}