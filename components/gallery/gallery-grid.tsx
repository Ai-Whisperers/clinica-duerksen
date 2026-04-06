"use client";

import { useState } from "react";

interface GalleryCase {
  id: number;
  title: string;
  category: string;
  beforePlaceholder: string;
  afterPlaceholder: string;
}

interface GalleryGridProps {
  cases: GalleryCase[];
  categories: { value: string; label: string }[];
}

export function GalleryGrid({ cases, categories }: GalleryGridProps) {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? cases : cases.filter((c) => c.category === filter);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat.value
                  ? "bg-brand-primary text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <div key={c.id} className="rounded-xl border border-border overflow-hidden bg-card">
              <div className="grid grid-cols-2">
                <div className="aspect-square bg-red-50 flex items-center justify-center p-4 relative">
                  <span className="absolute top-2 left-2 text-xs font-medium bg-red-100 text-red-700 px-2 py-0.5 rounded">Antes</span>
                  <p className="text-xs text-muted-foreground text-center">{c.beforePlaceholder}</p>
                </div>
                <div className="aspect-square bg-green-50 flex items-center justify-center p-4 relative">
                  <span className="absolute top-2 left-2 text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded">Despues</span>
                  <p className="text-xs text-muted-foreground text-center">{c.afterPlaceholder}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground">{c.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}