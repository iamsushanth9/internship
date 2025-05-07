import React from "react";

export default function Photostream({ photostream }) {
  return (
    <section id="photostream" className="py-16 bg-[#181c2a]">
      <h2 className="text-3xl font-bold text-white mb-8 text-center tracking-wide">PHOTOSTREAM</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-4">
          {photostream.map((photo, idx) => (
            <img
              key={idx}
              src={photo}
              alt={`Photo ${idx + 1}`}
              className="h-24 w-24 object-cover rounded shadow-md cursor-pointer transition hover:scale-105 hover:shadow-cyan-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
