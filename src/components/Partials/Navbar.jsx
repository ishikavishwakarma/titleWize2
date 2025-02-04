import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="navbar flex items-center justify-between px-4 py-4 bg-white md:px-8 md:py-4">
      {/* Logo */}
      <a href="/" className="nav-logo flex items-center">
        <img
          src="/Titlewize_logo.png"
          alt="TitleWize"
          className="h-10 w-auto md:h-12"
        />
      </a>
 {/* Hamburger Button (Mobile) */}
 <button
        className="block md:hidden text-gray-600 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      {/* Navigation */}
      {/* <nav className="nav-tags flex items-center text-lg gap-10 md:gap-14">
        <Link
          to="feature-section"
          smooth={true}
          duration={1000} // Duration in milliseconds
          className="text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          Features
        </Link>
        <Link
          to="benefit-section"
          smooth={true}
          duration={1000}
          className="text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          Benefits
        </Link>
        <Link
          to="partner-section"
          smooth={true}
          duration={1000}
          className="text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          Partners
        </Link>
      </nav> */}
<nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:items-center  items-center z-50 gap-10 md:gap-14 md:static fixed top-16 left-0 w-full md:w-fit bg-white shadow-md md:shadow-none md:bg-transparent text-lg`}
      >
        <Link
          to="feature-section"
          smooth={true}
          duration={1000}
          className="block py-2 px-4 text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          Features
        </Link>
        <Link
          to="benefit-section"
          smooth={true}
          duration={1000}
          className="block py-2 px-4 text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          Benefits
        </Link>
        <Link
          to="partner-section"
          smooth={true}
          duration={1000}
          className="block py-2 px-4 text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          Partners
        </Link>
        <div className="md:hidden border-t border-gray-200 mt-2 pt-2">
          <a href="/login" className="block py-2 px-4 text-gray-600 hover:text-gray-900">
            Login
          </a>
          <a
            href="/request-access"
            className="block py-2 px-4 text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
          >
            Request Access
          </a>
        </div>
      </nav>
      {/* Auth Buttons */}
      <div className="nav-login flex items-center space-x-4 md:space-x-5">
        <a href="/login" className="text-gray-600 hover:text-gray-900">
          Login
        </a>
        <Link
          href="/request-access"
          className="nav-btn px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
        >
          Request Access
        </Link>
      </div>
    </header>
  );
}
