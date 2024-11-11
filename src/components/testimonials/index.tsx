import React from "react";
import { Star } from "lucide-react";

export interface Testimonial {
  name: string;
  quote: string;
  rating: number;
  image: string;
}

export interface StarRatingProps {
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Roworz",
    quote: "Amazing place, Owner is very kind and welcoming.",
    rating: 5,
    image: "/testimonial1.png",
  },
  {
    name: "Mohamed Abdi",
    quote: "My family 👪",
    rating: 5,
    image: "/testimonial2.png",
  },
  {
    name: "Wendy Munoz",
    quote: "",
    rating: 5,
    image: "/testimonial3.png",
  },
];

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="flex mb-4">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "fill-current text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};
