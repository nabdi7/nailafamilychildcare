import React from "react";
import Gallery from "@/components/gallery/Gallery";

export const metadata = {
  title: "Photo Gallery | Naila Family Childcare",
  description:
    "View our photo gallery to see the warm, welcoming environment at Naila Family Childcare in Renton, WA. Get a glimpse of our safe home setting where children receive loving care, educational activities, and nutritious meals.",
  keywords: [
    "childcare photos renton wa",
    "daycare facility renton",
    "home daycare environment renton",
    "childcare setting renton wa",
    "family childcare photos",
    "daycare activities renton",
    "safe childcare environment",
    "licensed daycare renton photos",
  ],
  openGraph: {
    title: "Photo Gallery | Naila Family Childcare",
    description:
      "Take a visual tour of Naila Family Childcare's nurturing home environment in Renton, WA. See where your child will receive loving care, engage in educational activities, and thrive in our licensed home daycare setting.",
    type: "website",
    url: "https://nailafamilychildcare.com/gallery",
  },
  twitter: {
    title: "Photo Gallery | Naila Family Childcare",
    description:
      "Explore our photo gallery showcasing Naila Family Childcare's warm, safe environment in Renton, WA. See the caring atmosphere where children learn, play, and grow in our professional home daycare.",
  },
};

const page = () => {
  return (
    <div>
      <Gallery />
    </div>
  );
};

export default page;
