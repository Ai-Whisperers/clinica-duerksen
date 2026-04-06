import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { LocalBusinessJsonLd, WebsiteJsonLd } from "@/components/seo/json-ld";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Clinica Duerksen | Odontologia de Excelencia en Asuncion",
    template: "%s | Clinica Duerksen",
  },
  description:
    "Clinica dental del Dr. Victor Duerksen en Asuncion, Paraguay. Implantes dentales, ortodoncia, estetica dental y mas. Atencion personalizada con tecnologia de vanguardia.",
  keywords: [
    "dentista asuncion",
    "clinica dental paraguay",
    "implantes dentales",
    "ortodoncia",
    "Dr. Victor Duerksen",
    "odontologia",
    "estetica dental",
  ],
  authors: [{ name: "Clinica Duerksen" }],
  creator: "Clinica Duerksen",
  metadataBase: new URL("https://clinicaduerksen.com.py"),
  openGraph: {
    type: "website",
    locale: "es_PY",
    url: "https://clinicaduerksen.com.py",
    siteName: "Clinica Duerksen",
    title: "Clinica Duerksen | Odontologia de Excelencia en Asuncion",
    description:
      "Clinica dental del Dr. Victor Duerksen en Asuncion, Paraguay. Implantes dentales, ortodoncia, estetica dental y mas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">Ir al contenido principal</a>
        <GoogleAnalytics />
        <LocalBusinessJsonLd />
        <WebsiteJsonLd />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}