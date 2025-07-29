"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-3">
          <nav className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">
              <Link href="/">SM</Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact-us"
                className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
              >
                Contact
              </Link>

              <Link
                href="/contact-us"
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 font-medium transition-colors shadow-sm"
              >
                Get Started
              </Link>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center space-y-1"
              onClick={() => setOpen(!open)}
            >
              <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
              <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
              <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
            </button>
          </nav>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden mt-3 bg-white rounded-lg shadow-lg border border-gray-100 p-4 space-y-3 animate-fadeIn">
              <Link
                href="/"
                className="block text-gray-800 hover:text-blue-600 font-medium"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="block text-gray-800 hover:text-blue-600 font-medium"
              >
                About
              </Link>
              <Link
                href="/services"
                className="block text-gray-800 hover:text-blue-600 font-medium"
              >
                Services
              </Link>
              <Link
                href="/contact-us"
                className="block text-gray-800 hover:text-blue-600 font-medium"
              >
                Contact
              </Link>
              <Link
                href="/contact-us"
                className="block text-center bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 font-medium transition-colors"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
