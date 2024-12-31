"use client";
import React, { useState } from "react";
import { Phone } from "lucide-react";
import Link from "next/link";
import Menu from "../menu/Menu";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white">
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/">
                <Image
                  src="/logo3.png"
                  width={64}
                  height={64}
                  alt="Najah Family Childcare"
                  className="h-16 w-auto"
                />
              </Link>
              <Link
                href="/"
                className="text-lg sm:text-xl font-semibold text-gray-800"
              >
                Najah Family Childcare
              </Link>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/about"
                className="text-gray-700 hover:text-pink-500 transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                href="/programs"
                className="text-gray-700 hover:text-pink-500 transition-colors duration-200"
              >
                Programs
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-pink-500 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden md:flex bg-pink-100 rounded-full px-2 sm:px-4 py-2 items-center">
                <Phone className="h-4 w-4 text-pink-500 mr-1 sm:mr-2 flex-shrink-0" />
                <a
                  href="tel:2063713011"
                  className="text-pink-500 text-xs sm:text-sm whitespace-nowrap"
                >
                  (206)-422-8654
                </a>
              </div>

              {/* Mobile Menu */}
              <div className="md:hidden">
                <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
