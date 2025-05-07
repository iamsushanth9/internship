import React from "react";
import screeningImg from "../assets/screening.png";
import selectionImg from "../assets/selection.png";
import medicalImg from "../assets/health.png";
import mobilizationImg from "../assets/mobilization.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const hiringSteps = [
  {
    title: "Resume Search",
    image: screeningImg,
    description: "We search for the best candidates based on your requirements."
  },
  {
    title: "Screening Process",
    image: selectionImg,
    description: "Thorough screening to ensure candidates meet all qualifications."
  },
  {
    title: "Medical Check",
    image: medicalImg,
    description: "Comprehensive health assessments for all candidates."
  },
  {
    title: "Mobilization",
    image: mobilizationImg,
    description: "Efficient deployment of selected candidates to their work locations."
  }
];

export default function HiringProcess() {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <section className="bg-white py-16 px-2">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-2"
          style={{ color: "#191919" }}
        >
          Our <span style={{ color: "#007958", fontSize: "clamp(2.5rem,6.5vw,4rem)" }}>HIRING</span> Process
        </h2>
        <p className="text-gray-500 text-center mb-10 max-w-2xl">
          We follow a structured and efficient hiring process to ensure the best match between candidates and employers.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"> {/* Adjusted to 4 columns */}
          {hiringSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md flex flex-col items-center p-6 gap-4 hover:shadow-lg transition"
              style={{ minHeight: 250 }} // Adjusted height for better alignment
            >
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#191919" }}>
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm text-center">{step.description}</p> {/* Centered text */}
              </div>
            </div>
          ))}
        </div>
        <button
          className="mt-2 px-6 py-2 rounded border border-gray-300 bg-white text-gray-800 font-semibold shadow hover:bg-gray-100 transition"
          style={{ fontFamily: "Inter, Arial, sans-serif" }}
          onClick={() => navigate("/hiring-process")} // Navigate to hiring process page
        >
          View Full Process
        </button>
      </div>
    </section>
  );
}
