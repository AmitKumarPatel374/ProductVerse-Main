import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router'
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <footer className="bg-[#1E2939] text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-lg font-semibold mb-2">
            Made with ❤️ by <span className="text-yellow-300">Amit Kumar Patel</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Your trusted destination for shopping smarter.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h1 className="font-bold text-lg mb-3">Quick Links</h1>
          <div className="flex flex-col space-y-2">
            <NavLink to="/" className={(e) => e.isActive ? "text-yellow-300" : "hover:text-yellow-400"}>
              Home
            </NavLink>
            {user ? (
              <>
                <NavLink to="/create-product" className={(e) => e.isActive ? "text-yellow-300" : "hover:text-yellow-400"}>
                  Create Product
                </NavLink>
                <NavLink to="/cart" className={(e) => e.isActive ? "text-yellow-300" : "hover:text-yellow-400"}>
                  Cart
                </NavLink>
                <NavLink to="/watchlist" className={(e) => e.isActive ? "text-yellow-300" : "hover:text-yellow-400"}>
                  WatchList
                </NavLink>
                <NavLink to="/about" className={(e) => e.isActive ? "text-yellow-300" : "hover:text-yellow-400"}>
                  About
                </NavLink>
                <NavLink to="/settings" className={(e) => e.isActive ? "text-yellow-300" : "hover:text-yellow-400"}>
                  My Profile
                </NavLink>
              </>
            ) : (
              <NavLink to="/signin" className={(e) => e.isActive ? "text-yellow-300" : "hover:text-yellow-400"}>
                Sign In
              </NavLink>
            )}
          </div>
        </div>

        {/* Social Media */}
        <div className="flex-1 text-center md:text-right">
          <h1 className="font-bold text-lg mb-3">Connect With Us</h1>
          <div className="flex justify-center md:justify-end space-x-5 text-2xl">
            <a href="https://github.com/AmitKumarPatel374" className="hover:text-yellow-400 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/amit-kumar-patel-053130316/" className="hover:text-yellow-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://x.com/Amit_Patel1213" className="hover:text-yellow-400 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} ProductVerse. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
