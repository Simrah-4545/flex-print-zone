"use client";

import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { ArrowRight, Printer, Sparkles } from "lucide-react";

interface FeaturedCTAProps {
  onOpenQuoteModal: () => void;
}

export default function FeaturedCTA({ onOpenQuoteModal }: FeaturedCTAProps) {
  return (
    <section className="py-20 relative overflow-hidden bg-[#0D0F14] border-y border-gray-800">
      {/* Background Graphic Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFB800]/10 via-transparent to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#161922] to-[#0F1117] border border-gray-700/80 p-8 sm:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 text-[#FFB800] text-xs font-extrabold uppercase tracking-widest border border-[#FFB800]/20">
              <Sparkles className="w-3.5 h-3.5" />
              Custom Dimensions & Bulk Printing
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              NEED A <span className="text-[#FFB800]">LARGE PRINT?</span>
            </h2>
            
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              From a small shop banner to a large outdoor hoarding, we provide custom-size printing solutions according to your requirement.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#FFB800] hover:bg-[#e0a200] text-black font-black text-sm uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#FFB800]/20 flex items-center justify-center gap-3"
            >
              REQUEST A QUOTE
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={`https://wa.me/${BUSINESS_CONFIG.RAW_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Flex Print Zone, I need a custom large size print quote.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-extrabold text-sm uppercase tracking-wider transition-all text-center border border-gray-600"
            >
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
