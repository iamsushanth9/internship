import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const mobileMenuRef = useRef(null);

  const navItems = [
    { label: "Home", to: "/" },
    { 
      label: "About",
      subItems: [
        { label: "About", to: "/about" },
        { label: "Organisational Structure", to: "/org-structure" },
        { label: "Gallery", to: "/gallery" },
        { label: "Clients", to: "/our-clients" },
        { label: "Licence", to: "/licence" }
      ]
    },
    { label: "Why Us", to: "/why-us" },
    { label: "Hiring Process", to: "/hiring-process" },
    { 
      label: "Services",
      subItems: [
        { label: "Recruitment and Training", to: "/recruitment-training" },
        { label: "Specialist Support Services", to: "/specialist-support" },
        { label: "Crew Management", to: "/crew-management" },
        { label: "Ship Repairing", to: "/ship-repairing" }
      ]
    },
    { label: "Gallery", to: "/gallery" },
    { label: "Clients", to: "/our-clients" },
    { label: "Licence", to: "/licence" },
    { label: "Contact Us", to: "/contact-us", isButton: true }
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full sticky top-0 z-50 bg-white border-b border-gray-200" style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="bg-black text-white font-bold rounded-md px-3 py-2 text-lg mr-2" style={{fontFamily:"'Oswald',sans-serif"}}>M</span>
              <span className="font-bold text-lg text-black mr-1" style={{fontFamily:"'Oswald',sans-serif"}}>MENA</span>
              <span className="text-gray-700 text-base" style={{fontFamily:"Inter, Arial, sans-serif"}}>Support Services</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, idx) =>
              item.subItems ? (
                <div className="relative" key={item.label}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center px-4 py-2 rounded font-medium text-gray-700 hover:bg-gray-100 transition uppercase text-sm"
                    style={{fontFamily:"Inter, Arial, sans-serif"}}
                  >
                    {item.label}
                    <FiChevronDown className="ml-1" />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-50">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.to}
                          className={`block px-5 py-3 font-medium transition-all duration-150 ease-in-out text-gray-800 hover:bg-gray-100 hover:text-black ${
                            isActive(subItem.to) ? "bg-gray-100 text-black" : ""
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.isButton ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className="ml-2 px-4 py-2 rounded font-semibold bg-black text-white shadow hover:bg-gray-900 transition text-sm"
                  style={{fontFamily:"Inter, Arial, sans-serif"}}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`px-4 py-2 rounded font-medium text-gray-700 hover:bg-gray-100 transition uppercase text-sm ${
                    isActive(item.to) ? "bg-gray-100 text-black" : ""
                  }`}
                  style={{fontFamily:"Inter, Arial, sans-serif"}}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden absolute w-full bg-white shadow-lg z-50">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.subItems ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="w-full flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                    >
                      {item.label}
                      {openDropdown === item.label ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-6 mt-2 space-y-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.to}
                            className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg ${
                              isActive(subItem.to) ? "bg-gray-100 text-black" : ""
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.isButton ? (
                  <Link
                    to={item.to}
                    className="block px-4 py-2 rounded font-semibold bg-black text-white shadow hover:bg-gray-900 transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    to={item.to}
                    className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg ${
                      isActive(item.to) ? "bg-gray-100 text-black" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
