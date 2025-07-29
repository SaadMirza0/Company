"use client";
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">SM</h3>
              <p className="text-gray-400 mb-4">
                Building innovative software solutions that drive business
                growth in the digital age.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61565322274569"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>

                <a
                  href="#"
                  className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/saadmirza.dev/?__pwa=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>

            
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/services/web-development"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                
                </li>
                <li>
               
                </li>
                <li>
                  <Link
                    href="/services/ui-ux-design"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    UI/UX Design
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-3 mt-0.5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span>Rawalpindi Dhoke hassu</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span><a href="https://wa.me/923010544620">+92 3010544620</a></span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span><a href="mailto:saadmirzapak@gmail.com">saadmirzapak@gmail.com</a></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()}<a href="/login"> Saad Mirza</a>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
