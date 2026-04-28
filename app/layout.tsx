import { EB_Garamond, Lato } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import WhatsAppButton from "@/components/marketing/WhatsAppButton";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.centrodeestudiosaua.com"),
  title: {
    template: "%s | Centro de Estudios AUA",
    default: "Centro de Estudios AUA | Formación Jurídica Práctica",
  },
  description: "Formación jurídica especializada y práctica para abogados postulantes, corporativos y recursos humanos. ¡Actualízate con nuestros diplomados y cursos!",
  keywords: ["Derecho", "Jurídico", "Abogados", "Cursos para Abogados", "Diplomados Derecho", "Capacitación Legal", "AUA", "Centro de Estudios AUA"],
  openGraph: {
    title: "Centro de Estudios AUA | Formación Jurídica Práctica",
    description: "Formación jurídica especializada y práctica para abogados postulantes, corporativos y recursos humanos. ¡Actualízate con nuestros diplomados y cursos!",
    url: "https://www.centrodeestudiosaua.com/",
    siteName: "Centro de Estudios AUA",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6oisHnxLKXk4l9jlG0ba7lfdEcCGlbejK2YlO_oNVY_bI33wcz6rpVVKQQ-AaaDakrjfphspnVnD8uf3jYTeZOJFs97LYd9bz4xgReWuX-DrOooxT8g88PMwtrzRN6w3sFC9O6dPxkKi2_fGPITr20oUBnOiuXoatNCu-onyRAhHqfGv2oeuUsA1g62BqebToXzCHHWrJuGLJU5nc4tdYXJEl8IDhqfY04j89L2A-osM6I2gvQZXNESJvdXOnrFFfyU8gmMnTHmNO", // Using the actual logo/cover from page.tsx
        width: 1200,
        height: 630,
        alt: "Centro de Estudios AUA",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  alternates: {
    canonical: "https://www.centrodeestudiosaua.com",
  },
};

// Next.js 15 viewport export — fixes iOS Safari zoom and notch support
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover', // Handles iPhone notch (safe areas)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://www.transparenttextures.com" />
      </head>
      <body
        className={`${ebGaramond.variable} ${lato.variable} ${lexend.variable} font-sans antialiased`}
      >
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-98CFTK3H05"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-98CFTK3H05');
            `,
          }}
        />
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2810857109108749');
            fbq('track', 'PageView');
          `,
          }}
        />
        {children}
        <WhatsAppButton />
        <Analytics />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2810857109108749&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
