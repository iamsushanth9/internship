import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ibmImg from "../assets/ibm.png";

// Import your images


const cards = [
  {
    title: "Manpower Consultancy & Recruitment Services",
    desc: "Connecting skilled professionals to top employers worldwide.",
  },
  {
    title: "Outsourcing ",
    desc: "Empowering companies to optimize operations.",
  },
  {
    title: "Specialist Services",
    desc: "Modernize applications, servers and storage to integrate with hybrid cloud and AI.",
  },
  {
    title: "HR Life Support Services",
    desc: " Supporting on-site employee well-being.",
  }
];

export default function About() {
  const technologySectionRef = useRef(null); // Reference for the TECHNOLOGY And SERVICES section

  const scrollToTechnologySection = () => {
    if (technologySectionRef.current) {
      technologySectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "#ffffff", // Changed gradient background to white
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="w-full">
        <div className="relative w-full h-[380px] md:h-[440px]">
          <img
            src={ibmImg}
            alt="IBM"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start pl-8 md:pl-16">
            <nav className="mb-3">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <a href="/" className="text-blue-200 hover:underline">Home</a>
                </li>
                <li className="text-white">/</li>
                <li className="text-white">About</li>
              </ol>
            </nav>
            <h1 className="text-5xl font-light text-white mb-4 drop-shadow-lg">About MENA</h1>
            <p className="text-xl text-white max-w-xl drop-shadow-lg">
              Creators, partners and clients putting technology to work in the real world
            </p>
          </div>
        </div>
      </section>

      {/* What MENA does section */}
      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What <span style={{ color: "#007958", fontSize: "clamp(2.5rem,6.5vw,4rem)" }}>
            MENA
          </span> Does</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            MENA Limited is a premier Human Resources Management Consultancy & Placement company headquartered in Mumbai, India. With over 40 years of industry expertise, we have emerged as a trusted partner in delivering end-to-end HR solutions across the globe.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Our Pan-India presence spans branch offices in Mumbai, Delhi, Goa, Bhubaneswar, Vizag, Kolkata, Chennai, Madurai, Cochin, Uttar Pradesh, Bihar, and Orissa, ensuring localized support and workforce sourcing across the country.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
           Our global footprint includes offices in the KSA (Dammam, Riyadh, Jeddah, and Jajan), Kuwait, UAE, Qatar, Bahrain, Nepal, Sri Lanka, Bangladesh, Pakistan, The Philippines, Ghana, Kenya and international recruitment hubs, making us capable of providing multinational workforce solutions.
          </p>
          <div className="mt-6">
            <button
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
              onClick={scrollToTechnologySection} // Scroll to TECHNOLOGY And SERVICES section
            >
              Learn More About Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Our Legacy section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">OUR <span style={{ color: "#007958", fontSize: "clamp(2.5rem,6.5vw,4rem)" }}>
            LEGACY
          </span></h2>
          <p className="text-lg text-gray-600 mb-12">
            A brief history of MENA Support Service Limited and our journey to becoming a global HR leader.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2"><span style={{ color: "#ff4500", fontSize: "clamp(2.5rem,6.5vw,4rem)" }}>
            2007
          </span></h3>
              <p className="text-lg text-gray-700">OHSAS 18001</p>
              <p className="text-gray-600 mt-2">
                MENA Support Service Limited was founded with a vision to revolutionize the HR industry.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2"><span style={{ color: "#ff4500", fontSize: "clamp(2.5rem,6.5vw,4rem)" }}>
            2013
          </span></h3>
              <p className="text-lg text-gray-700">ISMS 27001</p>
              <p className="text-gray-600 mt-2">
                We expanded our operations to multiple countries, establishing a global presence.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2"><span style={{ color: "#ff4500", fontSize: "clamp(2.5rem,6.5vw,4rem)" }}>
            2015
          </span></h3>
              <p className="text-lg text-gray-700">ISO 9001</p>
              <p className="text-gray-600 mt-2">
                Today, we are recognized as a global leader in HR management and recruitment services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology and services section with images */}
      <section className="w-full py-16" ref={technologySectionRef}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4"><span style={{ color: "#007958", fontSize: "clamp(2.5rem,6.5vw,4rem)" }}>
            TECHNOLOGY
          </span> AND <span style={{ color: "#007958", fontSize: "clamp(2.5rem,6.5vw,4rem)" }}>
            SERVICES
          </span></h2>
          <p className="text-lg text-gray-600 mb-12">
            We leverage cutting-edge technology to provide the best HR solutions to our clients.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((item, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-lg p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <img
                    src={item.img || "placeholder.png"} // Replace with actual image paths
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                    draggable={false}
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO? section */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontSize: "clamp(2.5rem,6.5vw,4rem)" }}>
            WHAT <span style={{ color: "#007958" }}>WE DO?</span>
            <br />
            <br />
          </h2>
          <ul className="text-lg text-gray-800 space-y-3">
            <li>✅ Proven Experience – 40+ years</li>
            <li>✅ Vast Network – 20+ countries</li>
            <li>✅ Replacement Guarantee</li>
            <li>✅ HR Functions Mastery</li>
            <li>✅ Skilled Manpower</li>
            <li>✅ IATA-Certified Travel Desk</li>
            <li>✅ International Recruitment Standards</li>
          </ul>
          <div className="mt-10 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">Our Vision</h3>
              <p className="text-lg text-gray-800">
                To become the leading HR enabler globally by transforming organizations and enriching lives through quality placements and exceptional service.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">Our Team</h3>
              <p className="text-lg text-gray-800">
                Led by Ms. Nancy R., our team comprises HR strategists, IT experts, recruiters, and operational staff with an unwavering commitment to delivering results with integrity.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black mb-2">Let’s Build the Future Together</h3>
              <p className="text-lg text-gray-800">
                We invite you to experience the MENA advantage – professionalism, commitment, and a global reach that empowers your workforce and transforms your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer photostream={[
        "/photos/photo1.jpg",
        "/photos/photo2.jpg",
        "/photos/photo3.jpg",
        "/photos/photo4.jpg",
        "/photos/photo5.jpg",
        "/photos/photo6.jpg"
      ]} />
    </div>
  );
}
