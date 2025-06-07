import React, { useEffect, useRef } from 'react';
import screeningImg from '../assets/screening.png';
import selectionImg from '../assets/selection.png';
import medicalImg from '../assets/health.png';
import mobilizationImg from '../assets/mobilization.png';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const hiringSteps = [
  {
    title: "Resume Search",
    image: screeningImg,
    description: "We search for the best candidates based on your requirements."
  },
  {
    title: "Screening Process",
    image: selectionImg,
    description: "Thorough screening to ensure candidates meet all qualifications."
  },
  {
    title: "Medical Check",
    image: medicalImg,
    description: "Comprehensive health assessments for all candidates."
  },
  {
    title: "Mobilization",
    image: mobilizationImg,
    description: "Efficient deployment of selected candidates to their work locations."
  }
];

export default function HiringProcess() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardsContainerRef = useRef(null); // Ref for the cards container for specific styling if needed
  const cardsRef = useRef([]);
  cardsRef.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'restart none none none',
            },
          }
        );
      }
      if (subheadingRef.current) {
        gsap.fromTo(
          subheadingRef.current,
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              toggleActions: 'restart none none none',
            },
          }
        );
      }
      if (cardsRef.current.length > 0) {
        gsap.fromTo(
          cardsRef.current.filter(el => el),
          { y: -50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            delay: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current, // Trigger based on the whole section
              start: 'top 80%',
              toggleActions: 'restart none none none',
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <>
      {/* Style tag for mobile-specific scroll behavior enhancements */}
      <style jsx global>{`
        @media (max-width: 767px) { /* Tailwind's 'md' breakpoint is 768px */
          .mobile-horizontal-scroll-cards {
            -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
            scrollbar-width: none; /* Hide scrollbar for Firefox */
          }
          .mobile-horizontal-scroll-cards::-webkit-scrollbar {
            display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
          }
        }
      `}</style>
      <section className="bg-white py-16 px-2" ref={sectionRef}>
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold text-center mb-2 opacity-0"
            style={{ color: "#191919" }}
          >
            OUR <span style={{ color: "#007958", fontSize: "clamp(2.5rem,6.5vw,4rem)" }}>HIRING</span> PROCESS
          </h2>
          <p
            ref={subheadingRef}
            className="text-gray-500 text-center mb-10 max-w-2xl opacity-0"
          >
            We follow a structured and efficient hiring process to ensure the best match between candidates and employers.
          </p>
          {/* Cards Container: Flex row on mobile, Grid on desktop */}
          <div
            ref={cardsContainerRef}
            className="w-full flex flex-row overflow-x-auto snap-x snap-mandatory 
                       gap-x-4 pb-4 md:pb-0 md:grid md:grid-cols-4 md:gap-4 
                       md:overflow-visible md:snap-none mb-8 mobile-horizontal-scroll-cards"
          >
            {hiringSteps.map((step, idx) => (
              <div
                key={idx}
                ref={addToRefs}
                // Mobile: fixed width, flex-shrink-0, snap-start
                // Desktop: auto width for grid
                className="flex-shrink-0 w-[80%] sm:w-[70%] md:w-auto 
                           snap-start bg-white rounded-xl shadow-md 
                           flex flex-col items-center p-6 
                           hover:shadow-lg transition opacity-0"
                style={{ minHeight: 250 }}
              >
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold mt-4 mb-2 text-center" style={{ color: "#191919" }}> {/* Added mt-4 for spacing, text-center for heading */}
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="mt-2 px-6 py-2 rounded border border-gray-300 bg-white text-gray-800 font-semibold shadow hover:bg-gray-100 transition"
            style={{ fontFamily: "Inter, Arial, sans-serif" }}
            onClick={() => navigate("/hiring-process")}
          >
            View Full Process
          </button>
        </div>
      </section>
    </>
  );
}
