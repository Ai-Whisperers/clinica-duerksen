import type { Metadata } from "next";
import { Plane, DollarSign, Clock, Shield, MessageCircle, MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dental Tourism in Paraguay - Save Up to 70%",
  description: "High-quality dental care in Asuncion, Paraguay at a fraction of US/EU prices. Dr. Victor Duerksen, 26+ years of experience.",
};

const savings = [
  { treatment: "Dental Implant (with crown)", us: "$3,000-5,000", ar: "$1,500-2,500", py: "$700-1,400", saving: "Up to 70%" },
  { treatment: "Porcelain Veneer (per tooth)", us: "$1,000-2,500", ar: "$500-800", py: "$280-560", saving: "Up to 75%" },
  { treatment: "Root Canal", us: "$700-1,500", ar: "$300-500", py: "$110-210", saving: "Up to 85%" },
  { treatment: "Teeth Whitening", us: "$500-1,000", ar: "$200-400", py: "$140-280", saving: "Up to 72%" },
  { treatment: "Full Orthodontics", us: "$5,000-8,000", ar: "$2,000-3,500", py: "$700-1,700", saving: "Up to 80%" },
];

const included = [
  "Free initial consultation and treatment plan",
  "Digital X-rays and diagnosis included",
  "All follow-up appointments",
  "Bilingual staff (Spanish/English)",
  "WhatsApp support before and after your trip",
  "Recommendations for hotels and transportation",
];

export default function DentalTourismPage() {
  const waMsg = encodeURIComponent("Hello! I'm interested in dental tourism in Paraguay. Could you send me more information?");

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://clinicaduerksen.com.py" },
        { name: "Dental Tourism" },
      ]} />

      <section className="bg-brand-primary pt-28 pb-16">
        <div className="container mx-auto px-4 text-white">
          <Breadcrumb items={[{ label: "Dental Tourism" }]} />
          <div className="flex items-center gap-2 mt-4">
            <Plane className="w-8 h-8 text-brand-accent" />
            <h1 className="text-4xl md:text-5xl font-bold">Dental Tourism in Paraguay</h1>
          </div>
          <p className="text-xl text-white/80 mt-4 max-w-2xl">
            World-class dental care at a fraction of US and European prices.
            Save up to 70-85% on dental treatments.
          </p>
          <a
            href={`${BUSINESS.whatsapp}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-brand-dark font-semibold text-lg mt-8 hover:bg-brand-accent/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Price Comparison (USD)</h2>
          <p className="text-center text-muted-foreground mb-10">See how much you can save</p>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-xl overflow-hidden text-sm max-w-4xl mx-auto">
              <thead>
                <tr className="bg-brand-primary/5">
                  <th className="px-4 py-3 text-left font-semibold">Treatment</th>
                  <th className="px-4 py-3 text-right font-semibold">USA</th>
                  <th className="px-4 py-3 text-right font-semibold">Argentina</th>
                  <th className="px-4 py-3 text-right font-semibold text-brand-primary">Paraguay</th>
                  <th className="px-4 py-3 text-right font-semibold text-green-600">You Save</th>
                </tr>
              </thead>
              <tbody>
                {savings.map((s, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="px-4 py-3 font-medium text-foreground">{s.treatment}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground line-through">{s.us}</td>
                    <td className="px-4 py-3 text-right text-muted-foreground">{s.ar}</td>
                    <td className="px-4 py-3 text-right font-semibold text-brand-primary">{s.py}</td>
                    <td className="px-4 py-3 text-right font-bold text-green-600">{s.saving}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Paraguay */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Choose Paraguay?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-border bg-card text-center">
              <DollarSign className="w-10 h-10 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">70-85% Savings</h3>
              <p className="text-sm text-muted-foreground mt-2">Same quality materials and techniques as the US at a fraction of the cost.</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card text-center">
              <Shield className="w-10 h-10 text-brand-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">26+ Years Experience</h3>
              <p className="text-sm text-muted-foreground mt-2">Dr. Duerksen trained in Argentina with international-standard protocols.</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card text-center">
              <MapPin className="w-10 h-10 text-brand-accent mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">Easy Travel</h3>
              <p className="text-sm text-muted-foreground mt-2">Direct flights to Asuncion. Low cost of living. Friendly people.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">What&apos;s Included</h2>
          <div className="space-y-3">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 rounded-lg border border-border">
                <span className="text-green-500 font-bold">✓</span>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Save on Dental Care?" subtitle="Contact us for a free treatment plan and cost estimate" />
    </>
  );
}