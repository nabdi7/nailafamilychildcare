import { Heart, Clock, Shield, Home } from "lucide-react";

export const featuresData = {
  image: {
    src: "/img4.jpg",
    alt: "Happy children playing",
    title: "Creating Happy Memories",
    subtitle: "Every day is a new adventure",
  },
  features: [
    {
      icon: Heart,
      iconColor: "text-rose-500",
      bgColor: "bg-rose-50",
      title: "Loving Care",
      description: "Like family",
    },
    {
      icon: Clock,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50",
      title: "Flexible Care",
      description: "Always here",
    },
    {
      icon: Shield,
      iconColor: "text-sky-500",
      bgColor: "bg-sky-50",
      title: "Safe Space",
      description: "Peace of mind",
    },
    {
      icon: Home,
      iconColor: "text-green-500",
      bgColor: "bg-green-50",
      title: "Cozy Home",
      description: "Warm welcome",
    },
  ],
};
