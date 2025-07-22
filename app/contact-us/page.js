import React from 'react';
import Link from 'next/link';
import Navbar from '/component/Navbar';
const Page = () => {
  return (
    <section className="bg-white text-gray-800 body-font relative">
      <Navbar/>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-600">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="leading-7 text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-800 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out shadow-sm" 
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-800 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out shadow-sm" 
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-200 h-40 text-base outline-none text-gray-800 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out shadow-sm"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto items-center justify-center text-white bg-blue-600 border-0 py-3 px-8 focus:outline-none hover:bg-blue-700 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
            <div className="p-2 w-full pt-12 mt-12 border-t border-gray-200 text-center">
              <div className="bg-blue-50 rounded-xl p-6 inline-block">
                <a href="mailto:contact@example.com" className="text-blue-600 hover:text-blue-800 font-medium text-lg">saadmirzapak@gmail.com</a>
                <p className="leading-normal my-4 text-gray-700">
                  <span className="font-medium">Rawalpindi</span>
                  <br />Dhoke Hassu 46000
                </p>
              </div>
              <div className="mt-6">
                <span className="inline-flex justify-center space-x-4">

                  <a href="https://www.facebook.com/profile.php?id=61565322274569" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 text-blue-600 hover:text-blue-800 transition-colors duration-300">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>

                  </a>

                  <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 text-blue-600 hover:text-blue-800 transition-colors duration-300">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>

                  </a>

                  <a href="https://www.instagram.com/saadmirza.dev/?__pwa=1" className="bg-gray-100 p-3 rounded-full hover:bg-blue-100 text-blue-600 hover:text-blue-800 transition-colors duration-300">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>


                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

  <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Answers to common questions about our services.
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                q: "How long does a typical project take?",
                a: "Most projects take 2-6 months depending on complexity and requirements.",
              },
              {
                q: "Do you offer post-launch support?",
                a: "Yes, we provide ongoing support and maintenance packages.",
              },
              {
                q: "Can you work with our existing team?",
                a: "Absolutely! We often collaborate with in-house teams for seamless delivery.",
              },
              {
                q: "What industries do you specialize in?",
                a: "We have experience in e-commerce, healthcare, fintech, education, and more.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-gray-50 rounded-xl shadow p-6 group animate-fade-in"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer group-open:text-blue-600 transition-colors">
                  {faq.q}
                </summary>
                <p className="mt-3 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>


    </section>





  );
};

export default Page;