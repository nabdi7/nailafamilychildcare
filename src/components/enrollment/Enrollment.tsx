import React from "react";
import Link from "next/link";
import { enrollmentSteps } from "./index";

const EnrollmentTimeline = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Getting Started is Easy! 💝
          </h2>
          <p className="text-xl text-gray-600">
            Follow these simple steps to join our loving childcare family!
          </p>
        </div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-pink-300 rounded-full"></div>

          <div className="space-y-12 lg:space-y-16">
            {enrollmentSteps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Step content */}
                  <div
                    className={`w-full lg:w-5/12 ${
                      index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"
                    }`}
                  >
                    <div className="bg-white p-8 rounded-xl shadow-lg relative z-10">
                      <div className="flex items-center justify-center lg:justify-start mb-4">
                        <div className="text-pink-400 mr-3">{step.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {step.title}
                          </h3>
                          <p className="text-sm text-pink-500 font-medium">
                            {step.timeframe}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    {/* Card shadow effect */}
                    <div className="absolute -bottom-2 -right-2 w-full h-full bg-gray-100 rounded-xl -z-10"></div>
                  </div>

                  {/* Timeline circle */}
                  <div className="relative z-20 my-8 lg:my-0">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-500 font-bold text-xl">
                        {step.step}
                      </span>
                    </div>
                    {/* Connector lines for mobile */}
                    {index < enrollmentSteps.length - 1 && (
                      <div className="lg:hidden absolute left-1/2 top-16 transform -translate-x-1/2 w-1 h-12 bg-pink-300 rounded-full"></div>
                    )}
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Family?
            </h3>
            <p className="text-gray-600 mb-6">
              Give your child the gift of quality care and education
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition-colors duration-200"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentTimeline;
