import React from "react";
import Parent from "@/components/parent/Parent";

export const metadata = {
  title: "Parent Resources | Najah Family Childcare - Seattle",
  description:
    "Access helpful resources for parents at Najah Family Childcare. Find information about our policies, daily schedules, what to bring, and tips for preparing your child for home daycare care.",
  openGraph: {
    title: "Parent Resources | Najah Family Childcare - Seattle",
    description:
      "Everything parents need to know about Najah Family Childcare in Seattle. Access our parent handbook, daily schedules, policies, and helpful tips to ensure a smooth childcare experience for your little one.",
    type: "website",
    url: "https://najahfamilychildcare.com/parent",
  },
  twitter: {
    title: "Parent Resources | Najah Family Childcare - Seattle",
    description:
      "Everything parents need to know about Najah Family Childcare in Seattle. Access our parent handbook, daily schedules, policies, and helpful tips to ensure a smooth childcare experience for your little one.",
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
