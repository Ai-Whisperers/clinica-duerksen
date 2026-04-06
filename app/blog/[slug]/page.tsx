import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BLOG_POSTS, getBlogBySlug } from "@/lib/blog-data";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Blog", url: "https://clinicaduerksen.com.py/blog" },
        { name: post.title },
      ]} />

      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumb items={[
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]} />
          <span className="inline-block text-xs font-medium bg-brand-primary/10 text-brand-primary px-2 py-0.5 rounded mt-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-3">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
            <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readingTime}</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed">{post.content}</p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Si tienes preguntas sobre este tema o quieres agendar una consulta, no dudes en contactarnos por WhatsApp o telefono. En Clinica Duerksen estamos para ayudarte.
            </p>
          </div>

          <div className="mt-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-brand-primary font-medium hover:underline">
              <ArrowLeft className="w-4 h-4" />
              Volver al blog
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-xl font-bold text-foreground mb-6">Articulos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="p-4 rounded-xl border border-border bg-card hover:shadow-md transition-all">
                  <h3 className="font-semibold text-foreground hover:text-brand-primary">{r.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}