import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CrewManagement() {
    const photostream = [ // Add this array
        "/photos/photo1.jpg",
        "/photos/photo2.jpg",
        "/photos/photo3.jpg",
        "/photos/photo4.jpg",
        "/photos/photo5.jpg",
        "/photos/photo6.jpg"
      ];
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-bold mb-6">Recruitment and Training</h1>
        <p>
          {/* Your content here */}
          We provide end-to-end recruitment and training solutions for global industries...
        </p>
      </div>
      <Footer />
    </div>
  );
}
