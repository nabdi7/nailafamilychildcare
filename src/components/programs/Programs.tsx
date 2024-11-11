import React from "react";
import { Calendar, Clock } from "lucide-react";
import { programs } from "./index";

const Programs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            24/7 Childcare Services 💝
          </h2>
          <p className="text-xl text-gray-600">
            Reliable and loving care for your children - any time, day or night!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className={`w-5 h-5 ${program.textColor} mr-3`} />
                  <span>{program.age}</span>
                </div>
                <div className="flex items-center">
                  <Clock className={`w-5 h-5 ${program.textColor} mr-3`} />
                  <span>{program.schedule}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
