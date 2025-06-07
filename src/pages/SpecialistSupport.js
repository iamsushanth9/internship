import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import recruitment1 from "../assets/recruitment1.png";
import recruitment2 from "../assets/recruitment2.png";
import recruitment3 from "../assets/recruitment3.png";

export default function SpecialistSupport() {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});

  // Sidebar sections for Specialist Support Services
  const sections = [
    { id: "about", title: "About" },
    { id: "benefits", title: "Benefits To Client" },
    { id: "scope", title: "Scope Of Services" }
  ];

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-100px 0px -200px 0px", threshold: 0.1 }
    );
    sections.forEach(section => {
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

  // Content for each section
  const sectionContent = {
    "about": [
      "MENA entry into Specialist Support Services – Contract Hire was made in the year 2012 for one of its principals, Tecnimont SpA-Italy, to take care of the maintenance activities at Polypropylene and Polythylene plants at Warry and Port Harcourt in Nigeria.",
      "With the encouraging result at Nigeria, MENA ventured into full-fledged training skills, and retaining experienced professionals for all activities entailed in project execution, viz. construction to Commissioning, testing to maintenance, especially for Petrochemical, Oil, Gas, Refinery, Power, Smelter Projects/Plants.",
      "MENA SPECIALIST SUPPORT SERVICES team, part of the MENA GROUP, undertakes Insulation/Painting/Rotating/Static Equipment construction/Erection, Piping Construction and Maintenance activities.",
      "MENA team of Electrical-Electronic Engineers and Instrumentation Technicians have vast experience and expertise in having worked on PLC/DCS of different makes of international repute. We boast ourselves to have qualified and experienced electronic Technicians who have vast experience in the operation and maintenance of SPEED TRONIC (MARK IV, V, and VI series) Gas Turbine Control System. Thanks to MENA network offices, spread across Arabian Gulf Countries, SARC, regional Countries, Philippines and tie-ups in Europe and Far East, which immensely help clients' need at short notice.",
      <div key="workforce">
        <h4 className="font-bold text-lg mt-6 mb-2" style={{ color: "#007958" }}>MENA YOUR NEW WORK FORCE</h4>
        <p>
          While MENA is around, you can do away with hiring full-time staff, for MENA offers extensively multinational professionals, technical skills and crafts from the Indian Subcontinent, G.C.C., Africa, Philippines and CIS.
        </p>
        <p>
          MENA attracts, develops and retains employee network, through attractive compensation of benefits.
        </p>
      </div>,
      <div key="forte">
        <h4 className="font-bold text-lg mt-6 mb-2" style={{ color: "#007958" }}>OUR FORTE</h4>
        <p>
          SPECIALISTS' SUPPORT SERVICES FOR CONSTRUCTION, PRE-COMMISSIONING, COMMISSIONING, TESTING, MAINTENANCE ACTIVITIES
        </p>
        <ul className="list-disc ml-6 mb-2">
          <li>MENA employees are the means to successful and timely completion of your project as per schedule specialists available at short notice.</li>
          <li>Collective skills, and experience of every staff at MENA coupled with our positive approach and dedication to customer needs makes a difference in the services MENA provides to all over the globe.</li>
          <li>Multinational work-force with vast experience.</li>
          <li>Dedicated team is working round the clock, ensuring swift and smooth deployment of professionals anywhere in the world.</li>
          <li>Experienced Recruiters available at all offices MENA help identify and propose to clients.</li>
        </ul>
      </div>,
      <div key="leverage">
        <h4 className="font-bold text-lg mt-6 mb-2" style={{ color: "#007958" }}>LEVERAGE ON MENA'S HUGE POOL OF TECHNICAL RESOURCES</h4>
        <ul className="list-disc ml-6 mb-2">
          <li>
            MENA proven network of field Engineers, medical technicians, Electrical Technicians, PLC/DCS Instrument Technicians, Field/Board Operators, Mark IV/V/VI series, Speed Tronic Turbine Control System–Engineers, QA/QC Mechanical Inspectors/Supervisors/Engineers, PDS/PDMS Engineers, and a host of others.
          </li>
          <li>
            With the availability of MENA variable workforce, you can reduce your full time staff requirement and eliminate associated operating costs.
          </li>
          <li>
            MENA variable workforce shall take care of your increased demand during peak periods, and you can eliminate respective expenses for people on the bench.
          </li>
        </ul>
      </div>
    ],
    "benefits": [
      "MENA has a multitude of proven field engineers, technical skills and crafts that have experience in different industries and countries... thus clients can avoid hiring full-time staff and eliminate the expenses.",
      "With MENA variable workforce available at all times, clients gain advantage of having the right amount of specialized professionals on the job at the right time.",
      "MENA variable workforce largely helps clients reduce full staff requirements and associated operating costs."
    ],
    "scope": [
      <div key="scope-mena">
        <h4 className="font-bold text-lg mt-2 mb-2" style={{ color: "#007958" }}>SCOPE OF SERVICES OF MENA</h4>
        <ul className="list-disc ml-6 mb-2">
          <li>To provide qualified and experienced personnel when required. Expenses incurred on account of interview viz. advertisement, if any, shall be charged extra at actual.</li>
          <li>All documentation formalities viz. certificate attestation, documentation work at consulate/Embassy of the host country in India, police clearance certificate if and where applicable, visa stamping, and pre-deployment medical per need of the host country. All expenses related to these services shall be extra at actual on reimbursable basis only.</li>
          <li>Overseas medical policy for all staff throughout our contract period.</li>
          <li>Payroll management and disbursement.</li>
          <li>PPE if and when required and as necessary by MENA at entry cost.</li>
          <li>Local logistics support (within India) viz. ticketing, hotel reservation, airport assistance etc.</li>
          <li>All expenses are on reimbursable basis only.</li>
        </ul>
      </div>,
      <div key="scope-principals">
        <h4 className="font-bold text-lg mt-6 mb-2" style={{ color: "#007958" }}>SCOPE OF SERVICES OF PRINCIPALS OF MENA</h4>
        <ul className="list-disc ml-6 mb-2">
          <li>To select staff from the resumes submitted by MENA, conduct interview if and when needed either over phone/video conferencing or in person as per need.</li>
          <li>To provide visa/work permit to the host country + air passage from home country to the locations on mobilization/demobilization and rotation leave cycles.</li>
          <li>To provide, free of cost, fully furnished accommodation, local transport, free meals, PPE, social security and local insurance.</li>
          <li>Per Diem allowance as applicable at the location, over and above the calendar day rate agreed to between MENA and the Principals.</li>
          <li>To provide MENA staff with necessary working tools, tackles, work stations/laptops, software packages as applicable, internet facilities, medical assistance/First aid.</li>
          <li>To provide monthly time sheet duly signed by authorized representative of principals on or before the 3rd of every month by email/fax to MENA for invoicing purpose.</li>
        </ul>
      </div>
    ]
  };

  const sectionImages = {
    "about": recruitment1,
    "benefits": recruitment2,
    "scope": recruitment3
  };

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 bg-gray-100" />
      <div className="relative z-10">
        <Navbar />
        {/* Header Section */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 style={{ color: "#007958", fontSize: "clamp(2.5rem,6.5vw,4rem)" }} className="font-bold">
              Specialist Support Services
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Comprehensive specialist support and consulting solutions for your business needs.
            </p>
          </div>
        </div>
        {/* Main layout: sticky sidebar + scrollable content */}
        <div className="flex flex-col md:flex-row bg-transparent min-h-[calc(100vh-140px)]">
          <aside className="w-full md:w-64 bg-[#1e2736] flex-shrink-0">
            <div className="md:sticky md:top-[100px] md:h-[calc(100vh-140px)] overflow-y-auto py-6">
              {sections.map(section => (
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
                ref={el => sectionRefs.current[section.id] = el}
                className="mb-12"
              >
                <div className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  {/* Image side OUTSIDE the card */}
                  <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
                    <img
                      src={sectionImages[section.id]}
                      alt={section.title}
                      className="w-[420px] h-[320px] object-contain"
                    />
                  </div>
                  {/* Card side */}
                  <div className="w-full md:w-2/3">
                    <h3
                      className="text-xl font-bold text-gray-900 mb-2"
                      style={{ fontFamily: "Baufra, sans-serif" }}
                    >
                      <span style={{ color: "#ff4500", fontSize: "clamp(1.5rem,4vw,2.2rem)" }}>
                        {section.title}
                      </span>
                    </h3>
                    <div className="bg-white rounded-xl shadow-[0_4px_6px_rgba(34,197,94,0.3)] p-8">
                      {Array.isArray(sectionContent[section.id]) ? (
                        <ul className="list-disc ml-6 space-y-2 text-gray-700">
                          {sectionContent[section.id].map((point, idx) =>
                            React.isValidElement(point) ? (
                              <li key={idx} className="list-none p-0 m-0">{point}</li>
                            ) : (
                              <li key={idx}>{point}</li>
                            )
                          )}
                        </ul>
                      ) : (
                        sectionContent[section.id]
                      )}
                    </div>
                  </div>
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
