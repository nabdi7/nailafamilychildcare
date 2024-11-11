import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Hiba Family Childcare | Loving Home Childcare in Seattle, WA",
    template: "%s | Hiba Family Childcare"
  },
  description: "Hiba Family Childcare provides nurturing, licensed home childcare services for infants and toddlers in Seattle, WA. Offering a warm, safe environment where your child feels loved and cared for.",
  keywords: ["childcare", "daycare", "home childcare", "seattle childcare", "infant care", "toddler care", "licensed childcare", "family childcare", "home daycare", "seattle wa"],
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? siteConfig.url),
  authors: [
    {
      name: "Hiba Family Childcare",
      url: "https://hibafamilychildcare.com",
    }
  ],
  creator: "Hiba Family Childcare",
  publisher: "Hiba Family Childcare",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Hiba Family Childcare | Loving Home Childcare in Seattle, WA",
    description: "Discover loving, nurturing childcare in a home environment at Hiba Family Childcare. Licensed provider offering infant and toddler care in Seattle, WA.",
    url: "https://hibafamilychildcare.com",
    siteName: "Hiba Family Childcare",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://hibafamilychildcare.com/img8.jpg",
        width: 500,
        height: 500,
        alt: "Hiba Family Childcare | Loving Home Childcare in Seattle, WA",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiba Family Childcare | Loving Home Childcare in Seattle, WA",
    description: "Discover loving, nurturing childcare in a home environment at Hiba Family Childcare. Licensed provider offering infant and toddler care in Seattle, WA.",
    images: ["https://hibafamilychildcare.com/img8.jpg"],
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
