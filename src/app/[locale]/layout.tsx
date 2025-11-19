import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { Analytics } from '@vercel/analytics/next';
import Script from "next/script";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  applicationName: "Pär Nilssons Portfolio",
  title: "Pär Nilsson",
  description:
    "Fullstack developer Pär Nilsson helps businesses with web development, website improvements, infrastructure, Azure cloud solutions, and GDPR compliance. Supporting companies in building, modernizing, and maintaining their digital presence.",
  generator: "Next.js",
  openGraph: {
    title: 'Pär Nilsson',
    description: 'Fullstack developer Pär Nilsson helps businesses with web development, website improvements, infrastructure, Azure cloud solutions, and GDPR compliance. Supporting companies in building, modernizing, and maintaining their digital presence.',
    url: defaultUrl,
    siteName: 'Pär Nilssons Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    "web development for small businesses",
    "website modernization services",
    "Azure and .NET developer",
    "infrastructure as code consulting",
    "GDPR compliance for websites",
    "website management services",
    "fullstack developer for hire",
    "custom websites for local businesses",
    "technical support for outdated websites",
    "cookie policy implementation",
    "cloud infrastructure consulting",
    "affordable websites for small businesses",
    "webbutveckling för småföretag",
    "förbättra företags hemsida",
    "GDPR hemsida hjälp",
    "webbdesign Göteborg",
    "billig hemsida till företag",
    "hjälp med hemsida företag",
    "modernisering av gamla hemsidor",
    "hemsidekonsult småföretag"
  ],  
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <NextIntlClientProvider>
          {children}
          <Footer />
          <Analytics />
          <Script 
            src="https://embeds.iubenda.com/widgets/bcad60e2-fc63-4b1c-a4dd-270de198366e.js" 
            strategy="afterInteractive"
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
