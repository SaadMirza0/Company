import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600"><Link href="/">SM</Link></div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                href="/contact-us"
                className="text-gray-800 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
            <Link
              href="/contact-us"
              className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
