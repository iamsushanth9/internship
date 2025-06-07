import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cirt1 from "../assets/cirt1.png";
import cirt2 from "../assets/cirt2.png";
import cirt3 from "../assets/cirt3.png";
import diversifiedImage from "../assets/diversified.png";
import globalImage from "../assets/global.png";

export default function WhyUs() {
  // Refs for scroll-to-section
  const globalFootprintRef = useRef(null);
  const diversifiedBusinessRef = useRef(null);
  const certificatesRef = useRef(null);
  const [activeSection, setActiveSection] = useState("global");
  const [activeIndex, setActiveIndex] = useState(0);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const options = { root: null, rootMargin: '0px', threshold: 0.6 }; // Adjust threshold for better activation
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setActiveSection(entry.target.id), 100); // Add slight delay for smooth effect
        }
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
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Peach background */}
      <div className="fixed inset-0 -z-10 bg-white" aria-hidden="true" />
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
        {/* Header Section */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900">Why Choose <span style={{ color: "#007958", fontSize: "clamp(2.5rem,6.5vw,4rem)" }}>
            <br/>
            <br/>
            MENA SUPPORT PRIVATE LIMITED
          </span></h1>
            <p className="mt-4 text-lg text-gray-700">
              <br/>
              Discover what sets us apart and why leading companies trust us with their HR needs.
            </p>
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
            {/* Card 1 */}
            <section
              id="global"
              ref={globalFootprintRef}
              className="mb-12 bg-white rounded-xl p-8 scroll-mt-[100px] transition-all duration-300 flex flex-col md:flex-row items-center"
            >
              <div className="flex-1 bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6 md:mb-0 md:mr-6 order-1 md:order-none">
                <img
                  src={globalImage}
                  alt="Global Footprint"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 order-2 md:order-none">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Global Footprint</h2>
                <p className="mb-4 text-gray-800">
                  MENA Support Service Limited has established a strong global presence with offices and operations in multiple countries across the Middle East, North Africa, Asia, and Europe.
                </p>
                <p className="mb-4 text-gray-800">
                  Our global footprint allows us to provide localized services while leveraging our international expertise and resources. We understand the unique challenges and opportunities in different regions and tailor our solutions accordingly.
                </p>
                <p className="mb-4 text-gray-800">
                  With a network of partners and affiliates worldwide, we can support your HR needs wherever your business operates.
                </p>
              </div>
            </section>
            {/* Card 2 */}
            <section
              id="diversified"
              ref={diversifiedBusinessRef}
              className="mb-12 bg-white rounded-xl p-8 scroll-mt-[100px] transition-all duration-300 flex flex-col md:flex-row items-center"
            >
              <div className="flex-1 bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-6 md:mb-0 md:mr-6">
                <img
                  src={diversifiedImage}
                  alt="Diversified Business Line"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Diversified Business Line</h2>
                <p className="mb-4 text-gray-800">
                  At MENA Support Service Limited, we offer a diverse range of HR services to meet all your business needs. Our comprehensive service portfolio includes:
                </p>
                <ul className="list-disc ml-8 mb-4 text-gray-900">
                  <li>Manpower Consultancy & Recruitment Services</li>
                  <li>Outsourcing Solutions</li>
                  <li>Specialist Support Services</li>
                  <li>HR Life Support Services</li>
                </ul>
                <p className="mb-4 text-gray-800">
                  Our diversified business line ensures that we can be your one-stop solution for all HR-related needs, from recruitment to ongoing support.
                </p>
              </div>
            </section>
            {/* Card 3 */}
            <section
              id="certificates"
              ref={certificatesRef}
              className="mb-12 bg-white rounded-xl p-8 scroll-mt-[100px] transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Certificates</h2>
              <p className="mb-4 text-gray-800">
                
                MENA Support Service Limited is proud to hold various international certifications that demonstrate our commitment to quality, safety, and excellence in all our operations.
                <br/>
                <br/>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center">
                <img
                  src={cirt1}
                  alt="Certificate 1"
                  className="w-64 h-64 object-contain mx-auto"
                />
                <img
                  src={cirt2}
                  alt="Certificate 2"
                  className="w-64 h-64 object-contain mx-auto"
                />
                <img
                  src={cirt3}
                  alt="Certificate 3"
                  className="w-64 h-64 object-contain mx-auto"
                />
              </div>
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
