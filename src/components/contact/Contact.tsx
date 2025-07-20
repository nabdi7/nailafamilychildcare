"use client";
import React, { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Star, Send, Clock } from "lucide-react";
import { ContactFormState, contactMethods, initialFormState } from "./index";

const Contact = () => {
  const [formState, setState] = useState<ContactFormState>(initialFormState);
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_APP_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_APP_TEMPLATE_ID ?? "",
        formRef.current!,
        process.env.NEXT_PUBLIC_APP_USER_ID ?? ""
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setState((prevState) => ({
            ...prevState,
            formSubmitted: true,
            contactMessage: "We got your message. Thanks!",
          }));
          setTimeout(() => {
            setState(initialFormState);
          }, 2000);
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-50 to-blue-50 pt-16 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse delay-300"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse delay-700"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 shadow-md mb-6">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span className="text-gray-600">Here to Help</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let&apos;s Start a <br />
                <span className="text-pink-500">Conversation</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl">
                Have questions about our childcare services? We&apos;re
                here to help your family with all your needs.
              </p>
            </div>

            <div className="flex-1">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="user_name"
                    value={formState.user_name}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        user_name: e.target.value,
                      }))
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-pink-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="user_email"
                    value={formState.user_email}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        user_email: e.target.value,
                      }))
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-pink-500"
                  />
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    name="message"
                    value={formState.message}
                    onChange={(e) =>
                      setState((prevState) => ({
                        ...prevState,
                        message: e.target.value,
                      }))
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-pink-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-pink-500 text-white py-3 px-6 rounded-xl hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                  {formState.formSubmitted && (
                    <p className="text-pink-500">Message successfully sent!!</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-white rounded-2xl shadow-md">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <a
                    href={method.link}
                    className="text-gray-900 font-medium mb-2 hover:text-pink-500 transition-colors duration-300"
                    {...method.linkProps}
                  >
                    {method.details}
                  </a>
                  <p className="text-gray-600">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center">
                <div className="p-4 bg-pink-50 rounded-2xl mr-6">
                  <Clock className="w-12 h-12 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Flexible Hours</h3>
                  <p className="text-gray-600">Extended hours to fit your schedule</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-lg font-medium text-gray-900 mb-2">
                  Emergency Care Available
                </p>
                <a
                  href="tel:2068228353"
                  className="text-pink-500 font-medium hover:text-pink-600 transition-colors duration-300"
                >
                  Call us: (206) 822-8353
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
