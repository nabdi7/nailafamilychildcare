import React from "react";
import { testimonials, StarRating } from "./index";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Happy Families! 💝</h2>
          <p className="text-xl text-gray-600">
            Here&apos;s what our wonderful parents have to say!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative h-full">
              <div className="bg-white p-8 rounded-xl shadow-lg relative z-10 h-full flex flex-col">
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-600 mb-6 flex-grow min-h-[3rem]">
                  {testimonial.quote}
                </p>

                <div className="flex items-center mt-auto">
                  <Image
                    src={testimonial.image}
                    width={48}
                    height={48}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-full h-full bg-gray-100 rounded-xl -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
