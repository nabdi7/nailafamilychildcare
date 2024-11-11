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
    alt: "Hiba Family Childcare",
    width: 64,
    height: 64,
  },
  companyName: "Hiba Family Childcare",
  tagline:
    "At Hiba Family Childcare in Seattle, we provide a safe, fun, and educational environment!",

  contactInfo: [
    {
      icon: Phone,
      href: "tel:2063713011",
      label: "(206)-371-3011",
    },
    {
      icon: Mail,
      href: "mailto:koosmohamed2@gmail.com",
      label: "koosmohamed2@gmail.com",
    },
    {
      icon: MapPin,
      href: "https://maps.app.goo.gl/qDUy3MDSiPztrfyK8",
      label: "6532 32nd Ave SW, Seattle, WA",
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
      href: "https://www.facebook.com/hibafamilychildcare",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/hibafamilychildcare",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/najahfamilychildcare",
      label: "Youtube",
    },
  ] as SocialLink[],

  hours: {
    weekday: {
      prefix: "Monday - Friday: Open",
      highlight: "24 Hours"
    },
    weekend: {
      prefix: "Saturday - Sunday:",
      highlight: "Closed"
    }
  },

  copyright: "© 2024 KidsFirst. All rights reserved.",

  credits: {
    text: "Made by",
    link: {
      href: "https://www.qdwebdesigns.com",
      label: "QD Web Designs",
    },
  },
};
