import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  LucideIcon,
} from "lucide-react";

export interface QuickLink {
  href: string;
  label: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  href: string;
  label: string;
  isExternal?: boolean;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const footerData = {
  logo: {
    src: "/logo3.png",
    alt: "Naila Family Childcare",
    width: 64,
    height: 64,
  },
  companyName: "Naila Family Childcare",
  tagline:
    "At Naila Family Childcare in Renton WA, we provide a safe, fun, and educational environment!",

  contactInfo: [
    {
      icon: Phone,
      href: "tel:2068228353",
      label: "(206)-822-8353",
    },
    {
      icon: Mail,
      href: "mailto:ablaali1997@gmail.com",
      label: "ablaali1997@gmail.com",
    },
    {
      icon: MapPin,
      href: "https://maps.app.goo.gl/2HE6W8tcV1sZnKTe6",
      label: "6714 SE Third St, Renton, WA",
      isExternal: true,
    },
  ] as ContactInfo[],

  quickLinks: [
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Our Programs" },
    { href: "/gallery", label: "Our Gallery" },
    { href: "/parent", label: "Parent Resources" },
  ] as QuickLink[],

  socialLinks: [
    {
      icon: Facebook,
      href: "https://www.facebook.com/nailafamilychildcare",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/nailafamilychildcare",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/nailafamilychildcare",
      label: "Youtube",
    },
  ] as SocialLink[],

  hours: {
    weekday: {
      prefix: "Monday - Friday: Open",
      highlight: "5am - 9pm"
    },
    weekend: {
      prefix: "Saturday - Sunday:",
      highlight: "Closed"
    }
  },

  copyright: `© ${new Date().getFullYear()} Naila Family Childcare. All rights reserved.`,

  credits: {
    text: "Made by",
    link: {
      href: "https://www.qdwebdesigns.com",
      label: "QD Web Designs",
    },
  },
};
