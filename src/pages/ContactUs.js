import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiMail, FiPhone } from "react-icons/fi";

export default function ContactUs() {
  // Animation states for each element
  const [show, setShow] = useState(Array(13).fill(false));
  const [showFooter, setShowFooter] = useState(false);

  // Staggered animation for each element
  useEffect(() => {
    let timers = [];
    for (let i = 0; i < show.length; i++) {
      timers.push(
        setTimeout(() => setShow((s) => {
          const next = [...s];
          next[i] = true;
          return next;
        }), 200 + i * 120)
      );
    }
    timers.push(
      setTimeout(() => setShowFooter(true), 200 + show.length * 120)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  let idx = 0;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(120deg, #E24C00 0%, #fff 100%)",
      }}
    >
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-16">
        <div className="w-full max-w-6xl flex flex-col md:flex-row bg-transparent md:space-x-12 px-4">
          {/* Left Column */}
          <div
            className={`md:w-1/2 w-full flex flex-col justify-center mb-10 md:mb-0`}
          >
            <h1
              className={`text-4xl font-bold mb-4 text-white transition-all duration-700 ease-out
                ${show[idx] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
              `}
              style={{ fontFamily: "sans-serif" }}
            >
              Contact Us
            </h1>
            {++idx && (
              <p
                className={`mb-8 text-gray-200 text-lg max-w-md transition-all duration-700 ease-out
                  ${show[idx] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
                `}
              >
                Not sure what you need? The team at MENA Support Services will be happy to listen to you and suggest ideas you hadn't considered.
              </p>
            )}
            {++idx && (
              <div
                className={`flex items-center mb-4 text-gray-200 transition-all duration-700 ease-out
                  ${show[idx] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
                `}
              >
                <FiMail className="mr-3 text-xl" />
                <span>info@menalimited.com</span>
              </div>
            )}
            {++idx && (
              <div
                className={`flex items-center text-gray-200 transition-all duration-700 ease-out
                  ${show[idx] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
                `}
              >
                <FiPhone className="mr-3 text-xl" />
                <span>Support: (+91) 123 456 7890</span>
              </div>
            )}
          </div>
          {/* Right Column */}
          <div
            className={`md:w-1/2 w-full transition-all duration-700 ease-out`}
          >
            <form
              className={`bg-white rounded-2xl shadow-lg p-8 w-full space-y-5`}
            >
              {++idx && (
                <h2 className={`text-2xl font-semibold mb-2 text-gray-900 transition-all duration-700 ease-out
                  ${show[idx] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
                `}>
                  We'd love to hear from you!<br />Let's get in touch
                </h2>
              )}
              <div className="flex flex-col md:flex-row md:space-x-4">
                {++idx && (
                  <input
                    type="text"
                    placeholder="Full Name"
                    className={`w-full md:w-1/2 border rounded px-3 py-2 mb-3 md:mb-0 transition-all duration-700 ease-out
                      ${show[idx] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
                    `}
                  />
                )}
                {++idx && (
                  <input
                    type="text"
                    placeholder="Company"
                    className={`w-full md:w-1/2 border rounded px-3 py-2 transition-all duration-700 ease-out
                      ${show[idx] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
                    `}
                  />
                )}
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4">
                {++idx && (
                  <input
                    type="email"
                    placeholder="Email"
                    className={`w-full md:w-1/2 border rounded px-3 py-2 mb-3 md:mb-0 transition-all duration-700 ease-out
                      ${show[idx] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
                    `}
                  />
                )}
                <div className="w-full md:w-1/2 flex">
                  {++idx && (
                    <select className={`border rounded-l px-2 py-2 bg-gray-50 text-gray-700 transition-all duration-700 ease-out
                      ${show[idx] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
                    `}>
                      <option>IN</option>
                      <option>US</option>
                      <option>UK</option>
                    </select>
                  )}
                  {++idx && (
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className={`w-full border-t border-b border-r rounded-r px-3 py-2 transition-all duration-700 ease-out
                        ${show[idx] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
                      `}
                    />
                  )}
                </div>
              </div>
              {++idx && (
                <input
                  type="text"
                  placeholder="Address"
                  className={`w-full border rounded px-3 py-2 transition-all duration-700 ease-out
                    ${show[idx] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
                  `}
                />
              )}
              {++idx && (
                <textarea
                  placeholder="Your Message"
                  className={`w-full border rounded px-3 py-2 transition-all duration-700 ease-out
                    ${show[idx] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
                  `}
                  rows={4}
                />
              )}
              {++idx && (
                <button
                  type="submit"
                  className={`w-full bg-[#E24C00] text-white py-2 rounded font-semibold hover:bg-orange-700 transition transition-all duration-700 ease-out
                    ${show[idx] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
                  `}
                >
                  Send Message
                </button>
              )}
            </form>
          </div>
        </div>
      </main>
      <div
        className={`transition-all duration-700 ease-out
          ${showFooter ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
        `}
      >
        <Footer />
      </div>
    </div>
  );
}