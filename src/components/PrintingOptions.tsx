"use client";

import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { ArrowRight, Layers, Sparkles } from "lucide-react";

interface PrintingOptionsProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export default function PrintingOptions({ onSelectServiceForQuote }: PrintingOptionsProps) {
  return (
    <section className="py-24 bg-[#0D0F14] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Media & Substrate Guide
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Choose the Right Printing Solution
          </h2>
          <p className="mt-3 text-lg text-gray-400 font-normal">
            Select the material media that matches your installation site, lighting setup, and display environment.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BUSINESS_CONFIG.PRINTING_OPTIONS.map((opt, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#12141A] border border-gray-800 hover:border-[#FFB800]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl group"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                  <img
                    src={opt.image}
                    alt={opt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12141A] via-transparent to-transparent" />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-extrabold text-white uppercase tracking-wide group-hover:text-[#FFB800] transition-colors">
                    {opt.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {opt.explanation}
                  </p>
                  <div className="pt-3 border-t border-gray-800">
                    <span className="text-[11px] font-bold text-[#FFB800] uppercase tracking-wider block mb-1">
                      Typical Applications:
                    </span>
                    <p className="text-xs text-gray-400">
                      {opt.applications}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectServiceForQuote(opt.title)}
                  className="w-full py-3 px-4 rounded-xl bg-[#181C26] hover:bg-[#FFB800] text-white hover:text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-gray-700 hover:border-[#FFB800]"
                >
                  GET QUOTE FOR THIS MATERIAL
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
