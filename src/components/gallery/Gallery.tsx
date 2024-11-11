import React from "react";
import { Camera, Heart } from "lucide-react";
import Image from "next/image";
import Cta from "../cta/Cta";
import { galleryCategories, heroContent } from "./index";

const Gallery = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-yellow-50 via-pink-50 to-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-md">
              <Camera className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-gray-600">{heroContent.badge}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Our{" "}
              <span className="text-pink-500">
                {heroContent.titleHighlight}
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {heroContent.description}
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Sections */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-white -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {galleryCategories.map((category, index) => (
            <div key={index} className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
                {category.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-72 w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{image.alt}</h3>
                        <div className="flex items-center">
                          <Heart className="w-5 h-5 text-pink-400 mr-2" />
                          <span className="text-sm">Precious Moments</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Cta />
    </div>
  );
};

export default Gallery;
