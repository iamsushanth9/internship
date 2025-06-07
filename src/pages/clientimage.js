import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Dynamically require all images in OurClientspics folder
const importAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
};

// Import all Company1.png to Company256.png
const images = importAll(
  require.context("../OurClientspics", false, /Company\d+\.png$/)
);

export default function OurClients() {
  const photostream = [
    "/photos/photo1.jpg",
    "/photos/photo2.jpg",
    "/photos/photo3.jpg",
    "/photos/photo4.jpg",
    "/photos/photo5.jpg",
    "/photos/photo6.jpg",
  ];

  // Pagination logic
  const imagesPerPage = 24;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const startIdx = (currentPage - 1) * imagesPerPage;
  const endIdx = startIdx + imagesPerPage;
  const currentImages = images.slice(startIdx, endIdx);

  // Add input for direct page navigation
  const [inputPage, setInputPage] = useState("");

  const handlePageInput = (e) => {
    setInputPage(e.target.value.replace(/[^0-9]/g, ""));
  };

  const handleGoToPage = () => {
    const page = Math.max(1, Math.min(totalPages, Number(inputPage)));
    if (page && page !== currentPage) {
      setCurrentPage(page);
    }
    setInputPage("");
  };

  const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          <span
            style={{
              color: "#007958",
              fontSize: "clamp(2.5rem,6.5vw,4rem)",
            }}
          >
            OUR CLIENTS
          </span>
        </h1>
        {/* Add margin below heading for spacing */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {currentImages.map((image, index) => (
            <div
              key={startIdx + index}
              className="bg-white p-2 rounded-lg shadow hover:shadow-lg transition duration-300"
              style={{ boxShadow: "0 0 0 4px #22c55e33, 0 4px 6px rgba(34,197,94,0.2)" }} // green shadow
            >
              <img
                src={image.default ? image.default : image}
                alt={`Company ${startIdx + index + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
        {/* Pagination controls */}
        <div className="flex flex-col items-center mt-8 gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              aria-label="Previous"
            >
              &#8592; Previous
            </button>
            <span className="text-gray-700 font-semibold">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              aria-label="Next"
            >
              Next &#8594;
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="number"
              min={1}
              max={totalPages}
              value={inputPage}
              onChange={handlePageInput}
              placeholder="Go to page"
              className="w-24 px-2 py-1 border border-gray-300 rounded"
            />
            <button
              onClick={handleGoToPage}
              disabled={
                !inputPage ||
                Number(inputPage) < 1 ||
                Number(inputPage) > totalPages ||
                Number(inputPage) === currentPage
              }
              className="px-3 py-1 rounded bg-[#007958] text-white hover:bg-[#005f47] disabled:opacity-50"
            >
              Go
            </button>
          </div>
        </div>
      </div>
      <Footer photostream={photostream} />
    </>
  );
}
