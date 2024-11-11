import React from "react";
import { featuresData } from "./index";
import Image from "next/image";

const Features = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Why Parents Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Image */}
          <div className="relative group">
            <div className="relative h-[600px] overflow-hidden rounded-3xl">
              <Image
                src={featuresData.image.src}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                alt={featuresData.image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent">
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-2xl font-semibold mb-2">
                    {featuresData.image.title}
                  </p>
                  <p className="text-lg opacity-90">
                    {featuresData.image.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="grid grid-cols-2 gap-6 content-center">
            {featuresData.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group cursor-pointer">
                  <div
                    className={`${feature.bgColor} p-8 rounded-3xl transition-transform duration-300 hover:-translate-y-2`}
                  >
                    <Icon
                      className={`w-8 h-8 ${feature.iconColor} mb-6 transition-transform duration-300 group-hover:scale-110`}
                    />
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
