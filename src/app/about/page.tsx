import React from "react";
import AboutPage from "@/components/about/AboutPage";

export const metadata = {
  title: "About Us | Naila Family Childcare",
  description:
    "Discover Naila Family Childcare's commitment to providing exceptional, nurturing care for infants, toddlers, and preschoolers in Renton, WA. Learn about our safe home environment, experienced care, and dedication to your child's development.",
  keywords: [
    "about naila family childcare",
    "renton childcare provider",
    "licensed home daycare renton",
    "experienced childcare renton wa",
    "family childcare background",
    "trusted childcare provider renton",
    "home daycare philosophy renton",
  ],
  openGraph: {
    title: "About Us | Naila Family Childcare",
    description:
      "Learn about Naila Family Childcare in Renton, WA. We provide loving, attentive care for infants, toddlers, and preschoolers in a warm, secure home environment. Licensed and experienced in creating a nurturing space where children thrive.",
    type: "website",
    url: "https://nailafamilychildcare.com/about",
  },
  twitter: {
    title: "About Us | Naila Family Childcare",
    description:
      "Discover the caring approach at Naila Family Childcare in Renton, WA. We provide loving, professional care for children of all ages in a warm home environment. Licensed and experienced in creating safe, nurturing spaces for your little ones.",
  },
};

const page = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default page;
