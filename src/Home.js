import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HiringProcess from "./components/HiringProcess";
import AboutCompany from "./components/AboutCompany";
import OurClients from "./components/OurClients";
import Footer from "./components/Footer";

// --- Data ---


const clientLogos = [
  { alt: "Hyundai", src: "/clients/hyundai.png" },
  { alt: "Weatherford", src: "/clients/weatherford.png" },
  { alt: "ITT", src: "/clients/itt.png" },
  { alt: "Etisalat", src: "/clients/etisalat.png" }
];

const photostream = [
  "/photos/photo1.jpg",
  "/photos/photo2.jpg",
  "/photos/photo3.jpg",
  "/photos/photo4.jpg",
  "/photos/photo5.jpg",
  "/photos/photo6.jpg"
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      
      {/* Main content wrapper */}
      <div className="relative">
        {/* Direct container to eliminate gaps */}
        <div className="overflow-visible">
          <Hero />
          <HiringProcess />
        </div>
        
        <AboutCompany  />
        <OurClients clientLogos={clientLogos} />
        <Footer photostream={photostream} />
      </div>
    </div>
  );
}
