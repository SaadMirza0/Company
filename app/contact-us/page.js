"use client";
import React from 'react';
import Link from 'next/link';
import Navbar from '/component/Navbar';
import { useState } from 'react';

export default function ContactUs() {
const [form,setForm]=useState({name:"",email:"",message:""})
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      alert("message has been sent")
    } catch (error) {
      console.log("This error is from contact us fetch", error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



  
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
        <form onSubmit={handlesubmit} className="flex flex-wrap -m-2">
  {/* Name Field */}
  <div className="p-2 w-1/2">
    <div className="relative">
      <label htmlFor="name" className="leading-7 text-sm font-medium text-gray-700">
        Name
      </label>
      <input
        type="text"
   
        name="name"
        required
        onChange={handleChange}
        className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-800 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out shadow-sm"
      />
    </div>
  </div>

  {/* Email Field */}
  <div className="p-2 w-1/2">
    <div className="relative">
      <label htmlFor="email" className="leading-7 text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        type="email"
       
        name="email"
        required
        onChange={handleChange}
        className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-800 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out shadow-sm"
      />
    </div>
  </div>

  {/* Message Field */}
  <div className="p-2 w-full">
    <div className="relative">
      <label htmlFor="message" className="leading-7 text-sm font-medium text-gray-700">
        Message
      </label>
      <textarea
      
        name="message"
        required
        onChange={handleChange}
        className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-200 h-40 text-base outline-none text-gray-800 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out shadow-sm"
      ></textarea>
    </div>
  </div>

  {/* Submit Button */}
  <div className="p-2 w-full">
    <button
      type="submit"
      className="flex mx-auto items-center justify-center text-white bg-blue-600 border-0 py-3 px-8 focus:outline-none hover:bg-blue-700 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      Send Message
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 ml-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
      </svg>
    </button>
  </div>
</form>

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

