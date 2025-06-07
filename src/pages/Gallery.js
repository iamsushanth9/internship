// pages/About.js
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Dynamically import all images from galleryimg folder
const importAll = (requireContext) => requireContext.keys().map(requireContext);
const galleryImages = importAll(require.context("../galleryimg", false, /\.(png|jpe?g|webp|gif)$/));

export default function Gallery() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const imagesPerSlide = 6;
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setVisibleIndex((prev) =>
        prev + imagesPerSlide >= galleryImages.length ? 0 : prev + imagesPerSlide
      );
    }, 2000);
    return () => clearInterval(intervalRef.current);
  }, [galleryImages.length]);

  const visibleImages = galleryImages.slice(
    visibleIndex,
    visibleIndex + imagesPerSlide
  );

  return (
    <>
      <Navbar />
      <div
        style={{
          background: "linear-gradient(90deg, #151e2b 0%, #232f43 100%)",
          color: "#fff",
          padding: "64px 0 48px 0",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-start">
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: 400,
              marginBottom: "0.5rem",
              letterSpacing: "-1px",
              lineHeight: 1.1,
              color: "#fff",
              textAlign: "left",
            }}
          >
            Our{" "}
            <span
              style={{
                fontWeight: 700,
                borderBottom: "4px solid #FFD600",
                paddingBottom: 2,
                color: "#fff",
              }}
            >
              Story
            </span>{" "}
            in Pictures
          </h1>
          <p
            style={{
              color: "#b6c3d1",
              fontSize: "1.1rem",
              marginTop: "1.5rem",
              fontWeight: 400,
              maxWidth: 700,
              textAlign: "left",
            }}
          >
            A glimpse into our workspace, our talented team, and the culture that
            makes us unique.
          </p>
        </div>
      </div>
      {/* Animated gallery: show 3 images at a time, auto-advance every 2s */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          style={{
            transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1)",
            opacity: 1,
            willChange: "opacity",
          }}
        >
          {visibleImages.map((img, idx) => (
            <div
              key={visibleIndex + idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
              style={{
                minHeight: 220,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.7s cubic-bezier(0.4,0,0.2,1)",
                opacity: 1,
                willChange: "transform, opacity",
              }}
            >
              <img
                src={img.default ? img.default : img}
                alt={`Gallery ${visibleIndex + idx + 1}`}
                className="w-full h-56 object-cover"
                style={{
                  background: "#f3f4f6",
                  transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.7s cubic-bezier(0.4,0,0.2,1)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
