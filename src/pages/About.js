import React from "react";
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
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(315deg, #ffd6c0 50%, #fdf6e3 50%)"
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
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-12">
          <h2 className="text-5xl font-light text-gray-900 min-w-[320px]">What MENA does</h2>
          <div className="flex-1 flex items-center">
            <p className="text-lg text-gray-800 leading-relaxed">
              MENA Limited is a premier Human Resources Management Consultancy & Placement company headquartered in Mumbai, India. With over 40 years of industry expertise, we have emerged as a trusted partner in delivering end-to-end HR solutions across the globe.
              <br /><br />
              Our Pan-India presence spans branch offices in Mumbai, Delhi, Goa, Bhubaneswar, Vizag, Kolkata, Chennai, Madurai, Cochin, Uttar Pradesh, Bihar, and Orissa, ensuring localized support and workforce sourcing across the country.
              <br /><br />
              Our global footprint includes offices in the KSA (Dammam, Riyadh, Jeddah, and Jajan), Kuwait, UAE, Qatar, Bahrain, Nepal, Sri Lanka, Bangladesh, Pakistan, The Philippines, Ghana, Kenya and international recruitment hubs, making us capable of providing multinational workforce solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Legacy section */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-12">
          <h2 className="text-5xl font-light text-gray-900 min-w-[320px]">Our Legacy</h2>
          <div className="flex-1 flex items-center">
            <p className="text-lg text-gray-800 leading-relaxed">
              Founded by Dr. Dev Mohanty, a visionary entrepreneur with a passion for global mobility, MENA Limited has evolved into a full-fledged industrial and national services firm, certified with ISMS 27001:2013, ISO 9001:2015, and OHSAS 18001:2007.
            </p>
          </div>
        </div>
      </section>

      {/* Technology and services section with images */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-12">
          {/* Left: Heading */}
          <h2 className="text-5xl font-light text-gray-900 min-w-[340px] mb-8 md:mb-0 flex items-center">
            Technology<br />and services
          </h2>
          {/* Right: Grid of cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12">
            {cards.map((item, idx) => (
              <div key={item.title} className="flex flex-col items-start">
                <img
                  src={item.img}
                  alt={item.title}
                  className="mb-4 w-14 h-14 object-contain"
                  draggable={false}
                />
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-700 mb-4 text-base">{item.desc}</p>
              </div>
            ))}
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
