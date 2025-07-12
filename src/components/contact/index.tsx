import { LucideIcon, Phone, Mail, MapPin } from "lucide-react";

export interface ContactFormState {
  formSubmitted: boolean;
  contactMessage: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  message: string;
}

export interface ContactMethod {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  details: string;
  description: string;
  link: string;
  linkProps: {
    target?: string;
    rel?: string;
  };
}

export const contactMethods: ContactMethod[] = [
  {
    icon: <Phone className="w-6 h-6 text-pink-500" />,
    title: "Call Us Anytime",
    details: "(206) 822-8353",
    description: "Available for Emergency Care",
    link: "tel:+12068228353",
    linkProps: {},
  },
  {
    icon: <Mail className="w-6 h-6 text-blue-500" />,
    title: "Email Us",
    details: "ablaali1997@gmail.com",
    description: "Response within 2 hours",
    link: "mailto:ablaali1997@gmail.com",
    linkProps: {},
  },
  {
    icon: <MapPin className="w-6 h-6 text-yellow-500" />,
    title: "Our Location",
    details: "6714 SE Third St, Renton, WA 98059",
    description: "Renton, WA 98059",
    link: "https://maps.app.goo.gl/2HE6W8tcV1sZnKTe6",
    linkProps: { target: "_blank", rel: "noopener noreferrer" },
  },
];

export const initialFormState: ContactFormState = {
  formSubmitted: false,
  contactMessage: "",
  user_name: "",
  user_email: "",
  user_phone: "",
  message: "",
};
