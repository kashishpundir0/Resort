import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-700 tracking-wide">
          Wisteria Chalet
        </h1>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 duration-200">
            Home
          </Link>
          <Link to="/rooms" className="text-gray-700 hover:text-blue-600 duration-200">
            Rooms
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 duration-200">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 duration-200">
            Contact
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="sm:hidden cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8 transition-all duration-300">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 text-2xl hover:text-blue-600">
            Home
          </Link>
          <Link to="/rooms" onClick={() => setIsOpen(false)} className="text-gray-700 text-2xl hover:text-blue-600">
            Rooms
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-700 text-2xl hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-700 text-2xl hover:text-blue-600">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
