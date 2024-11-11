import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerData } from "./index";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-yellow-50 to-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <Link href="/">
                <Image
                  src={footerData.logo.src}
                  width={footerData.logo.width}
                  height={footerData.logo.height}
                  alt={footerData.logo.alt}
                  className="h-16 w-auto"
                />
              </Link>
              <Link
                href="/"
                className="text-lg sm:text-xl font-semibold text-gray-800"
              >
                {footerData.companyName}
              </Link>
            </div>
            <p className="text-gray-600">{footerData.tagline}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              {footerData.contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center">
                    <Icon className="w-5 h-5 text-pink-500 mr-3" />
                    {item.isExternal ? (
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-500 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="hover:text-pink-500 transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-pink-500 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              {footerData.socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5 text-pink-500" />
                  </a>
                );
              })}
            </div>
            <div className="mt-6">
              <p className="text-gray-600">
                {footerData.hours.weekday.prefix}{" "}
                <span className="text-pink-500">
                  {footerData.hours.weekday.highlight}
                </span>
              </p>
              <p className="text-gray-600">
                {footerData.hours.weekend.prefix}{" "}
                <span className="text-pink-500">
                  {footerData.hours.weekend.highlight}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500">{footerData.copyright}</p>
        </div>
        <div className="flex justify-center items-center space-x-1">
          <p className="text-gray-500">{footerData.credits.text}</p>
          <Link
            href={footerData.credits.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 transition-colors duration-200"
          >
            {footerData.credits.link.label}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
