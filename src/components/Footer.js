import React from "react";
import PropTypes from "prop-types";
import logo from "../assets/logooo.png";
// Import social icon placeholders
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.png";
import xIcon from "../assets/x.png";
import youtubeIcon from "../assets/youtube.png";
import whatsappIcon from "../assets/whatsapp.png";
import telegramIcon from "../assets/telegram.png";

export default function Footer({ photostream = [] }) {
  return (
    <footer className="bg-[#000435] text-white pt-12 pb-0 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div>
          <img
            src={logo}
            alt="MENA Logo"
            className="h-12 mb-2"
            style={{ background: "#fff", borderRadius: "8px", objectFit: "contain" }}
            onError={e => {
              e.target.onerror = null;
              e.target.style.display = "none";
            }}
          />
          <div className="text-white text-sm">
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
          <h3 className="font-bold text-white mb-3 uppercase tracking-wide">PHOTOSTREAM</h3>
          <div className="grid grid-cols-3 gap-2">
            { [
              require("../galleryimg/DSC_0001.png"),
              require("../galleryimg/DSC_0004.png"),
              require("../galleryimg/DSC_0007.png"),
              require("../galleryimg/DSC_0011.png"),
              require("../galleryimg/DSC_0013.png"),
              require("../galleryimg/DSC_0016.png"),
            ].map((photo, idx) => (
              <a
                key={idx}
                href="/gallery"
                style={{ display: "block" }}
                title="View Gallery"
              >
                <img
                  src={photo.default ? photo.default : photo}
                  alt={`Photo ${idx + 1}`}
                  className="h-16 w-16 object-cover rounded shadow-md border border-gray-200 hover:scale-105 transition"
                  style={{ cursor: "pointer" }}
                />
              </a>
            )) }
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-white mb-3 uppercase tracking-wide">NEWSLETTER</h3>
          <p className="text-white text-sm mb-2">
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
      <div className="bg-[#000435] mt-8 pt-4 flex flex-col items-center text-white text-xs px-4">
        <div className="w-full flex items-center justify-center mb-2">
          <hr className="flex-grow border-t border-[#E24C00] opacity-40" />
          <span className="mx-3 text-[#E24C00] text-lg">∞</span>
          <hr className="flex-grow border-t border-[#E24C00] opacity-40" />
        </div>
        <div className="flex gap-4 mb-2">
          <a href="https://www.facebook.com/MENA.ADMIN/" target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-gray-200 hover:bg-[#E24C00] transition p-2 flex items-center justify-center"
            style={{ width: 44, height: 44 }}>
            <img src={facebookIcon} alt="Facebook" className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/mena_admin/?hl=en" target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-gray-200 hover:bg-[#E24C00] transition p-2 flex items-center justify-center"
            style={{ width: 44, height: 44 }}>
            <img src={instagramIcon} alt="Instagram" className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/company/mena-admin/?originalSubdomain=in" target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-gray-200 hover:bg-[#E24C00] transition p-2 flex items-center justify-center"
            style={{ width: 44, height: 44 }}>
            <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" />
          </a>
          <a href="https://x.com/mena_big" target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-gray-200 hover:bg-[#E24C00] transition p-2 flex items-center justify-center"
            style={{ width: 44, height: 44 }}>
            <img src={xIcon} alt="X" className="h-6 w-6" />
          </a>
          <a href="https://www.youtube.com/@mena_admin" target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-gray-200 hover:bg-[#E24C00] transition p-2 flex items-center justify-center"
            style={{ width: 44, height: 44 }}>
            <img src={youtubeIcon} alt="YouTube" className="h-6 w-6" />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-gray-200 hover:bg-[#E24C00] transition p-2 flex items-center justify-center"
            style={{ width: 44, height: 44 }}>
            <img src={whatsappIcon} alt="WhatsApp" className="h-6 w-6" />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-gray-200 hover:bg-[#E24C00] transition p-2 flex items-center justify-center"
            style={{ width: 44, height: 44 }}>
            <img src={telegramIcon} alt="Telegram" className="h-6 w-6" />
          </a>
        </div>
        <div className="text-gray-300 text-base mb-2">Connect with us</div>
        <span className="text-xs text-gray-400 text-center mb-2">
          Copyright © 2017 <span className="text-green-400 font-semibold">Espire System Pvt Ltd.</span> All Rights Reserved.
        </span>
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