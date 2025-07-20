import React from "react";
import ProgramsPage from "@/components/programs/ProgramsPage";

export const metadata = {
  title: "Our Care Programs | Naila Family Childcare",
  description:
    "Explore our comprehensive infant, toddler, and preschool care programs at Naila Family Childcare in Renton, WA. Discover our daily activities, educational curriculum, and nurturing care routines designed to support your child's development.",
  keywords: [
    "childcare programs renton",
    "infant care programs renton wa",
    "toddler activities renton",
    "preschool curriculum renton",
    "educational childcare programs",
    "developmental activities renton",
    "structured childcare renton",
    "age appropriate activities",
  ],
  openGraph: {
    title: "Our Care Programs | Naila Family Childcare",
    description:
      "Discover our specialized infant, toddler, and preschool care programs at Naila Family Childcare in Renton. We provide attentive, loving care with educational activities in a safe home environment, tailored to each child's developmental needs.",
    type: "website",
    url: "https://nailafamilychildcare.com/programs",
  },
  twitter: {
    title: "Our Care Programs | Naila Family Childcare",
    description:
      "Explore our comprehensive childcare programs at Naila Family Childcare in Renton, WA. We offer structured, educational care for infants, toddlers, and preschoolers in a nurturing home environment.",
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
