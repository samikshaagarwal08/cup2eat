import type { Metadata, Viewport } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/motion/MotionProvider";
import ScrollProgress from "@/components/motion/ScrollProgress";
import WhatsAppFab from "@/components/layout/WhatsAppFab";
import DemoBadge from "@/components/layout/DemoBadge";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "CUP2EAT | Eat Your Drink. Edible cups for chai, coffee & desserts",
    template: "%s | CUP2EAT",
  },
  description: site.description,
  keywords: [
    "edible cups",
    "edible tea cups",
    "edible coffee cups",
    "eco-friendly cups India",
    "zero waste cups",
    "CUP2EAT",
    "wholesale edible cups",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "CUP2EAT | Eat Your Drink",
    description: site.description,
    images: [{ url: "/images/wholesale-offer.jpg", alt: "CUP2EAT edible cups" }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "CUP2EAT | Eat Your Drink",
    description: site.description,
    images: ["/images/wholesale-offer.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#173d2c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${fraunces.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <MotionProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFab />
          <DemoBadge />
        </MotionProvider>
      </body>
    </html>
  );
}
