"use client";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
  

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            About Our Company
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We are a team of passionate developers and designers dedicated to
            creating innovative software solutions that drive business success.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">OUR TEAM</h2>
            <p className="text-xl text-gray-600 lg:w-2/3 mx-auto leading-relaxed">
              Meet the talented individuals who make our company successful. Our
              team brings together diverse skills and expertise to deliver
              exceptional results.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <div className="flex-shrink-0 rounded-lg w-48 h-48 bg-gray-200 object-cover object-center sm:mb-0 mb-4"></div>
                <div className="flex-grow sm:pl-8">
                  <h2 className="text-xl font-semibold text-gray-800">
                   Saad Mirza
                  </h2>
                  <h3 className="text-blue-600 mb-3">Full-Stack Web Developer</h3>
                  <p className="text-gray-600 mb-4">
                    Specializing in creating intuitive and responsive user
                    interfaces with modern frameworks and technologies.
                  </p>
                  <span className="inline-flex">
                    <a href="https://www.facebook.com/profile.php?id=61565322274569" className="text-gray-500 hover:text-blue-600">
                      <svg
                        fill="none"
                        stroke="currentColor"
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
                      href="https://www.instagram.com/saadmirza.dev/?__pwa=1"
                      className="ml-2 text-gray-500 hover:text-blue-600"
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
                    <a
                      href="#"
                      className="ml-2 text-gray-500 hover:text-blue-600"
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
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
       
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              OUR ACHIEVEMENTS
            </h2>
            <p className="text-xl text-gray-600 lg:w-2/3 mx-auto leading-relaxed">
              We measure our success by the success of our clients. Here are
              some numbers that showcase our impact.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:shadow-md transition-shadow">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-blue-600 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  0+
                </h2>
                <p className="leading-relaxed text-gray-600">
                  Projects Completed
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:shadow-md transition-shadow">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-blue-600 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  0+
                </h2>
                <p className="leading-relaxed text-gray-600">Happy Clients</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:shadow-md transition-shadow">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-blue-600 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  0+
                </h2>
                <p className="leading-relaxed text-gray-600">Active Projects</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:shadow-md transition-shadow">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="text-blue-600 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  1
                </h2>
                <p className="leading-relaxed text-gray-600">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex w-full mb-20 flex-wrap">
            <h2 className="text-3xl font-bold text-gray-800 lg:w-1/3 lg:mb-0 mb-4">
              Our Work Environment
            </h2>
            <p className="text-xl text-gray-600 lg:pl-6 lg:w-2/3 mx-auto leading-relaxed">
              We believe a great work environment fosters creativity and
              collaboration. Here's a glimpse of where the magic happens.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
              </div>
              <div className="md:p-2 p-1 w-full">
                <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              customers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "“This is the best company ever”",
                name: "Saad Mirza ",
                title: "Founder, CEO of this company",
              },
              {
                quote:
                  "“This is the best company ever”",
                name: "Saad Mirza ",
                title: "Founder, CEO of this company",
              },
              {
                quote:
                  "“This is the best company ever”",
                name: "Saad Mirza ",
                title: "Founder, CEO of this company",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in"
              >
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
          <p className="text-xl mb-8 text-blue-100">
            We're always looking for talented individuals to join our growing
            team.
          </p>
          <Link href="/contact-us">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Contact Us Today
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
   
    </div>
  );
}
