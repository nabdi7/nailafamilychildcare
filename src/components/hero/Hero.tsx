import React from "react";
import { Star } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="pb-20">
        <div className="relative bg-gradient-to-b from-yellow-50 via-pink-50 to-white pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-md animate-pulse">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-gray-600">
                  Trusted by Happy Families! 🌟
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Where Young
                <span className="text-pink-500"> Minds Grow </span>
                Together!
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                At Hiba Family Childcare in Seattle, we provide a safe, fun, and
                educational environment where children thrive and grow.
              </p>

              <div className="flex justify-center items-center space-x-4 sm:space-x-12 max-w-3xl mx-auto">
                <div className="text-center">
                  <h3 className="text-3xl sm:text-4xl font-bold text-pink-500">
                    8+
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Years of Experience!
                  </p>
                </div>
                <div className="h-16 w-px bg-gray-200"></div>
                <div className="text-center">
                  <h3 className="text-3xl sm:text-4xl font-bold text-yellow-500">
                    200+
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Happy children!
                  </p>
                </div>
                <div className="h-16 w-px bg-gray-200"></div>
                <div className="text-center">
                  <h3 className="text-3xl sm:text-4xl font-bold text-blue-500">
                    3
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Expert Staff!
                  </p>
                </div>
              </div>

              <div className="relative mt-16">
                <div className="absolute -top-8 left-1/4 w-24 h-24 bg-pink-200 rounded-full opacity-50 animate-bounce"></div>
                <div className="absolute -bottom-8 right-1/4 w-32 h-32 bg-yellow-100 rounded-full opacity-50 animate-bounce delay-150"></div>
                <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto relative">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="flex -space-x-4">
                      <div className="w-12 h-12 rounded-full bg-pink-200 border-2 border-white"></div>
                      <div className="w-12 h-12 rounded-full bg-yellow-200 border-2 border-white"></div>
                      <div className="w-12 h-12 rounded-full bg-blue-200 border-2 border-white"></div>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-xl">Join Our Family! 🎈</p>
                      <p className="text-gray-600">
                        Where every day is an adventure!
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/contact"
                          className="px-6 py-2 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 100"
              fill="white"
            >
              <path d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1440,50 V100 H0 V50Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
