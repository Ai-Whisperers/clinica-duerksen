import Link from "next/link";

const placeholderPosts = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  placeholder: ["🦷", "😁", "👨‍⚕️", "✨", "🪥", "💪"][i],
}));

export function InstagramFeed() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground">Siguenos en Instagram</h2>
          <p className="text-muted-foreground mt-2">@clinicaduerksen</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 max-w-3xl mx-auto">
          {placeholderPosts.map((post) => (
            <div key={post.id} className="aspect-square bg-brand-primary/5 rounded-lg flex items-center justify-center text-3xl">
              {post.placeholder}
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a
            href="https://instagram.com/clinicaduerksen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary font-medium hover:underline"
          >
            Ver mas en Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}