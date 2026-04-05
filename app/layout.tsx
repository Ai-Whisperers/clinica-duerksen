import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { LocalBusinessJsonLd, WebsiteJsonLd } from "@/components/seo/json-ld";

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
        <LocalBusinessJsonLd />
        <WebsiteJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}