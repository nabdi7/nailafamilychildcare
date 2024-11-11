import React from "react";
import ProgramsPage from "@/components/programs/ProgramsPage";

export const metadata = {
  title: "Our Care Programs | Hiba Family Childcare - Seattle",
  description:
    "Explore our infant and toddler care programs at Hiba Family Childcare in Seattle. Learn about our daily activities, care routines, and how we create a loving environment for your child.",
  openGraph: {
    title: "Our Care Programs | Hiba Family Childcare - Seattle",
    description:
      "Discover our specialized infant and toddler care programs at Hiba Family Childcare. We provide attentive, loving care in a safe home environment, tailored to each child's needs.",
    type: "website",
    url: "https://hibafamilychildcare.com/programs",
  },
  twitter: {
    title: "Our Care Programs | Hiba Family Childcare - Seattle",
    description:
      "Discover our specialized infant and toddler care programs at Hiba Family Childcare. We provide attentive, loving care in a safe home environment, tailored to each child's needs.",
  },
};

const page = () => {
  return (
    <div>
      <ProgramsPage />
    </div>
  );
};

export default page;
