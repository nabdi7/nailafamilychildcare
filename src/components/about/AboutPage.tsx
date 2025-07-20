import React from "react";
import { Star } from "lucide-react";
import Cta from "../cta/Cta";
import { values } from "./index";

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-yellow-50 via-pink-50 to-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-md">
              <Star className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-gray-600">Our Story & Mission</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Providing <span className="text-pink-500">Quality Care</span> with
              <br /> Love and Dedication
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re dedicated to providing exceptional childcare that
              parents can trust and children love.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-50 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
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

export default AboutPage;
