import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">Wisteria Chalet</h2>
                    <p className="text-gray-400">
                        Luxury • Comfort • Nature
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
                    <div className="flex flex-col space-y-2 text-gray-300">
                        <Link to="/" className="hover:text-white">Home</Link>
                        <Link to="/rooms" className="hover:text-white">Rooms</Link>
                        <Link to="/about" className="hover:text-white">About</Link>
                        <Link to="/contact" className="hover:text-white">Contact</Link>
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Contact</h3>
                    <p className="text-gray-300">
                        Wisteria Chalet, Kempty Fall Road,
                        Mussoorie (Uttarakhand) - 248179
                    </p>
                    <p className="mt-2">📞 +91 99279065...</p>
                    <p>✉️  info@wisteriachalet.com</p>

                    {/* Social Icons */}
                    <div className="flex items-center space-x-4 mt-4 text-xl">

                        {/* Facebook */}
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook className="hover:text-indigo-400 cursor-pointer" />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="hover:text-indigo-400 cursor-pointer" />
                        </a>

                        {/* Twitter */}
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter className="hover:text-indigo-400 cursor-pointer" />
                        </a>

                    </div>

                </div>
            </div>

            <div className="text-center mt-10 text-gray-400">
                © {new Date().getFullYear()} Wisteria Chalet. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
