import { Phone, ClipboardList, PartyPopper } from "lucide-react";
import { ReactNode } from "react";

export interface EnrollmentStep {
  step: number;
  title: string;
  description: string;
  icon: ReactNode;
  timeframe: string;
}

export const enrollmentSteps: EnrollmentStep[] = [
  {
    step: 1,
    title: "Schedule a Tour",
    description: "Contact us to visit our facility and meet our caring staff",
    icon: <Phone className="w-8 h-8" />,
    timeframe: "Same day response",
  },
  {
    step: 2,
    title: "Complete Enrollment",
    description:
      "Fill out forms and provide necessary documents for your child",
    icon: <ClipboardList className="w-8 h-8" />,
    timeframe: "1-2 days",
  },
  {
    step: 3,
    title: "Start Your Journey!",
    description:
      "Your child begins their exciting adventure with our loving family",
    icon: <PartyPopper className="w-8 h-8" />,
    timeframe: "Welcome to the family!",
  },
];
