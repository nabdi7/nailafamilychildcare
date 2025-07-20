import React from "react";
import Contact from "@/components/contact/Contact";

export const metadata = {
  title: "Contact Us | Naila Family Childcare",
  description:
    "Get in touch with Naila Family Childcare in Renton, WA. Inquire about availability, schedule a visit, or learn more about our infant, toddler, and preschool care services in our safe, nurturing home environment.",
  keywords: [
    "contact childcare renton wa",
    "schedule daycare visit renton",
    "childcare availability renton",
    "home daycare contact renton",
    "inquire childcare services renton",
    "renton family childcare phone",
    "daycare enrollment renton wa",
    "childcare consultation renton",
  ],
  openGraph: {
    title: "Contact Us | Naila Family Childcare",
    description:
      "Connect with Naila Family Childcare in Renton, WA. We're here to answer your questions about our comprehensive childcare services for infants, toddlers, and preschoolers. Schedule a visit to our welcoming, licensed home daycare environment.",
    type: "website",
    url: "https://nailafamilychildcare.com/contact",
  },
  twitter: {
    title: "Contact Us | Naila Family Childcare",
    description:
      "Reach out to Naila Family Childcare in Renton, WA. We're ready to answer your questions about our quality childcare services and help you schedule a visit to our warm, professional home daycare.",
  },
};

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default page;
