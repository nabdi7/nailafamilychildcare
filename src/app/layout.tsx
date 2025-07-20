import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  // title: {
  //   default: "Naila Family Childcare  Licensed Family Childcare in Renton, WA"
  //   // template: "%s Naila Family Childcare",
  // },
  title: "Naila Family Childcare | Licensed Family Childcare in Renton, WA",
  description:
    "Trusted family childcare in Renton, WA offering personalized infant, toddler, and preschool care. Licensed home daycare with nutritious meals, educational activities, and flexible scheduling. Serving Renton families with loving, professional care.",
  keywords: [
    "renton childcare",
    "renton daycare",
    "family childcare renton wa",
    "home daycare renton",
    "licensed childcare renton",
    "infant care renton",
    "toddler care renton",
    "preschool renton",
    "renton family daycare",
    "childcare near me",
    "home based childcare renton",
    "quality childcare renton",
    "professional childcare renton",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? siteConfig.url),
  authors: [
    {
      name: "Naila Family Childcare",
      url: "https://nailafamilychildcare.com",
    },
  ],
  creator: "Naila Family Childcare",
  publisher: "Naila Family Childcare",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: "Child Care Services",
  classification: "Business",
  other: {
    "geo.region": "US-WA",
    "geo.placename": "Renton",
    "geo.position": "47.4829;-122.2171",
    ICBM: "47.4829, -122.2171",
    "business:contact_data:locality": "Renton",
    "business:contact_data:region": "WA",
    "business:contact_data:country_name": "United States",
  },
  openGraph: {
    title: "Naila Family Childcare | Licensed Family Childcare in Renton, WA",
    description:
      "Premier family childcare in Renton offering loving, educational care for infants, toddlers, and preschoolers. Licensed provider with flexible hours, nutritious meals, and developmentally appropriate activities in a safe home environment.",
    url: "https://nailafamilychildcare.com",
    siteName: "Naila Family Childcare",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://nailafamilychildcare.com/logo3.png",
        width: 500,
        height: 500,
        alt: "Naila Family Childcare - Licensed Home Daycare in Renton, WA",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naila Family Childcare | Licensed Family Childcare in Renton, WA",
    description:
      "Quality home-based childcare in Renton, WA. Licensed provider offering personalized care, educational activities, and nutritious meals for children of all ages.",
    images: ["https://nailafamilychildcare.com/logo3.png"],
    creator: "@nailafamilychildcare",
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
  alternates: {
    canonical: "https://nailafamilychildcare.com",
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ChildCare",
              name: "Naila Family Childcare",
              description:
                "Licensed family childcare providing quality care for infants, toddlers, and preschoolers in Renton, Washington",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Renton",
                addressRegion: "WA",
                addressCountry: "US",
              },
              telephone: "2068228353",
              url: "https://nailafamilychildcare.com",
              priceRange: "$$",
              serviceArea: {
                "@type": "City",
                name: "Renton, WA",
              },
              areaServed: ["Renton", "Tukwila", "Kent", "Seattle", "Bellevue"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Childcare Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Infant Care",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Toddler Care",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Preschool Care",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.facebook.com/nailafamilychildcare",
                "https://www.instagram.com/nailafamilychildcare",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
