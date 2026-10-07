"use client";

import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#090A0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Simple 4-Step Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            From Idea to Print
          </h2>
          <p className="mt-3 text-lg text-gray-400 font-normal">
            How we process your printing order from enquiry to finished delivery.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BUSINESS_CONFIG.HOW_IT_WORKS.map((item, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-[#12141A] border border-gray-800 hover:border-[#FFB800]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Step Number */}
                <div className="text-5xl font-black text-[#FFB800]/30 group-hover:text-[#FFB800] transition-colors mb-4 tracking-tight">
                  {item.step}
                </div>

                <h3 className="text-xl font-extrabold text-white mb-2 uppercase tracking-wide">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500">
                  Step {idx + 1} of 4
                </span>
                {idx < 3 && <ArrowRight className="w-4 h-4 text-gray-600 hidden lg:block" />}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
