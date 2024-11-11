import React from "react";
import {
  Calendar,
  Clock,
  Heart,
  Brain,
  Star,
  Shield,
  Music,
} from "lucide-react";
import Cta from "../cta/Cta";

const ProgramsPage = () => {
  const programs = [
    {
      title: "Toddler Care",
      age: "Ages 0-3",
      schedule: "24/7 Availability",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      description:
        "Gentle care with fun playtime, naps, and meals - day or night",
      features: [
        { icon: Heart, text: "Individualized attention & care" },
        { icon: Brain, text: "Age-appropriate activities" },
        { icon: Music, text: "Interactive playtime" },
      ],
    },
    {
      title: "Preschool Care",
      age: "Ages 4-6",
      schedule: "Available 24/7",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
      description:
        "Round-the-clock care with engaging activities and structured routines",
      features: [
        { icon: Star, text: "Structured daily activities" },
        { icon: Brain, text: "Interactive group play" },
        { icon: Shield, text: "Safe, supervised environment" },
      ],
    },
    {
      title: "School-Age Care",
      age: "Ages 7-12",
      schedule: "24-hour service",
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-600",
      description:
        "Flexible care options including after-school, evening, and overnight services",
      features: [
        { icon: Brain, text: "Quiet study space" },
        { icon: Star, text: "Supervised activities" },
        { icon: Shield, text: "Age-appropriate recreation" },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-yellow-50 via-pink-50 to-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-md">
              <Star className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-gray-600">
                Engaging Programs for Every Age!
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Our <span className="text-pink-500">Childcare</span> Programs
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Age-appropriate programs designed to nurture your child&apos;s
              growth and development in a safe, loving environment.
            </p>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-white -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`${program.bgColor} p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform duration-200`}
              >
                <h3 className="text-2xl font-bold mb-4 text-center">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {program.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className={`w-5 h-5 ${program.textColor} mr-3`} />
                    <span>{program.age}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className={`w-5 h-5 ${program.textColor} mr-3`} />
                    <span>{program.schedule}</span>
                  </div>
                </div>

                <div className="space-y-3 bg-white p-4 rounded-lg">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <feature.icon
                        className={`w-4 h-4 ${program.textColor} mr-2`}
                      />
                      <span className="text-sm text-gray-600">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Cta />
    </div>
  );
};

export default ProgramsPage;
