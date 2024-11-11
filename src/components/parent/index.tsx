import {
  LucideIcon,
  FileText,
  FileSignature,
  FileCheck,
  Book,
  Clock,
  Heart,
} from "lucide-react";

export interface Resource {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  textColor: string;
  pdfUrl: string;
  features: string[];
}

export const resources: Resource[] = [
  {
    title: "Application Form",
    description: "Begin enrollment by submitting key registration details.",
    icon: FileText,
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
    pdfUrl: "/application.pdf",
    features: [
      "Personal details",
      "Parental consent",
      "Emergency contacts",
    ],
  },
  {
    title: "Childcare Agreement",
    description: "Review our safety standards, care guidelines, and expectations for parents.",
    icon: FileSignature,
    bgColor: "bg-emerald-100",
    textColor: "text-emerald-600",
    pdfUrl: "/childcareAgreement.pdf",
    features: [
      "Responsibilities",
      "Fee structure",
      "Attendance policy",
    ],
  },
  {
    title: "Immunization Forms",
    description: "Provide required health and vaccination records for enrollment.",
    icon: FileCheck,
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    pdfUrl: "/immunization.pdf",
    features: [
      "Vaccination records",
      "Health history",
      "Allergy info",
    ],
  },
  {
    title: "Parent Handbook",
    description: "Essential guide to center policies, daily routines, and communication practices.",
    icon: Book,
    bgColor: "bg-orange-100",
    textColor: "text-orange-600",
    pdfUrl: "/parent-handbook.pdf",
    features: [
      "Daily routines",
      "Behavioral guidelines",
      "Communication policy",
    ],
  },
  
  {
    title: "Daily Schedule",
    description:
      "Download our proven daily schedules to maintain consistency in our childcare.",
    icon: Clock,
    bgColor: "bg-teal-100",
    textColor: "text-teal-600",
    pdfUrl: "/daily-schedule.pdf",
    features: [
      "Morning routines",
      "Bedtime schedules",
      "Meal planning templates",
    ],
  },
  {
    title: "Nutrition Guidelines",
    description:
      "Access our healthy meal planning guides and snack suggestions for growing minds.",
    icon: Heart,
    bgColor: "bg-rose-100",
    textColor: "text-rose-600",
    pdfUrl: "/nutrition.pdf",
    features: [
      "Balanced meal plans",
      "Healthy snack ideas",
      "Allergy-friendly options",
    ],
  },
];
