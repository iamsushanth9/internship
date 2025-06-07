import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ShipRepairing() {
  const [activeSection, setActiveSection] = useState("about");
  const sectionRefs = useRef({});

  // Sidebar sections
  const sections = [
    { id: "about", title: "About" },
    { id: "services", title: "Services Offered" },
    { id: "safety", title: "Safety Standards" },
    { id: "presence", title: "Our Presence" },
  ];

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-100px 0px -200px 0px", threshold: 0.1 }
    );
    sections.forEach((section) => {
      if (sectionRefs.current[section.id]) {
        observer.observe(sectionRefs.current[section.id]);
      }
    });
    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id) => {
    const section = sectionRefs.current[id];
    if (section) {
      const offset = section.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Add images for each section (replace with your actual images if available)
  const sectionImages = {
    about: "/images/ship-about.png",
    services: "/images/ship-services.png",
    safety: "/images/ship-safety.png",
    presence: "/images/ship-presence.png",
  };

  // Section content
  const sectionContent = {
    about: (
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
          <img
            src={sectionImages.about}
            alt="About"
            className="w-[420px] h-[320px] object-contain"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2
            className="text-xl font-bold mb-2"
            style={{
              color: "#ff4500",
              fontSize: "clamp(1.5rem,4vw,2.2rem)",
              fontFamily: "Baufra, sans-serif",
            }}
          >
            About
          </h2>
          <p className="mb-4">
            With over 25 years of experience in the Marine Industry, MENA Ship
            Repairing Division undertakes and executes repair/refit works on board
            Tankers, Chemical Tankers, LPG Carriers, Seismic Vessels, Bulk
            Carriers, AHTS, Offshore Work-cum-Supply Vessel, Accommodation Barges,
            Floating Cranes, Container Vessels, and Cruise liners.
          </p>
          <p className="mb-4">
            With an excellent track record of repairing more than 130 vessels at
            Port, Dry Dock and On Voyage, we have established a reputation in the
            marine industry for our commitment to excellence, encompassing quality
            standards, timely delivery, reliability, and cost efficient project
            management.
          </p>
          <p className="mb-4">
            Our experience means we have the expertise to undertake specialist
            repair/refit work, new building work, maintenance by refined methods &
            latest engineering techniques and class specifications for the entire
            range of:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Steel - Hull Repair</li>
            <li>Mechanical - Piping - Renewal and new construction</li>
            <li>Electrical</li>
            <li>Instrumentation & Control</li>
            <li>Navigational equipment</li>
            <li>
              Corrosion Management Blasting & Painting: Grit & Ultra High Pressure
              Hydro Blasting
            </li>
            <li>Tank Cleaning</li>
            <li>Slop removal and disposal</li>
            <li>Underwater - Works and repairs</li>
            <li>NDT Services</li>
            <li>A/C & Ventilation</li>
            <li>Dry Docking</li>
            <li>Offshore Construction</li>
            <li>Hydraulic Piping</li>
            <li>Crane Repair</li>
          </ul>
        </div>
      </div>
    ),
    services: (
      <div className="flex flex-col md:flex-row items-center md:flex-row-reverse">
        <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
          <img
            src={sectionImages.services}
            alt="Services Offered"
            className="w-[420px] h-[320px] object-contain"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2
            className="text-xl font-bold mb-2"
            style={{
              color: "#ff4500",
              fontSize: "clamp(1.5rem,4vw,2.2rem)",
              fontFamily: "Baufra, sans-serif",
            }}
          >
            Services Offered
          </h2>
          <p className="mb-2 font-semibold">OUR SERVICES</p>
          <p className="mb-4">
            The expertise and skills of our technical crew and riding squads,
            coupled with our well equipped facilities, enhance the quality of
            services offered to our clients in the repairing of Main Engine,
            Auxiliaries, Generators, Navigational System and Steel Works, among
            others.
          </p>
          <p className="mb-2 font-semibold">MECHANICAL SERVICES</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Main Engines and Auxiliaries-Turbo, Cooling systems etc.</li>
            <li>Engine Overhauls and Decarbonization</li>
            <li>Generators + Boilers</li>
            <li>Hydraulic Cylinders</li>
            <li>Motors</li>
            <li>Pumps</li>
            <li>Centrifugal Pumps</li>
            <li>Gauge Calibrations</li>
            <li>Heat Exchanger - cleaning and re-tubing</li>
            <li>Injection works</li>
            <li>Crankshaft renewals</li>
            <li>Machining works & Spares procurement per needs</li>
            <li>
              Inspection, maintenance and repair of Davits and Winches as
              recommended by the manufacture
            </li>
            <li>System Alignment</li>
            <li>Underwater -= Sea Chest & Valves</li>
            <li>Cranes</li>
            <li>Maintenance / New Installation of hydraulic system</li>
          </ul>
          <p className="mb-2 font-semibold">
            INSTRUMENTATION & CONTROL - NAVIGATIONAL SYSTEM
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Automation</li>
            <li>Testing and commissioning</li>
            <li>Gyrocompass / Radar</li>
          </ul>
          <p className="mb-2 font-semibold">ELECTRICAL WORKS</p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Installation + Cabling + Commissioning - Generators. Motor control
              panels, engine room
            </li>
            <li>Machineries, fire alarm systems</li>
            <li>AC / DC Motor re-winding / overhauling</li>
            <li>
              Calibration - electrical meters + pressure gauges + flow meters
              etc.
            </li>
          </ul>
          <p className="mb-2 font-semibold">PIPE WORKS</p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Pipe -network -construction, repair and installation CS. SS. CU and
              alloy steel ( Cu-NI)
            </li>
            <li>Boiler Re-tubing and Repair</li>
            <li>
              Heat Exchanger - fabrication and installation -Hydraulic systems-Fabrication
              & Installation of Central, Bow Thruster Systems
            </li>
            <li>Tank Heating Coils - procurement / fabrication and installation</li>
            <li>
              Underwater - Sea Chest & Valves & Fire Lines / Sprinkling System -
              Fabrication & Installation
            </li>
            <li>Insulation</li>
            <li>Sewage Treatment Plant -Maintenance / Installation</li>
            <li>PPR Piping</li>
          </ul>
          <p className="mb-2 font-semibold">STEEL WORKS</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Hatch covers</li>
            <li>Plate renewals for Hull Repairs</li>
            <li>
              Stainless steel repair and renewal - tanks / hull / bulk heads etc.
            </li>
            <li>
              Underwater- Fabrication / Repair and renewal of underwater Hull
              including draft markings and gratings.
            </li>
          </ul>
          <p className="mb-2 font-semibold">CORROSION MANAGEMENT</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Blasting / Painting : Grit / Copper Slag</li>
            <li>Garnet Blasting and Painting</li>
            <li>Hydro Blasting - high-pressure 40000psi</li>
            <li>Zinc Anodes - Renewal</li>
          </ul>
          <p className="mb-2 font-semibold">TANK CLEANING</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Sludge (Slop) removal and disposal - alongside as well as offshore</li>
            <li>Degreasing & Steaming of Bulkheads</li>
          </ul>
          <p className="mb-2 font-semibold">NDT</p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Testing - Ultrasonic +Radiography + Visual eddy Current + Magnetic
              Particle etc.
            </li>
          </ul>
          <p className="mb-2 font-semibold">AC & VENTILATION</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Design + Installation +Commissioning</li>
            <li>Repair & Renewal</li>
            <li>Insulation</li>
          </ul>
          <p className="mb-2 font-semibold">OTHERS</p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Offshore Construction - Fabrication / Repairs of barges & offshore
              platforms
            </li>
            <li>
              Destructive & Non destructive Tests of load bearing structures
            </li>
            <li>Anchor & Chain Cable - Survey, test & repairs</li>
            <li>Dry-Docking - Arrangements as per drawings of vessel</li>
            <li>Class Approval - Documentation and arrangements.</li>
          </ul>
        </div>
      </div>
    ),
    safety: (
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
          <img
            src={sectionImages.safety}
            alt="Safety Standards"
            className="w-[420px] h-[320px] object-contain"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2
            className="text-xl font-bold mb-2"
            style={{
              color: "#ff4500",
              fontSize: "clamp(1.5rem,4vw,2.2rem)",
              fontFamily: "Baufra, sans-serif",
            }}
          >
            Safety Standards
          </h2>
          <p>
            MENA-SHIP REPAIRING DIVISION is committed to compliance with the Hygiene,
            Safety and Environment regulations as per the international Marine /
            Industrial Standards to the highest degree.
          </p>
        </div>
      </div>
    ),
    presence: (
      <div className="flex flex-col md:flex-row items-center md:flex-row-reverse">
        <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
          <img
            src={sectionImages.presence}
            alt="Our Presence"
            className="w-[420px] h-[320px] object-contain"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2
            className="text-xl font-bold mb-2"
            style={{
              color: "#ff4500",
              fontSize: "clamp(1.5rem,4vw,2.2rem)",
              fontFamily: "Baufra, sans-serif",
            }}
          >
            Our Presence
          </h2>
          <p className="mb-2 font-semibold">OUR PRESENCE</p>
          <p className="mb-4">
            MENA -SHIP REPAIRING DIVISION has offices and well equipped workshops
            with machining facilities and open yard for heavy engineering fabrication
            at the following locations.
          </p>
          <p className="mb-2 font-semibold">INDIA</p>
          <p className="mb-2">
            Registered and approved contractors of Indian Navy, Coast Guard, Garden
            Reach Shipbuilders Kolkata, Shipping Corporation of India, and a host of
            private owners and Ship Managers.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Mumbai</li>
            <li>Cochin</li>
            <li>Goa</li>
            <li>Karwar</li>
            <li>Vishakhapatnam</li>
            <li>Bhubaneswar</li>
            <li>Paradip Port</li>
          </ul>
          <p className="mb-2 font-semibold">ME REGION</p>
          <ul className="list-disc ml-6">
            <li>United Arab Emirates • Dubai • Sharjah</li>
            <li>KSA - Daman • Riyadh</li>
            <li>Qatar - Doha</li>
          </ul>
        </div>
      </div>
    ),
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 bg-gray-100" />
      <div className="relative z-10">
        <Navbar />
        {/* Header Section */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1
              style={{
                color: "#007958",
                fontSize: "clamp(2.5rem,6.5vw,4rem)",
                fontFamily: "Baufra, sans-serif",
                letterSpacing: "0.01em",
                lineHeight: 1.1,
              }}
              className="font-bold"
            >
              Ship Repairing
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Comprehensive ship repairing, refit, and marine engineering solutions.
            </p>
            <div className="flex justify-center mt-8">
              <img
                src="/images/ship-repairing.png"
                alt="Ship Repairing"
                className="w-[420px] h-[320px] object-contain rounded-xl shadow"
                style={{ background: "#f3f4f6" }}
                draggable={false}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
        {/* Main layout: sticky sidebar + scrollable content */}
        <div className="flex flex-col md:flex-row bg-transparent min-h-[calc(100vh-140px)]">
          <aside className="w-full md:w-64 bg-[#1e2736] flex-shrink-0">
            <div className="md:sticky md:top-[100px] md:h-[calc(100vh-140px)] overflow-y-auto py-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-8 py-3 text-sm font-medium transition-all duration-300 ease-in-out ${
                    activeSection === section.id
                      ? "bg-gray-200 text-[#1e2736] shadow-md border-l-4 border-cyan-600"
                      : "text-gray-300 hover:bg-[#2a3447] hover:text-white"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </aside>
          <main className="flex-1 p-6 md:p-12 overflow-y-auto">
            {sections.map((section, idx) => (
              <div
                key={section.id}
                id={section.id}
                ref={(el) => (sectionRefs.current[section.id] = el)}
                className="mb-12"
              >
                <div className="bg-white rounded-xl shadow-[0_4px_6px_rgba(34,197,94,0.3)] p-8">
                  {sectionContent[section.id]}
                </div>
              </div>
            ))}
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
