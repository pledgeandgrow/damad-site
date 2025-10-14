import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/common/CookieConsent";
import FloatingArrow from "@/components/common/FloatingArrow";
import FloatingPhone from "@/components/common/FloatingPhone";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2b3343',
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: {
    default: "DMD Ascenseur - Installation et Maintenance d'Ascenseurs en France",
    template: "%s | DMD Ascenseur"
  },
  description: "Expert en installation, maintenance et dépannage d'ascenseurs. Solutions sur mesure pour particuliers et professionnels dans toute la France.",
  keywords: ["ascenseur", "maintenance ascenseur", "installation ascenseur", "dépannage ascenseur", "DMD Ascenseur", "réparation ascenseur", "modernisation ascenseur"],
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  other: {
    'msapplication-TileColor': '#2b3343',
    'msapplication-config': '/browserconfig.xml',
  },
  // Open Graph metadata
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://dmd-ascenseur.fr/',
    siteName: 'DMD Ascenseur',
    title: 'DMD Ascenseur - Installation et Maintenance d\'Ascenseurs en France',
    description: 'Expert en installation, maintenance et dépannage d\'ascenseurs. Solutions sur mesure pour particuliers et professionnels dans toute la France.',
    images: [
      {
        url: 'https://dmd-ascenseur.fr/og-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'DMD Ascenseur - Logo',
      },
    ],
  },
  // Twitter card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'DMD Ascenseur - Installation et Maintenance d\'Ascenseurs',
    description: 'Expert en installation, maintenance et dépannage d\'ascenseurs. Solutions sur mesure pour particuliers et professionnels.',
    images: ['https://dmd-ascenseur.fr/og-logo.jpg'],
  },
  // Canonical URL
  alternates: {
    canonical: 'https://dmd-ascenseur.fr',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <LocalBusinessSchema />
      </head>
      <body className={`${roboto.variable} font-roboto antialiased flex flex-col min-h-screen overflow-x-hidden`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <FloatingArrow />
        <FloatingPhone />
        <Analytics />
      </body>
    </html>
  );
}
