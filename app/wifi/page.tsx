"use client";

import { useState } from "react";
import { Wifi, Star, Gift, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";

export default function WifiPage() {
  const [connected, setConnected] = useState(false);
  const [email, setEmail] = useState("");

  function handleConnect(e: React.FormEvent) {
    e.preventDefault();
    // In production: save email + grant WiFi access
    setConnected(true);
  }

  if (connected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-primary to-brand-dark flex items-center justify-center px-4">
        <div className="max-w-md text-center text-white space-y-6">
          <Wifi className="w-16 h-16 mx-auto text-brand-accent" />
          <h1 className="text-3xl font-bold">Conectado!</h1>
          <p className="text-white/80">Disfruta de nuestra WiFi gratuita mientras esperas.</p>

          <div className="space-y-4 pt-4">
            <a href="https://www.google.com/maps/place/Cl%C3%ADnica+Duerksen" target="_blank" rel="noopener noreferrer"
              className="block p-4 rounded-xl bg-white/10 hover:bg-white/15 transition-colors">
              <Star className="w-6 h-6 text-brand-accent mx-auto mb-2" />
              <p className="font-medium">Te gusto tu visita?</p>
              <p className="text-sm text-white/60">Dejanos una resena en Google ★★★★★</p>
            </a>
            <a href="/promociones" className="block p-4 rounded-xl bg-white/10 hover:bg-white/15 transition-colors">
              <Gift className="w-6 h-6 text-brand-accent mx-auto mb-2" />
              <p className="font-medium">Promociones Vigentes</p>
              <p className="text-sm text-white/60">Descubre nuestras ofertas especiales</p>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-primary to-brand-dark flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center text-white space-y-6">
        <Wifi className="w-16 h-16 mx-auto text-brand-accent" />
        <h1 className="text-3xl font-bold">WiFi Clinica Duerksen</h1>
        <p className="text-white/80">Ingresa tu email para conectarte a nuestra red WiFi gratuita.</p>
        <form onSubmit={handleConnect} className="space-y-4">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
          <Button type="submit" className="w-full bg-brand-accent text-brand-dark hover:bg-brand-accent/90 font-semibold">
            Conectar
          </Button>
        </form>
        <p className="text-xs text-white/40">Al conectarte aceptas nuestra politica de privacidad.</p>
      </div>
    </div>
  );
}