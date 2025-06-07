import React, { useState, useEffect } from "react";

// Dynamically import all images from the OurClientspics folder
const importClientLogos = () => {
  const context = require.context("../OurClientspics", false, /\.png$/);
  return context.keys().map((key) => ({
    src: context(key),
    alt: key.replace("./", "").replace(".png", "").replace(/-/g, " ")
  }));
};

export default function OurClients() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const clientLogos = importClientLogos();

  // Carousel effect: fade out, switch image, fade in
  useEffect(() => {
    if (clientLogos && clientLogos.length > 0) {
      const fadeOutTimer = setTimeout(() => setFade(false), 2000); // Start fading out
      const switchImageTimer = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % clientLogos.length);
        setFade(true); // Start fading in new image
      }, 1000); // Time for fade-out (500ms) + switch

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(switchImageTimer);
      };
    }
  }, [current, clientLogos]);

  if (!clientLogos || clientLogos.length === 0) {
    return null; // Or some placeholder if no logos are provided
  }

  return (
    <section
      id="clients"
      className="w-full py-16 bg-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col items-center">
        {/* Centered Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-center"
          style={{
            color: "#191919",
            fontFamily: "'Poppins', 'Oswald', Arial, sans-serif",
            letterSpacing: "-0.02em"
          }}
        >
          OUR <span style={{ color: "#007958", fontSize: "clamp(2.5rem,6.5vw,4rem)" }}>
            CLIENTS
          </span>
        </h2>
        {/* Centered Subheading */}
        <p
          className="text-base md:text-lg text-gray-600 mb-10 text-center max-w-2xl"
          style={{
            fontFamily: "'Inter', Arial, sans-serif"
          }}
        >
          We are proud to work with leading companies across various industries.
        </p>

        {/* Logo display area with fade effect */}
        <div className="relative w-full flex items-center justify-center h-24"> {/* Increased height for larger logos */}
          {clientLogos.map((logo, idx) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                h-16 md:h-20 w-auto object-contain
                transition-opacity duration-500 ease-in-out
                ${idx === current && fade ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              style={{
                maxWidth: 200, // Increased max width for logos
                pointerEvents: idx === current && fade ? "auto" : "none"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
