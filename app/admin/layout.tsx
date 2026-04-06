import type { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard, MessageSquare, Calendar, Star, Image, HelpCircle, Settings, FileText, Users, Gift } from "lucide-react";

export const metadata: Metadata = {
  title: { default: "Admin", template: "%s | Admin | Clinica Duerksen" },
  robots: { index: false, follow: false },
};

const nav = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Mensajes", href: "/admin/mensajes", icon: MessageSquare },
  { label: "Citas", href: "/admin/citas", icon: Calendar },
  { label: "Testimonios", href: "/admin/testimonios", icon: Star },
  { label: "Galeria", href: "/admin/galeria", icon: Image },
  { label: "Blog", href: "/admin/blog", icon: FileText },
  { label: "FAQ", href: "/admin/faq", icon: HelpCircle },
  { label: "Promociones", href: "/admin/promociones", icon: Gift },
  { label: "Equipo", href: "/admin/equipo", icon: Users },
  { label: "Configuracion", href: "/admin/configuracion", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex pt-20">
      <aside className="w-64 border-r border-border bg-card p-4 hidden md:block">
        <h2 className="font-bold text-foreground px-3 mb-4">Admin Panel</h2>
        <nav className="space-y-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-muted/20">{children}</main>
    </div>
  );
}