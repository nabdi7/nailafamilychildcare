import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Naila Family Childcare | Loving Home Childcare in Seattle, WA",
    template: "%s | Naila Family Childcare"
  },
  description: "Naila Family Childcare provides nurturing, licensed home childcare services for infants and toddlers in Seattle, WA. Offering a warm, safe environment where your child feels loved and cared for.",
  keywords: ["childcare", "daycare", "home childcare", "seattle childcare", "infant care", "toddler care", "licensed childcare", "family childcare", "home daycare", "seattle wa"],
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? siteConfig.url),
  authors: [
    {
      name: "Naila Family Childcare",
      url: "https://nailafamilychildcare.com",
    }
  ], 
  creator: "Naila Family Childcare",
  publisher: "Naila Family Childcare",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Naila Family Childcare | Loving Home Childcare in Seattle, WA",
    description: "Discover loving, nurturing childcare in a home environment at Naila Family Childcare. Licensed provider offering infant and toddler care in Seattle, WA.",
    url: "https://nailafamilychildcare.com",
    siteName: "Naila Family Childcare",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://nailafamilychildcare.com/logo3.png",
        width: 500,
        height: 500,
        alt: "Naila Family Childcare | Loving Home Childcare in Seattle, WA",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naila Family Childcare | Loving Home Childcare in Seattle, WA",
    description: "Discover loving, nurturing childcare in a home environment at Naila Family Childcare. Licensed provider offering infant and toddler care in Seattle, WA.",
    images: ["https://nailafamilychildcare.com/logo3.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  manifest: `/site.webmanifest`,
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
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
