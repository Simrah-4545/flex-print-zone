"use client";

import React, { useState } from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0D0F14] border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="mt-3 text-base text-gray-400 font-normal">
            Everything you need to know about our flex printing, custom dimensions, artwork guidelines, and delivery.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {BUSINESS_CONFIG.FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#12141A] border border-gray-800 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-base sm:text-lg text-white hover:text-[#FFB800] transition-colors focus:outline-none"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#FFB800] shrink-0" />
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#FFB800] shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6 pt-0 text-sm text-gray-300 leading-relaxed border-t border-gray-800/60 animate-in fade-in duration-200">
                  <div className="pt-4">{faq.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
