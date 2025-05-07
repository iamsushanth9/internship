import React, { useState } from "react";

export default function AboutCompany() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center py-8"
      style={{
        background: "#f7f8fa",
        fontFamily: "'Inter', 'Poppins', Arial, sans-serif"
      }}
    >
      <div className="w-full max-w-6xl px-2 sm:px-8">
        {/* Centered Heading */}
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-3"
          style={{
            color: "#191919",
            letterSpacing: "-0.02em"
          }}
        >
          About <span style={{ color: "#007958", fontSize: "1.2em" }}>MENA</span> <br /> <br />
        </h2>
        <p className="text-center text-gray-600 mb-8 text-base md:text-lg">
          Learn more about MENA Support Service Limited, our team, and the services we offer.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-8 py-3 rounded-t-lg font-semibold text-lg transition ${
              activeTab === "about"
                ? "bg-white shadow text-[#191919]"
                : "bg-[#f5f5f5] text-gray-500"
            }`}
            onClick={() => setActiveTab("about")}
          >
            About Us
          </button>
          <button
            className={`px-8 py-3 rounded-t-lg font-semibold text-lg transition ${
              activeTab === "team"
                ? "bg-white shadow text-[#191919]"
                : "bg-[#f5f5f5] text-gray-500"
            }`}
            onClick={() => setActiveTab("team")}
          >
            Our Team
          </button>
          <button
            className={`px-8 py-3 rounded-t-lg font-semibold text-lg transition ${
              activeTab === "services"
                ? "bg-white shadow text-[#191919]"
                : "bg-[#f5f5f5] text-gray-500"
            }`}
            onClick={() => setActiveTab("services")}
          >
            Our Services
          </button>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col md:flex-row gap-10 items-center md:items-start">
          {/* Left: Text */}
          <div className="flex-1 min-w-0">
            {activeTab === "about" && (
              <>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#191919]">
                  Our <span style={{ color: "#007958", fontSize: "1.2em" }}>Story</span>
                </h3>
                <p className="text-gray-700 mb-4 text-lg">
                  <span className="font-semibold" style={{ color: "#007958" }}>MENA LIMITED</span> is a leading HR Consultancy & Placement company with 40+ years of experience. Headquartered in Mumbai, we have branch offices across major Indian cities.
                </p>
              </>
            )}
            {activeTab === "team" && (
              <>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#191919]">
                  Our <span style={{ color: "#007958", fontSize: "1.2em" }}>Team</span>
                </h3>
                <p className="text-gray-700 mb-4 text-lg">
                  Our team consists of experienced HR professionals, industry experts, and dedicated support staff committed to delivering exceptional service and results for our clients.
                </p>
                <p className="text-gray-700 text-lg">
                  We value collaboration, integrity, and continuous learning, ensuring that our team stays ahead in the ever-evolving HR landscape.
                </p>
              </>
            )}
            {activeTab === "services" && (
              <>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#191919]">
                  Our <span style={{ color: "#007958", fontSize: "1.2em" }}>Services</span>
                </h3>
                <p className="text-gray-700 mb-4 text-lg">
                  We offer a comprehensive suite of HR services, including recruitment, talent management, payroll, compliance, and employee development.
                </p>
                <p className="text-gray-700 text-lg">
                  Our solutions are tailored to meet the unique needs of each client, helping organizations achieve their business goals efficiently.
                </p>
              </>
            )}
          </div>
          {/* Right: Image */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-center">
            {activeTab === "team" && (
              <img
                src={require("../assets/ourteam.jpeg")}
                alt="Our Team"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            )}
            {activeTab === "services" && (
              <img
                src={require("../assets/ourservices.jpeg")}
                alt="Our Services"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            )}
            {activeTab === "about" && (
              <div className="bg-gray-200 rounded-lg flex items-center justify-center w-72 h-48 md:w-80 md:h-56">
                <span className="text-gray-400 text-5xl">🖼️</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
