import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Clínica Duerksen | Odontología de Excelencia en Asunción",
    template: "%s | Clínica Duerksen",
  },
  description:
    "Clínica dental del Dr. Victor Duerksen en Asunción, Paraguay. Implantes dentales, ortodoncia, estética dental y más. Atención personalizada con tecnología de vanguardia.",
  keywords: [
    "dentista asunción",
    "clínica dental paraguay",
    "implantes dentales",
    "ortodoncia",
    "Dr. Victor Duerksen",
    "odontología",
    "estética dental",
  ],
  authors: [{ name: "Clínica Duerksen" }],
  creator: "Clínica Duerksen",
  metadataBase: new URL("https://clinicaduerksen.com.py"),
  openGraph: {
    type: "website",
    locale: "es_PY",
    url: "https://clinicaduerksen.com.py",
    siteName: "Clínica Duerksen",
    title: "Clínica Duerksen | Odontología de Excelencia en Asunción",
    description:
      "Clínica dental del Dr. Victor Duerksen en Asunción, Paraguay. Implantes dentales, ortodoncia, estética dental y más.",
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
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
