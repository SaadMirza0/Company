"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Floating Navbar */}

      {/* Hero Section with Gradient Background */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your <span className="text-blue-600">Digital Vision</span>{" "}
            Into Reality
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We craft innovative software solutions that drive business growth in
            the digital era. From web to mobile to cloud, we deliver excellence
            with every line of code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all font-semibold shadow-lg hover:shadow-blue-200">
                Explore Services
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="bg-white text-gray-800 border border-gray-200 px-8 py-3 rounded-full hover:bg-gray-50 transition-all font-semibold shadow-sm">
                Free Consultation
              </button>
            </Link>
          </div>
          <div className="mt-16 relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-xl border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center p-6">
                <svg
                  className="w-16 h-16 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                <p className="text-xl font-medium">See our work in action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 mb-8">
            TRUSTED BY INNOVATIVE COMPANIES WORLDWIDE
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
            {[
              "Company A",
              "Company B",
              "Company C",
              "Company D",
              "Company E",
            ].map((company, index) => (
              <div key={index} className="text-xl font-medium text-gray-700">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview with Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why <span className="text-blue-600">Choose Us</span>?
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                With a decade of experience in software development, we've
                transformed hundreds of business ideas into successful digital
                solutions that scale.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Expert Development Team
                    </h3>
                    <p className="text-gray-600">
                      Certified professionals with deep technical expertise
                      across multiple platforms.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Agile Development Process
                    </h3>
                    <p className="text-gray-600">
                      We deliver in sprints with continuous feedback for perfect
                      alignment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Dedicated Support
                    </h3>
                    <p className="text-gray-600">
                      24/7 monitoring and support to ensure your systems run
                      flawlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl text-white shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/10 rounded-xl">
                    <div className="text-4xl font-bold mb-2">0</div>
                    <div className="text-blue-100">Projects Delivered</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-xl">
                    <div className="text-4xl font-bold mb-2">0%</div>
                    <div className="text-blue-100">Client Satisfaction</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-xl">
                    <div className="text-4xl font-bold mb-2">1</div>
                    <div className="text-blue-100">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-xl">
                    <div className="text-4xl font-bold mb-2">0+</div>
                    <div className="text-blue-100">Team Members</div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Link href="/about-us">
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium">
                      Our Story & Values
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description:
                  "Modern, responsive websites and web applications built with cutting-edge technologies.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "Mobile Apps",
                description:
                  "Native and cross-platform mobile applications for iOS and Android platforms.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                ),
              },
         
              {
                title: "UI/UX Design",
                description:
                  "Beautiful, intuitive interfaces that enhance user engagement and satisfaction.",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    ></path>
                  </svg>
                ),
              }
            
      
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg mb-6 flex items-center justify-center text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            <div className="space-y-12 md:space-y-0">
              {[
                {
                  title: "Discovery",
                  description:
                    "We start by understanding your business goals, challenges, and requirements.",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      ></path>
                    </svg>
                  ),
                },
                {
                  title: "Planning",
                  description:
                    "We create a detailed project roadmap with milestones and deliverables.",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      ></path>
                    </svg>
                  ),
                },
                {
                  title: "Development",
                  description:
                    "Our team builds your solution using agile methodologies for maximum flexibility.",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      ></path>
                    </svg>
                  ),
                },
                {
                  title: "Testing",
                  description:
                    "Rigorous quality assurance ensures your solution performs flawlessly.",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  ),
                },
                {
                  title: "Deployment",
                  description:
                    "We launch your solution and provide comprehensive training and documentation.",
                  icon: (
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      ></path>
                    </svg>
                  ),
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative md:flex items-start md:space-x-6"
                >
                  <div
                    className={`flex-shrink-0 mx-auto md:mx-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 z-10 ${
                      index % 2 === 0 ? "md:mr-6" : "md:ml-6 md:order-last"
                    }`}
                  >
                    {step.icon}
                  </div>

                  <div
                    className={`mt-4 md:mt-0 text-center md:text-left ${
                      index % 2 === 0
                        ? "md:text-right md:mr-auto"
                        : "md:ml-auto"
                    }`}
                  >
                    <h3 className="text-xl flex font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Case <span className="text-blue-600">Studies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses achieve their goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "E-Commerce Growth",
                desc: "Scaled an online retailer to handle 10x traffic during Black Friday.",
                img: "/case1.jpg",
              },
              {
                title: "Healthcare Platform",
                desc: "Built a secure telemedicine app for remote consultations.",
                img: "/case2.jpg",
              },
              {
                title: "Fintech Automation",
                desc: "Automated loan approvals, reducing processing time by 70%.",
                img: "/case3.jpg",
              },
            ].map((cs, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform animate-fade-in"
              >
                <div className="h-48 w-full relative">
                  <Image
                    src={cs.img}
                    alt={cs.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {cs.title}
                  </h3>
                  <p className="text-gray-600">{cs.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the <span className="text-blue-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A passionate and expert behind my success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {[
              { name: "Saad Mirza", role: "Lead Developer", img: "/team1.jpg" },
              { name: "Saad Mirza", role: "UI/UX Designer", img: "/team2.jpg" },
              { name: "Saad Mirza", role: "Project Manager", img: "/team3.jpg" },
              { name: "Saad Mirza", role: "Backend Developer", img: "/team4.jpg" },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition-shadow animate-fade-in"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-blue-100">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
    

      {/* Blog Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest <span className="text-blue-600">Blog Posts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights and updates from our team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "5 UX Trends in 2024",
                desc: "Stay ahead with the latest in user experience design.",
                img: "/blog1.jpg",
              },
              {
                title: "Cloud Security Essentials",
                desc: "Best practices for keeping your cloud apps secure.",
                img: "/blog2.jpg",
              },
              {
                title: "AI in Business",
                desc: "How artificial intelligence is transforming industries.",
                img: "/blog3.jpg",
              },
            ].map((post, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform animate-fade-in"
              >
                <div className="h-40 w-full relative">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.desc}</p>
                  <Link
                    href="/blog"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </div>
            ))}
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
      {/* Newsletter Signup Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay in the <span className="text-blue-600">Loop</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest updates, tips, and
            exclusive offers.
          </p>
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all shadow-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all font-semibold shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your digital vision to life with
            our expert software solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all font-semibold shadow-lg">
                Get Started Today
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all font-semibold">
                Schedule a Call
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
