import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [role, setRole] = useState(localStorage.getItem("role"));
  const [token, setToken] = useState(localStorage.getItem("token"));

  // 🔥 Updates role/token whenever localStorage changes
  useEffect(() => {
    const updateAuthState = () => {
      setRole(localStorage.getItem("role"));
      setToken(localStorage.getItem("token"));
    };

    // Update when storage changes (another tab)
    window.addEventListener("storage", updateAuthState);

    // Update when login happens (same tab)
    const interval = setInterval(updateAuthState, 500);

    return () => {
      window.removeEventListener("storage", updateAuthState);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setRole(null);
    setToken(null);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-700 tracking-wide">
          Wisteria Chalet
        </h1>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-8">

          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>

          {/* 🔥 Rooms visible only after login */}
          {token && (
            <Link to="/rooms" className="text-gray-700 hover:text-blue-600">
              Rooms
            </Link>
          )}

          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>

          {/* 🔥 Admin Menu */}
          {role === "admin" && (
            <>
              <Link to="/admin-dashboard" className="text-gray-700 hover:text-blue-600">
                Dashboard
              </Link>
              <Link to="/setting" className="text-gray-700 hover:text-blue-600">
                Settings
              </Link>
            </>
          )}

          {/* Login / Logout */}
          {!token ? (
            <Link to="/login" className="text-blue-600 font-semibold">Login</Link>
          ) : (
            <button onClick={handleLogout} className="text-red-600 font-semibold">
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-8 text-2xl">

          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>

          {/* Rooms visible only after login */}
          {token && <Link to="/rooms" onClick={() => setIsOpen(false)}>Rooms</Link>}

          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

          {role === "admin" && (
            <>
              <Link to="/admin-dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
              <Link to="/setting" onClick={() => setIsOpen(false)}>Settings</Link>
            </>
          )}

          {!token ? (
            <Link to="/login" onClick={() => setIsOpen(false)} className="text-blue-600">
              Login
            </Link>
          ) : (
            <button onClick={handleLogout} className="text-red-600">
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
