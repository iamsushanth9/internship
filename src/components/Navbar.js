import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import logo from "../assets/logooo.png"; // import the logo image

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
        { label: "CSR", to: "/csr" },
        { label: "Our Clients", to: "/clientimage" }
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
    { label: "CSR", to: "/csr" },
    { label: "Skill Development", external: true, href: "https://www.asmacsskills.com/" },
    { label: "Contact Us", to: "/contact-us", isButton: true }
  ];

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
    <nav className="w-full sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm" style={{ fontFamily: "Inter, Arial, sans-serif" }}>
      <style>
        {`
        .nav-underline {
          position: relative;
          display: inline-block;
        }
        .nav-underline::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 4px;
          background: linear-gradient(90deg, #F1C40F, #E74C3C);
          border-radius: 0;
          transition: width 0.4s cubic-bezier(.4,0,.2,1), border-radius 0.4s cubic-bezier(.4,0,.2,1);
        }
        .nav-underline:hover::before,
        .nav-underline:focus::before {
          width: 100%;
          border-radius: 2px;
        }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center h-20">
          <Link to="/" className="flex items-center mr-12">
            <img src={logo} alt="MENA Logo" className="h-12 w-auto" />
          </Link>

          <div className="hidden md:flex flex-row items-center flex-grow justify-end space-x-6">
            {navItems.map((item) =>
              item.subItems ? (
                <div className="relative group" key={item.label}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`nav-underline flex items-center px-5 py-2 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 hover:text-black transition uppercase text-base tracking-wide shadow-none ${
                      openDropdown === item.label ? "bg-gray-100 text-black" : ""
                    }`}
                    style={{ fontFamily: "Inter, Arial, sans-serif", letterSpacing: "0.04em" }}
                  >
                    {item.label}
                    <FiChevronDown className="ml-2" />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute left-0 mt-3 w-60 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 py-2 flex flex-col">
                      {item.subItems.map((subItem) => (
                        <React.Fragment key={subItem.label}>
                          <Link
                            to={subItem.to}
                            className={`nav-underline block px-6 py-3 font-medium transition-all duration-150 ease-in-out text-gray-800 hover:bg-gray-100 hover:text-black rounded-xl ${
                              isActive(subItem.to) ? "bg-gray-100 text-black" : ""
                            }`}
                          >
                            {subItem.label}
                          </Link>
                          {subItem.label === "Gallery" && (
                            <div className="border-b border-gray-200 mx-4 my-1"></div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-underline px-5 py-2 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 hover:text-black transition uppercase text-base tracking-wide shadow-none"
                  style={{ fontFamily: "Inter, Arial, sans-serif", letterSpacing: "0.04em" }}
                >
                  {item.label}
                </a>
              ) : item.isButton ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className="ml-4 px-6 py-2 rounded-lg font-bold bg-black text-white shadow-md hover:bg-gray-900 transition text-base flex items-center whitespace-nowrap"
                  style={{ fontFamily: "Inter, Arial, sans-serif", letterSpacing: "0.04em" }}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`nav-underline px-5 py-2 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 hover:text-black transition uppercase text-base tracking-wide shadow-none ${
                    isActive(item.to) ? "bg-gray-100 text-black" : ""
                  }`}
                  style={{ fontFamily: "Inter, Arial, sans-serif", letterSpacing: "0.04em" }}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="md:hidden ml-auto">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden absolute w-full bg-white shadow-lg z-50">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.subItems ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="w-full flex justify-between items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold text-base"
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
                            className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium text-base ${
                              isActive(subItem.to) ? "bg-gray-100 text-black" : ""
                            }`}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold text-base"
                  >
                    {item.label}
                  </a>
                ) : item.isButton ? (
                  <Link
                    to={item.to}
                    className="block px-4 py-3 rounded-lg font-bold bg-black text-white shadow-md hover:bg-gray-900 transition text-base"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    to={item.to}
                    className={`block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold text-base ${
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
