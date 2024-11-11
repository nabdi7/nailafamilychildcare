import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="bg-white">
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-50 to-yellow-50 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our Family?
            </h2>
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

export default Cta;
