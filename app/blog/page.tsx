import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog - Consejos de Salud Dental",
  description: "Articulos sobre salud dental, tratamientos, prevencion y consejos del Dr. Victor Duerksen. Clinica Duerksen, Asuncion.",
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Blog" },
      ]} />

      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Blog" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">Blog</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Consejos, guias y novedades sobre salud dental del Dr. Victor Duerksen.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-brand-primary/5 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <div className="p-5 space-y-3">
                  <span className="inline-block text-xs font-medium bg-brand-primary/10 text-brand-primary px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <h2 className="font-semibold text-foreground group-hover:text-brand-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readingTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}