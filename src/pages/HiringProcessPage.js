import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HiringProcessPage() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});

  const sections = [
    { id: "resume-search", title: "Resume Search - Resources" },
    { id: "screening", title: "Screening Process" },
    { id: "final-interview", title: "Final Interview / Selection Process" },
    { id: "post-interview", title: "Post Interview Process" },
    { id: "mobilization", title: "Mobilization" },
    { id: "ticketing", title: "Ticketing" },
    { id: "orientation", title: "Orientation" },
    { id: "airport", title: "Airport Activities" },
    { id: "service-fee", title: "Service Fee" }
  ];

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const section = sectionRefs.current[sectionId];
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }
    }
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -200px 0px", threshold: 0.1 }
    );
    sections.forEach(section => {
      if (sectionRefs.current[section.id]) {
        observer.observe(sectionRefs.current[section.id]);
      }
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Updated to cream color for cards (#fdf6e3)
  const sectionStyle = "mb-12 bg-[#fdf6e3] rounded-xl shadow-lg p-12 scroll-mt-[100px] transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-[#f5efe0]";
  const paragraphStyle = "text-gray-700 leading-relaxed";

  const sectionContent = {
    "resume-search": [
      "OUR IN-HOUSE JOB PORTALS: www.huntsjob.com and www.jobs4hunt.ph",
      "DATABANK",
      "BRANCH OFFICES ACROSS INDIA & OVERSEAS",
      "ADVERTISEMENTS",
      "DISTRICT EMPLOYMENT AND MANPOWER OFFICES",
      "SPECIALISED AGENCIES",
      "WORKERS WELFARE ASSOCIATIONS",
      "INDUSTRIAL TRAINING INSTITUTES / VOCATIONAL / PROFESSIONAL CENTRES",
      "HEAD HUNTING"
    ],
    "screening": [
      "Based on client job requirements, our Sourcing Department filters data and shortlists candidates.",
      "Screening is performed by all offices simultaneously if required.",
      "Departments such as Engineering, Marine, Healthcare, etc., review resumes and communicate with candidates.",
      "Operations team handles referral checks, police verification, and document validation.",
      "Trade tests conducted at MENA training centers or via 3rd party inspections.",
      "Candidates are called for in-person interviews and skill evaluations.",
      "Evaluation reports are shared with clients along with resumes."
    ],
    "final-interview": [
      "MENA organizes interviews based on requirement volume:",
      "1. Face-to-face interviews",
      "2. Video conferencing",
      "3. Skype",
      "4. Telephonic / IOM",
      "All logistics including halls, seating, and coordination handled by MENA.",
      "Support team coordinates written tests and evaluation with clients.",
      "Video conferencing facilities are available upon request with applicable charges.",
      "MENA can independently conduct interviews and forward selected candidates."
    ],
    "post-interview": [
      "Final confirmation is obtained from both clients and candidates.",
      "Pre-medical checks and reference verifications are conducted."
    ],
    "mobilization": [
      "Clients forward visa copy or original visa of the selected candidates to MENA.",
      "On receipt, MENA collects travel documents from candidates, verifies accuracy, and handles immigration clearance.",
      "Candidates are issued ID tags containing employer contact details for easy airport identification."
    ],
    "ticketing": [
      "After visa formalities, MENA arranges flight bookings for the selected candidates.",
      "Flight schedules, ticket confirmations, and reporting instructions are shared with the candidates promptly."
    ],
    "orientation": [
      "Orientation builds a foundation for a new employee's entire career with the department.",
      "Improves confidence, adaptability, workforce productivity, and retention.",
      "Topics covered include:",
      "• Contract and Benefits",
      "• Salary and Position",
      "• About Company",
      "• Employment contract length",
      "• Alternatives if one cannot complete contract",
      "• Family accompaniment",
      "• Housing options",
      "• Apartment sharing policies",
      "• Vacation entitlements",
      "• Leave and travel policies",
      "• Healthcare coverage",
      "• Prescription medication handling",
      "• Flight and reimbursement policies",
      "• Tax-free income explanation",
      "• Currency and salary information",
      "• Banking setup and salary disbursement"
    ],
    "airport": [
      "MENA supports candidates at the departure airport.",
      "Services include boarding assistance, baggage check, and immigration guidance.",
      "In case of bulk mobilization, MENA Limited sends its PRO to airport for ensuring the candidates are present and boarding the planes.",
      "PRO gives the verbal report to Recruitment Manager/ Recruiter in order to inform foreign principal in case of any no show.",
      "MENA Limited does not stop here but goes one step further requesting its client to confirm the safe arrival of candidates. Though Profit is like Oxygen to any company / business, but we at MENA Limited believes that Customer (both client and candidates) is the Big Boss."
    ],
    "service-fee": [
      "Service charges depend on job type, candidate volume, and location.",
      "Clear communication ensures both client and candidate transparency regarding fees.",
      "MENA charge a nominal fee of 10% of annual gross salary of office staff / Field staff / foreman and above.",
      "For junior level / skilled / semi-skilled / un-skilled positions, MENA charge a reasonable recruitment fee, payable either by employer or employee as per the agreement.",
      "In the case where the employer wishes MENA to charge the employees, it is in accordance with governments specified terms.",
      "MENA do not levy any charges on the employee if the employer compensates MENA of their service fee."
    ]
  };

  return (
    <div className="relative min-h-screen">
      {/* Changed background to white */}
      <div className="fixed inset-0 -z-10 bg-white" />
      <div className="relative z-10">
        <Navbar />
        <div className="bg-gray-100/90 py-2">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="text-sm">
              <ol className="list-none p-0 flex">
                <li>
                  <a href="/" className="text-gray-600 hover:text-cyan-700">Home</a>
                  <span className="mx-2 text-gray-400">/</span>
                </li>
                <li className="text-cyan-700 font-semibold">Hiring Process</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-transparent min-h-[calc(100vh-140px)]">
          <aside className="w-full md:w-64 bg-[#1e2736] flex-shrink-0">
            <div className="md:fixed md:w-64 md:h-[calc(100vh-140px)] overflow-y-auto py-6">
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
            {sections.map(section => (
              <section
                key={section.id}
                id={section.id}
                ref={el => sectionRefs.current[section.id] = el}
                className={sectionStyle}
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-900">{section.title}</h2>
                <ul className="list-disc ml-6 space-y-3">
                  {sectionContent[section.id].map((point, idx) => (
                    <li key={idx} className={paragraphStyle}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}
          </main>
        </div>
        <Footer photostream={["/photos/photo1.jpg", "/photos/photo2.jpg", "/photos/photo3.jpg", "/photos/photo4.jpg", "/photos/photo5.jpg", "/photos/photo6.jpg"]} />
      </div>
    </div>
  );
}
