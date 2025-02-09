import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
        } md:flex md:items-center ease-in-out items-center z-50 gap-10 md:gap-1 lg:gap-10 md:w-[45%] md:static fixed top-16 left-0 w-full lg:w-fit bg-white shadow-md md:shadow-none md:bg-transparent text-lg`}
      >
        <Link
          to="feature-section"
          smooth={true}
          duration={1000}
          className="block py-2 px-4 text-base lg:text-lg text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          Features
        </Link>
        <Link
          to="benefit-section"
          smooth={true}
          duration={1000}
          className="block py-2 px-4 text-base lg:text-lg text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          Benefits
        </Link>
        <Link
          to="partner-section"
          smooth={true}
          duration={1000}
          className="block py-2 px-4 text-base lg:text-lg text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          Partners
        </Link>
        <div className="md:hidden border-t border-gray-200 mt-2 pt-2">
          <button
            onClick={() => setIsOpen(true)}
            className="block py-2 px-4 text-gray-600 hover:text-gray-900"
          >
            Login
          </button>
          <a
            href="https://forms.gle/aieChuaKTCfeBsDG9"
            target="_blank"
                rel="noopener noreferrer" 
            className="block py-2 px-4 text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
          >
            Request Access
          </a>
        </div>
      </nav>
      {/* Auth Buttons */}
      <div className=" hidden md:flex items-center text-base lg:text-lg lg:gap-4 space-x-4 md:space-x-5">
        <button
          onClick={() => setIsOpen(true)}
          className="text-gray-600 hover:text-gray-900"
        >
          Login
        </button>
        <a
          href="https://forms.gle/aieChuaKTCfeBsDG9"
          target="_blank"
              rel="noopener noreferrer" 
          className=" px-4 py-2  text-white bg-red-500 rounded hover:bg-red-600 transition-colors"
        >
          Request Access
        </a>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex z-50 items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)} // Click outside to close
          >
            {/* Modal Content */}
            <motion.div
              className="relative bg-white   p-8 rounded-lg text-center max-w-md w-full shadow-xl border border-gray-300"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Close Icon */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
              >
                <IoClose size={24} />
              </button>

              <h2 className="text-2xl font-bold text-gray-800">
                We are currently in closed beta.
              </h2>
              <p className="text-lg text-gray-700 mt-2">
                We would be thrilled to have you as an early user!
              </p>

              {/* Request Access Button */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScWXBOILpMFZzCas7jng9_pjLztmCqT8RQRYdHiLevp49oV_w/viewform" // Replace with your actual Google Forms link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white text-lg font-semibold px-6 py-3 rounded-md mt-4 transition bg-[#EF3639] hover:bg-red-600"
              >
                Click here
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
