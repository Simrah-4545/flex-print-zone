"use client";

import React from "react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-[#0A192F] text-white border-t-2 border-[#CCFF00]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Heading matching Image 3 */}
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight font-display">
            Our Testimonials
          </h2>
          <p className="text-rose-100 text-sm mt-2">
            There is a reason why we are the most loved print company in Bareilly. We always go the extra mile for our customers!
          </p>
        </div>

        {/* Testimonial Quote Card matching Image 3 */}
        <div className="rounded-2xl bg-white text-gray-900 p-8 sm:p-12 shadow-2xl relative text-left space-y-4">
          <div className="text-[#F43F5E] text-4xl font-black font-serif leading-none">“</div>
          <p className="text-lg sm:text-xl text-[#F43F5E] font-medium leading-relaxed">
            Flex Print Zone has given a whole new identity to my business storefront board; they judged what I wanted and used their expertise to make it look better.
          </p>
          <div className="text-right text-[#F43F5E] text-4xl font-black font-serif leading-none">”</div>
          
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span className="font-bold text-gray-900">Sharma Medical, Bareilly</span>
            <span>Verified Customer</span>
          </div>
        </div>

      </div>
    </section>
  );
}
