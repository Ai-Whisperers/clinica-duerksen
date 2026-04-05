"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 flex-col items-center justify-center py-20 px-4">
      <div className="text-center space-y-6 max-w-lg">
        <div className="text-6xl">⚠️</div>
        <h1 className="text-2xl font-bold text-foreground">
          Algo salio mal
        </h1>
        <p className="text-muted-foreground">
          Ocurrio un error inesperado. Por favor intenta de nuevo.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-white font-medium hover:bg-brand-primary/90 transition-colors"
        >
          Intentar de nuevo
        </button>
      </div>
    </main>
  );
}