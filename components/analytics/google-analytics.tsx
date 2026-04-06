"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}

// Event tracking helpers
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

export function trackWhatsAppClick(source: string) {
  trackEvent("whatsapp_click", "contact", source);
}

export function trackPhoneClick(source: string) {
  trackEvent("phone_click", "contact", source);
}

export function trackFormSubmit(formName: string) {
  trackEvent("form_submit", "conversion", formName);
}

export function trackServiceView(serviceName: string) {
  trackEvent("service_view", "engagement", serviceName);
}