import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/common/CookieConsent";
import FloatingArrow from "@/components/common/FloatingArrow";
import FloatingPhone from "@/components/common/FloatingPhone";

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
    default: "DAMAD - Installation et Maintenance d'Appareils d'Accessibilité",
    template: "%s | DAMAD"
  },
  description: "Expert en installation, maintenance et dépannage d'appareils d'accessibilité. Solutions sur mesure pour particuliers et professionnels.",
  keywords: ["appareils d'accessibilité", "ascenseur", "maintenance", "installation", "dépannage", "DAMAD"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${roboto.variable} font-roboto antialiased flex flex-col min-h-screen overflow-x-hidden`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <FloatingArrow />
        <FloatingPhone />
      </body>
    </html>
  );
}
