import React from "react";
import Gallery from "@/components/gallery/Gallery";

export const metadata = {
  title: "Photo Gallery | Najah Family Childcare - Seattle Home Childcare",
  description:
    "View our photo gallery to see the warm, welcoming environment at Najah Family Childcare in Seattle. Get a glimpse of our home setting where children receive loving care and attention.",
  openGraph: {
    title: "Photo Gallery | Najah Family Childcare - Seattle Home Childcare",
    description:
      "Take a visual tour of Najah Family Childcare's nurturing home environment. See where your child will receive loving care in our Seattle home daycare setting.",
    type: "website",
    url: "https://najahfamilychildcare.com/gallery",
  },
  twitter: {
    title: "Photo Gallery | Najah Family Childcare - Seattle Home Childcare",
    description:
      "Take a visual tour of Najah Family Childcare's nurturing home environment. See where your child will receive loving care in our Seattle home daycare setting.",
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
