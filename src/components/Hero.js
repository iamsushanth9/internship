import React from "react";
import ladderImg from "../assets/ladder.png";
import heroBackground from "../assets/hero_background.avif"; // Import the new background image

export default function Hero() {
  return (
    <section
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center relative"
      style={{
        background: `url(${heroBackground}) no-repeat center center / cover`, // Set the background image
      }}
    >
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center items-start px-6 md:px-10 py-12 md:py-0 z-10"> {/* Changed md:px-16 to md:px-10 */}
        <h2
          className="font-extrabold mb-4"
          style={{
            fontFamily: "Inter, Arial, sans-serif",
            color: "#191919",
            fontSize: "clamp(3.2rem,8vw,6rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            textAlign: "left",
          }}
        >
          <span style={{ fontSize: "clamp(3.5rem,10vw,7rem)", display: "block" }}>
            Smart <span style={{ color: "#007958" }}>CREW</span> And
            <br />
            <span style={{ color: "#007958" }}>HR</span> Solutions
          </span>
          <br />
          <span style={{
            color: "#191919",
            fontWeight: 700,
            fontSize: "clamp(2.2rem,6vw,3.5rem)",
            letterSpacing: "0.01em",
            display: "block"
          }}>
            -- Powered by <span style={{ color: "#007958" }}>MENA LIMITED</span>
          </span>
        </h2>
        <p
          className="mb-8"
          style={{
            color: "#6b7280",
            fontFamily: "Inter, Arial, sans-serif",
            fontSize: "1.15rem",
            maxWidth: 500,
            textAlign: "left",
          }}
        >
          Your Crew. Our Commitment.
        </p>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex items-center justify-center w-full h-full px-6 md:px-0 py-8 md:py-0 z-10"> {/* Kept md:px-0 */}
        <img
          src={ladderImg}
          alt="Professional HR"
          className="w-full h-auto object-contain"
          style={{
            maxHeight: 1800,
            maxWidth: 700,
            // minHeight and minWidth removed to allow natural scaling
          }}
        />
      </div>
    </section>
  );
}
