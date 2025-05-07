import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function WhyUs() {
  // Refs for scroll-to-section
  const globalFootprintRef = useRef(null);
  const diversifiedBusinessRef = useRef(null);
  const certificatesRef = useRef(null);
  const [activeSection, setActiveSection] = useState("global");

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const options = { root: null, rootMargin: '0px', threshold: 0.5 };
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, options);
    [globalFootprintRef, diversifiedBusinessRef, certificatesRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => {
      [globalFootprintRef, diversifiedBusinessRef, certificatesRef].forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // Scroll to section
  const scrollToSection = (ref, id) => {
    setActiveSection(id);
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen">
      {/* Peach background */}
      <div className="fixed inset-0 -z-10 bg-[#ffd6c0]" aria-hidden="true" />
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
                <li className="text-cyan-700 font-semibold">Why Us</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Main layout: sticky sidebar + scrollable content */}
        <div className="flex-1 flex bg-transparent h-[calc(100vh-64px-40px)]">
          {/* Sidebar */}
          <aside className="hidden md:block w-72 bg-[#232b32] px-0 py-10 sticky top-[64px] h-[calc(100vh-64px)]">
            <nav>
              <ul>
                <li>
                  <button
                    onClick={() => scrollToSection(globalFootprintRef, "global")}
                    className={`w-full text-left px-8 py-4 rounded-l-lg mb-2 transition-colors duration-200 font-semibold text-lg
                      ${activeSection === "global"
                        ? "bg-gray-200 text-blue-900"
                        : "text-gray-100 hover:bg-gray-700 hover:text-white"}`}
                  >
                    Global Footprint
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(diversifiedBusinessRef, "diversified")}
                    className={`w-full text-left px-8 py-4 rounded-l-lg mb-2 transition-colors duration-200 font-semibold text-lg
                      ${activeSection === "diversified"
                        ? "bg-gray-200 text-blue-900"
                        : "text-gray-100 hover:bg-gray-700 hover:text-white"}`}
                  >
                    Diversified Business Line
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(certificatesRef, "certificates")}
                    className={`w-full text-left px-8 py-4 rounded-l-lg mb-2 transition-colors duration-200 font-semibold text-lg
                      ${activeSection === "certificates"
                        ? "bg-gray-200 text-blue-900"
                        : "text-gray-100 hover:bg-gray-700 hover:text-white"}`}
                  >
                    Certificates
                  </button>
                </li>
              </ul>
            </nav>
          </aside>
          {/* Scrollable content */}
          <main className="flex-1 overflow-y-auto py-10 px-4 md:px-12">
            <h1 className="text-3xl font-bold mb-8 text-[#e63946]">Why Choose Us</h1>
            {/* Card 1 */}
            <section
              id="global"
              ref={globalFootprintRef}
              className="mb-12 bg-[#fdf6e3] rounded-xl shadow-lg p-8 scroll-mt-[100px] transition-all duration-300 hover:shadow-2xl hover:bg-[#f5efe0]"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Global Footprint</h2>
              <p className="mb-4 text-gray-800">
                MENA LIMITED has built a robust international presence with operations spanning across multiple continents. Our strategic global footprint enables us to deliver exceptional HR solutions and manpower services worldwide.
              </p>
              <p className="mb-4 text-gray-800">
                With regional offices strategically located in:
              </p>
              <ul className="list-disc ml-8 mb-4 text-gray-900">
                <li><b>Middle East:</b> UAE, Saudi Arabia, Qatar, Kuwait, Bahrain</li>
                <li><b>South Asia:</b> India (HQ), Nepal, Sri Lanka, Bangladesh, Pakistan</li>
                <li><b>Southeast Asia:</b> Philippines, Malaysia, Indonesia</li>
                <li><b>Africa:</b> Egypt, Nigeria, Kenya, South Africa</li>
              </ul>
              <p className="mb-4 text-gray-800">
                Our extensive network allows us to source diverse talent pools, understand local market dynamics, and navigate complex regulatory environments across different regions, providing our clients with truly global workforce solutions.
              </p>
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="italic text-blue-800">
                  "MENA LIMITED's global presence has allowed us to rapidly scale our operations across three continents with consistent quality and compliance standards."
                </p>
                <p className="text-right text-sm mt-2 text-gray-600">- Global HR Director, Fortune 500 Company</p>
              </div>
            </section>
            {/* Card 2 */}
            <section
              id="diversified"
              ref={diversifiedBusinessRef}
              className="mb-12 bg-[#fdf6e3] rounded-xl shadow-lg p-8 scroll-mt-[100px] transition-all duration-300 hover:shadow-2xl hover:bg-[#f5efe0]"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Diversified Business Line</h2>
              <p className="mb-4 text-gray-800">
                At MENA LIMITED, we offer comprehensive end-to-end human resource solutions catering to diverse industries and specialized needs. Our diversified business line includes:
              </p>
              <ul className="list-disc ml-8 mb-4 text-gray-900">
                <li><b>Recruitment & Staffing:</b> Specialized talent acquisition for permanent, contract, and temporary positions across all professional levels and industries.</li>
                <li><b>Manpower Outsourcing:</b> Comprehensive workforce management solutions, including payroll, compliance, and employee administration.</li>
                <li><b>Global Mobility Solutions:</b> Seamless cross-border employee transitions with visa processing, relocation assistance, and compliance support.</li>
                <li><b>HR Consulting:</b> Strategic advisory services for organizational development, compensation structure, and HR technology implementation.</li>
              </ul>
              <p className="mb-4 text-gray-800">
                Our diversified portfolio enables us to provide holistic workforce solutions tailored to each client's unique requirements, industry dynamics, and growth objectives.
              </p>
            </section>
            {/* Card 3 */}
            <section
              id="certificates"
              ref={certificatesRef}
              className="mb-12 bg-[#fdf6e3] rounded-xl shadow-lg p-8 scroll-mt-[100px] transition-all duration-300 hover:shadow-2xl hover:bg-[#f5efe0]"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Certificates</h2>
              <p className="mb-4 text-gray-800">
                MENA LIMITED maintains the highest standards of quality, ethics, and compliance in all our operations globally. Our commitment to excellence is validated through numerous industry certifications and accreditations:
              </p>
              <ul className="list-disc ml-8 mb-4 text-gray-900">
                <li><b>ISO 9001:2015:</b> Quality Management System certification ensuring consistent service delivery and continuous improvement processes.</li>
                <li><b>ISO 27001:2013:</b> Information Security Management certification demonstrating our commitment to data protection and security.</li>
                <li><b>GDPR Compliance:</b> Adherence to the European Union's General Data Protection Regulation for processing personal data.</li>
              </ul>
              <p className="mb-4 text-gray-800">
                These certifications reflect our unwavering commitment to maintaining the highest standards in every aspect of our operations, from service delivery to data security and ethical business practices.
              </p>
            </section>
          </main>
        </div>
        <Footer photostream={[
          "/photos/photo1.jpg",
          "/photos/photo2.jpg",
          "/photos/photo3.jpg",
          "/photos/photo4.jpg",
          "/photos/photo5.jpg",
          "/photos/photo6.jpg"
        ]} />
      </div>
    </div>
  );
}
