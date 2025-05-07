import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const photostream = [
  "/photos/photo1.jpg",
  "/photos/photo2.jpg",
  "/photos/photo3.jpg",
  "/photos/photo4.jpg",
  "/photos/photo5.jpg",
  "/photos/photo6.jpg"
];

export default function OrgStructure() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed animated gradient background */}
      <div
        className="fixed inset-0 -z-10 bg-gradient-to-br from-[#232b32] via-[#343a50] to-[#4b6cb7] bg-[length:400%_400%] bg-no-repeat bg-fixed animate-gradient"
        aria-hidden="true"
      />
      <div className="relative z-10 font-sans min-h-screen flex flex-col">
        <Navbar />

        {/* Breadcrumb */}
        <div className="bg-gray-100/90 py-2">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="text-sm">
              <ol className="list-none p-0 flex">
                <li>
                  <a href="/" className="text-gray-600 hover:text-cyan-700">Home</a>
                  <span className="mx-2 text-gray-400">/</span>
                </li>
                <li>
                  <a href="/about" className="text-gray-600 hover:text-cyan-700">About Us</a>
                  <span className="mx-2 text-gray-400">/</span>
                </li>
                <li className="text-cyan-700 font-semibold">Organisational Structure</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-white/90 py-6 shadow-sm">
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-gray-700 italic text-center">
              Profit from our Entrepreneurial Corporate Culture to make the most of our Internal Talent and Develop Meaningful Career Paths for Employees, striving towards best practice in everything we do throughout our global offices.
            </p>
          </div>
        </div>

        {/* Org Chart Section */}
        <div className="flex-1 py-12 bg-transparent">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="bg-[#6d28d9]/90 text-white inline-block px-6 py-2 text-xl font-bold mb-10 rounded shadow-lg">ORGANISATIONAL CHART</h1>
            <div className="flex justify-center mt-8">
              <img
                src="/images/org-chart.png"
                alt="Organisational Chart"
                className="w-full max-w-3xl rounded shadow-lg border border-gray-200 bg-white/80 backdrop-blur"
              />
            </div>
          </div>
        </div>

        <Footer photostream={photostream} />
      </div>
    </div>
  );
}
