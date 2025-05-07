import React from "react";
import ladderImg from "../assets/ladder.png";

export default function Hero() {
  return (
    <section
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center relative"
      style={{
        background: "#f7f8fa",
      }}
    >
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center items-start px-6 md:px-10 py-12 md:py-0 z-10"> {/* Changed md:px-16 to md:px-10 */}
        <h2
          className="font-extrabold mb-4"
          style={{
            fontFamily: "Inter, Arial, sans-serif",
            color: "#191919",
            fontSize: "clamp(2.2rem,6vw,3.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            textAlign: "left",
          }}
        >
          LOOKING FOR <span style={{ color: "#007958", fontSize: "clamp(2.5rem,6.5vw,4rem)" }}>
            <br/>
            HR
          </span>{" "}
           SOLUTIONS ? 
          <br /> 
          <br/>
          WELCOME TO <br />
          <span style={{ color: "#007958", fontSize: "clamp(2.5rem,6.5vw,4rem)" }}>
            MENA
          </span>{" "}
          SUPPORT SERVICE LIMITED !
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
          YOUR GROWTH. OUR MISSION
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
