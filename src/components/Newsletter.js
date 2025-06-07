import React from "react";

export default function Newsletter() {
  return (
    <section id="newsletter" className="py-16 bg-[#23272f]">
      <h2 className="text-3xl font-bold text-white mb-8 text-center tracking-wide">NEWSLETTER</h2>
      <div className="flex justify-center">
        <form className="flex flex-col gap-4 max-w-md w-full">
          <input
            type="email"
            placeholder="Enter your email address"
            className="border border-cyan-400 bg-[#232526] text-white rounded px-3 py-2 text-sm focus:outline-none focus:border-cyan-500"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded px-3 py-2 font-semibold hover:from-blue-500 hover:to-cyan-400 transition animate-glow"
          >
            SUBSCRIBE
          </button>
          <p className="text-gray-400 text-sm mt-2 text-center">
            Subscribe to our newsletter to receive our latest news and updates. We do not spam.
          </p>
        </form>
      </div>
    </section>
  );
}
