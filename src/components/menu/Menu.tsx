"use client";
import React from "react";
import Link from "next/link";
import { Menu as MenuIcon, X, Phone } from "lucide-react";

const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? (
          <X className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <MenuIcon className="block h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/programs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-500"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <div className="block w-full px-3 py-2">
              <div className="inline-flex items-center bg-pink-100 rounded-full px-4 py-2 text-pink-500 hover:bg-pink-200 transition-colors duration-200">
                <Phone className="h-4 w-4 text-pink-500 mr-2 flex-shrink-0" />
                <a
                  href="tel:2063713011"
                  className="text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  (206)-371-3011
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
