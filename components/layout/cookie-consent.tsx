"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setShow(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-border shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Usamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestra{" "}
          <Link href="/privacidad" className="text-brand-primary hover:underline">politica de privacidad</Link>.
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}