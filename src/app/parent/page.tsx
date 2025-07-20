import React from "react";
import Parent from "@/components/parent/Parent";

export const metadata = {
  title: "Parent Resources | Naila Family Childcare",
  description:
    "Access essential resources for parents at Naila Family Childcare in Renton, WA. Find information about our policies, daily schedules, enrollment requirements, what to bring, and helpful tips for preparing your child for quality home daycare.",
  keywords: [
    "parent resources renton childcare",
    "childcare policies renton wa",
    "daycare handbook renton",
    "enrollment information renton",
    "childcare preparation tips",
    "daily schedule childcare renton",
    "what to bring daycare renton",
    "parent guide home daycare",
  ],
  openGraph: {
    title: "Parent Resources | Naila Family Childcare",
    description:
      "Everything parents need to know about Naila Family Childcare in Renton, WA. Access our comprehensive parent handbook, daily schedules, policies, and helpful tips to ensure a smooth, successful childcare experience for your family.",
    type: "website",
    url: "https://nailafamilychildcare.com/parent",
  },
  twitter: {
    title: "Parent Resources | Naila Family Childcare",
    description:
      "Comprehensive parent resources for Naila Family Childcare in Renton, WA. Find our parent handbook, daily schedules, policies, and expert tips for a positive childcare experience.",
  },
};

const page = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default page;
