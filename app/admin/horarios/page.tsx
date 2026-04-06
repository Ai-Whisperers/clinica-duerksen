import { Clock, User } from "lucide-react";

const staff = [
  { name: "Dr. Victor Duerksen", role: "Director", schedule: "Lun-Vie 08:00-12:00, 14:30-18:00" },
  { name: "Dra. Gloria Duerksen", role: "Odontologa", schedule: "Lun-Vie 08:00-12:00, 14:30-18:00" },
];

const weekDays = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

export default function StaffSchedulePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Horarios del Equipo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {staff.map((s) => (
          <div key={s.name} className="p-5 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-3">
              <User className="w-8 h-8 text-brand-primary" />
              <div>
                <p className="font-semibold text-foreground">{s.name}</p>
                <p className="text-sm text-muted-foreground">{s.role}</p>
              </div>
            </div>
            <div className="space-y-1">
              {weekDays.map((day) => (
                <div key={day} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{day}</span>
                  <span className="text-foreground">08:00-12:00, 14:30-18:00</span>
                </div>
              ))}
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Sabado-Domingo</span>
                <span className="text-red-400">Cerrado</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">Conectar Supabase para gestionar horarios dinamicamente.</p>
    </div>
  );
}