export default function Head() {
  return (
    <>
      <title>Naila Family Childcare | Licensed Family Childcare in Renton, WA</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta charSet="utf-8" />
      <link rel="apple-touch-icon" sizes="57x57" href="/favicon.ico" />
      
      {/* Primary Meta Tags */}
      <meta name="description" content="Trusted family childcare in Renton, WA offering personalized infant, toddler, and preschool care. Licensed home daycare with nutritious meals, educational activities, and flexible scheduling. Serving Renton families." />
      <meta name="keywords" content="renton childcare, renton daycare, family childcare renton wa, home daycare renton, licensed childcare renton, infant care renton, toddler care renton, preschool renton, renton family daycare, childcare near me, home based childcare renton" />
      
      {/* Location-specific Meta Tags */}
      <meta name="geo.region" content="US-WA" />
      <meta name="geo.placename" content="Renton" />
      <meta name="geo.position" content="47.4829;-122.2171" />
      <meta name="ICBM" content="47.4829, -122.2171" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.nailafamilychildcare.com" />
      <meta property="og:title" content="Naila Family Childcare | Licensed Family Childcare in Renton, WAA" />
      <meta property="og:description" content="Premier family childcare in Renton offering loving, educational care for infants, toddlers, and preschoolers. Licensed provider with flexible hours, nutritious meals, and developmentally appropriate activities in a safe home environment." />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.nailafamilychildcare.com" />
      <meta property="twitter:title" content="Naila Family Childcare | Licensed Family Childcare in Renton, WA" />
      <meta property="twitter:description" content="Quality home-based childcare in Renton, WA. Licensed provider offering personalized care, educational activities, and nutritious meals for children of all ages." />
      
      {/* Schema.org structured data for local business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ChildCare",
          "name": "Naila Family Childcare",
          "description": "Licensed family childcare providing quality care for infants, toddlers, and preschoolers in Renton, Washington",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Renton",
            "addressRegion": "WA",
            "addressCountry": "US"
          },
          "telephone": "2068228353",
          "url": "https://www.nailafamilychildcare.com",
          "priceRange": "$$",
          "serviceArea": {
            "@type": "City",
            "name": "Renton, WA"
          },
          "areaServed": ["Renton", "Tukwila", "Kent", "Seattle", "Bellevue"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Childcare Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Infant Care"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Toddler Care"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Preschool Care"
                }
              }
            ]
          }
        })}
      </script>
      
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}