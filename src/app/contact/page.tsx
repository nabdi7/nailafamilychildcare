import React from "react";
import Contact from "@/components/contact/Contact";

export const metadata = {
  title: "Contact Us | Hiba Family Childcare - Seattle Home Childcare",
  description:
    "Get in touch with Hiba Family Childcare in Seattle. Inquire about availability, schedule a visit, or learn more about our infant and toddler care services in our nurturing home environment.",
  openGraph: {
    title: "Contact Us | Hiba Family Childcare - Seattle Home Childcare",
    description:
      "Connect with Hiba Family Childcare in Seattle. We're here to answer your questions about our infant and toddler care services. Schedule a visit to our welcoming home daycare environment.",
    type: "website",
    url: "https://hibafamilychildcare.com/contact",
  },
  twitter: {
    title: "Contact Us | Hiba Family Childcare - Seattle Home Childcare",
    description:
      "Connect with Hiba Family Childcare in Seattle. We're here to answer your questions about our infant and toddler care services. Schedule a visit to our welcoming home daycare environment.",
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
