import React from "react";
import PropTypes from "prop-types"; // Add prop-type validation

export default function Footer({ photostream = [] }) { // Default to empty array
  return (
    <footer className="bg-white pt-12 pb-0 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div>
          <img src="/logo.png" alt="MENA Logo" className="h-12 mb-2" />
          <div className="text-gray-700 text-sm">
            <p>
              <span className="inline-block align-middle mr-1">📍</span>
              Office No. 14, Options Primo, 21st Road Marol MIDC Industrial Estate, Andheri (East), Mumbai – 400069 Maharashtra, India
            </p>
            <p className="mt-2">
              <span className="inline-block align-middle mr-1">📞</span>
              +9122 61041786 (20 Lines)
            </p>
            <p className="mt-2">
              <span className="inline-block align-middle mr-1">✉️</span>
              info@menalimited.com
            </p>
          </div>
        </div>
        
        {/* Photostream with error handling */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3 uppercase tracking-wide">PHOTOSTREAM</h3>
          <div className="grid grid-cols-3 gap-2">
            {photostream.map((photo, idx) => (
              <img
                key={idx}
                src={photo}
                alt={`Photo ${idx + 1}`}
                className="h-16 w-16 object-cover rounded shadow-md border border-gray-200"
              />
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-gray-900 mb-3 uppercase tracking-wide">NEWSLETTER</h3>
          <p className="text-gray-700 text-sm mb-2">
            Subscribe to our newsletter to receive our latest news and updates. We do not spam.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-green-500"
            />
            <button
              type="submit"
              className="bg-green-500 text-white rounded px-3 py-2 font-semibold hover:bg-green-600 transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      
      {/* Copyright and Socials */}
      <div className="bg-gray-100 border-t mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs px-4">
        <span>
          Copyright © 2017 <span className="text-green-600 font-semibold">Espire System Pvt Ltd.</span> All Rights Reserved.
        </span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-green-600"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-green-600"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-green-600"><i className="fab fa-google-plus-g"></i></a>
          <a href="#" className="hover:text-green-600"><i className="fab fa-pinterest-p"></i></a>
          <a href="#" className="hover:text-green-600"><i className="fab fa-dribbble"></i></a>
        </div>
      </div>
    </footer>
  );
}

// Add prop validation
Footer.propTypes = {
  photostream: PropTypes.arrayOf(PropTypes.string)
};

// Set default props
Footer.defaultProps = {
  photostream: [] // Default empty array if not provided
};