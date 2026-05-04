import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nombre debe tener al menos 2 caracteres"),
  phone: z.string().min(6, "Teléfono inválido"),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  reason: z.string().min(1, "Selecciona un motivo"),
  message: z.string().optional(),
});

export const appointmentSchema = z.object({
  service: z.string().min(1, "Selecciona un servicio"),
  date: z.string().min(1, "Selecciona una fecha"),
  time: z.string().min(1, "Selecciona un horario"),
  name: z.string().min(2, "Nombre debe tener al menos 2 caracteres"),
  phone: z.string().min(6, "Teléfono inválido"),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  notes: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type AppointmentInput = z.infer<typeof appointmentSchema>;
