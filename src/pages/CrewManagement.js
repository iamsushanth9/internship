import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Placeholder images (replace with actual images if available)
import crew1 from "../assets/crew1.png";
import crew2 from "../assets/crew2.png";
import crew3 from "../assets/crew3.png";
import crew4 from "../assets/crew4.png";
import crew5 from "../assets/crew5.png";

export default function CrewManagement() {
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});

  const sections = [
    { id: "about", title: "About" },
    { id: "team", title: "Team" },
    { id: "crewing", title: "Crewing" },
    { id: "crew-travel", title: "Crew Travel" },
    { id: "crew-management", title: "Crew Management" }
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

  const sectionContent = {
    "about": [
      "MENA is a Registered Manning Agency, under Director General Shipping of India. MENA has been in manning services since the year 2012 and is an ISO 9001-2008 accredited agency.",
      "Since inception, MENA has been able to offer employment opportunities for over 1750 masters/officers/crew to reputed owners/managers all over the world, especially in Arabian Gulf Regional countries, Africa, and Europe.",
      "MENA offers efficient services to all shipping companies having a fleet of offshore supply vessels, Bulk Carriers, General Cargo Ships, Reefers/Container/Ro-Ro Vessels, OBO ships, Oil/FPSOs/chemical/product tankers.",
      "Tankers, LPG/LNG/gas carriers, Passenger Ships/Ferries/Cruise Lines, Accommodation Barges, Work-cum-Accommodation barges et al."
    ],
    "team": [
      "The Founder Promoter of MENA, Dr. Dev Mohanty, is an Electrical Engineer Marine by profession and the burning desire and passion in him to serve the shipping industry propels the growth of MENA business.",
      "A qualified team of marine professionals with varied experience on board vessels and ashore, buttress the on-going development activities and the ever-changing needs of shipping industry.",
      "A well experienced and reputed master marine is in charge of our ship crewing and management related operations. He is ably assisted and supported by a team of qualified administrative personnel who have over 15 years experience in crew management and manning operations.",
      "We have a tie-up with approved medical centers for most of the reputed shipping companies, Air India and Life Insurance Corporation of India Ltd. We undertake basic health education, vaccination immunization, shipboard medical precautions, pre-joining medicals, TMT (stress test), spirometry (pulmonary function tests) and clinical examinations all under one roof. Our medical team extends the medical assistance to seafarers' families while they are out at sea.",
      "Our Front Desk Executive is very efficient in coordinating, corresponding, and attending to calls to and from the principals, associates, clients and candidates.",
      "Over 50 satisfied clients all across the globe, and still growing.... thanks to dedicated services of MENA."
    ],
    "crewing": (
      <div className="space-y-8 text-gray-700">
        <div>
          <h4 className="font-bold text-lg mb-2">Our Services Crewing</h4>
          <div className="border border-gray-200 rounded bg-gray-50 p-4">
            The daunting task of recruiting, screening, interviewing, selecting, medical and hiring is taken care by MENA, thus saving the precious time of our clients and allowing them to attend to other areas of management that contributes to the company’s financial success.
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Recruitment, Screening and Selection</h4>
          <div className="border border-gray-200 rounded bg-gray-50 p-4">
            MENA always takes extraordinary precaution to employ only the seafarers with pertinent experience to match the requirement of our Principals. This system is beneficial to our Principals, as the crew is familiar with the vessel's routines and procedures. We take extreme care of seafarer’s certification and experience with cross reference from previous employers, government departments and certification authorities, before his name is enlisted with us and his resume is uploaded into our Databank.
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Pre-Employment Medical Examinations</h4>
          <div className="border border-gray-200 rounded bg-gray-50 p-4">
            All the seafarers undergo the medical examination at one of the Director General of Shipping approved medical centers, in accordance with M.S. rules of ILO/Panama/Liberian/Vanuatu/Malaysian flag guidelines. MENA ensures due medical clearances before the seafarer joins the vessel. Thorough examination includes chest X-ray, blood count/group, urine analysis, stool examination, dental check-up, psychometric examination, vision test, and also special tests (if required) like HIV, hepatitis (B & C), Gamma G.T., Drug and alcohol, E.C.G and Stress test. Special vaccinations are given for the vessels trading in the specific areas. MENA always adheres to the regulations and established practice.
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Documents, Training and Certification</h4>
          <div className="border border-gray-200 rounded bg-gray-50 p-4">
            <ul className="list-disc ml-6 space-y-2">
              <li>MENA follows the procedures laid down by the shipping industry.</li>
              <li>Training and certification conforming to IMO, ILO and STCW95 convention and ISM code.</li>
              <li>Seafarer must have appropriate training and certification for the position he is employed on board the vessel.</li>
              <li>Seafarers are briefed on the company’s policies and vessel-specific procedures.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    "crew-travel": (
      <div className="space-y-8 text-gray-700">
        <div>
          <h4 className="font-bold text-lg mb-2">Crew Travel</h4>
          <div className="border border-gray-200 rounded bg-gray-50 p-4">
            One of the group companies of MENA is an IATA agent viz. MENA TOUR & TRAVEL ASSOCIATE, who has expertise and experience in economic routing of crew to and from the ships. Pre-paid Ticket Advice (PTA) may also be issued at principal's option.
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Allotments</h4>
          <div className="border border-gray-200 rounded bg-gray-50 p-4">
            Principals may remit the amount as per the seafarer’s instruction for disbursal of allotments to designated beneficiaries through our appointed banks. Receipts are sent to the principals confirming the payments and distribution.
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Performance Monitoring</h4>
          <div className="border border-gray-200 rounded bg-gray-50 p-4">
            MENA regularly monitors performance of the crew through the reports from the master of the vessel, and de-briefing sessions of fellow crew members from the same vessel. This enables us in assessing the seafarer’s report on competence and behavior before considering his re-employment. Reports are compiled and remarks are updated on the resume of crew.
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">Our Expertise</h4>
          <div className="border border-gray-200 rounded bg-gray-50 p-4">
            MENA has well maintained data bank of enthusiastic and energetic candidates with certificates, conforming to STCW’95 convention, ISM code and standards, to pursue career in shipping industry.
            <br />
            <br />
            We have multinational crew officers, English speaking and with good background.
          </div>
        </div>
      </div>
    ),
    "crew-management": [
      "Our forte is full and partial crew management wherein we provide ship owners of deep sea and coastal vessels with a long term personnel resource of qualified Officers and Ratings at a fixed monthly cost. This can be either for the full management with MENA or for ship owners who require only crew management.",
      "Our crew management provides a complete service including crew planning, training, crew processing, database management, crew accounting, payroll and allotments, crew travel, next of kin liaison - in fact a complete one-stop quality crew manning solution.",
      "The Officers/crew/ranks selected, recruited and manned by our Company are equipped with necessary valid and authentic documents such as Certificate of Competency, Master Mariner, M.O.T., Safety Certificates, STCW 95, CDC etc., according to IMO regulations. Moreover, all our seafarers are well experienced and fully conversant with IMO regulations.",
      "MENA is experienced with employing crew from the following countries:",
      "India, China, Croatia, Philippines, Indonesia, Canada, Poland, UK, New Zealand, Myanmar, The Netherlands, Latvia and Ukraine."
    ]
  };

  const sectionImages = {
    "about": crew1 || "https://via.placeholder.com/420x320?text=About",
    "team": crew2 || "https://via.placeholder.com/420x320?text=Team",
    "crewing": crew3 || "https://via.placeholder.com/420x320?text=Crewing",
    "crew-travel": crew4 || "https://via.placeholder.com/420x320?text=Crew+Travel",
    "crew-management": crew5 || "https://via.placeholder.com/420x320?text=Crew+Management"
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
              Crew Management
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Professional crew management and support services for the maritime industry.
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
                      {section.id === "about" || section.id === "team" || section.id === "crew-management" ? (
                        <ul className="list-disc ml-6 space-y-2 text-gray-700">
                          {sectionContent[section.id].map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      ) : section.id === "crewing" || section.id === "crew-travel" ? (
                        sectionContent[section.id]
                      ) : (
                        <p className="text-gray-700">{sectionContent[section.id]}</p>
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
