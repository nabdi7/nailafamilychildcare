import React from "react";
import { Download, Star } from "lucide-react";
import Cta from "../cta/Cta";
import { resources } from "./index";

const ParentResources = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-yellow-50 via-pink-50 to-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-md">
              <Star className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-gray-600">
                Supporting Parents Every Step!
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Parent <span className="text-pink-500">Resources</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to support your child&apos;s growth and
              development
            </p>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-white -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className={`${resource.bgColor} p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-transform duration-200`}
              >
                <div className="flex items-center mb-4">
                  <resource.icon
                    className={`h-8 w-8 ${resource.textColor} mr-3`}
                  />
                  <h3 className="text-2xl font-bold">{resource.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{resource.description}</p>

                <div className="space-y-3 bg-white p-4 rounded-lg mb-6">
                  {resource.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Star className={`w-4 h-4 ${resource.textColor} mr-2`} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={resource.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resource
                </a>
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

export default ParentResources;
