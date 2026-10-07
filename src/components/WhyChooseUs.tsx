"use client";

import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { Award, Maximize2, Zap, Scissors, Tag, MapPin, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const iconMap: Record<string, React.ReactNode> = {
    Award: <Award className="w-6 h-6 text-[#FFB800]" />,
    Maximize: <Maximize2 className="w-6 h-6 text-[#FFB800]" />,
    Zap: <Zap className="w-6 h-6 text-[#FFB800]" />,
    Scissors: <Scissors className="w-6 h-6 text-[#FFB800]" />,
    Tag: <Tag className="w-6 h-6 text-[#FFB800]" />,
    MapPin: <MapPin className="w-6 h-6 text-[#FFB800]" />,
  };

  return (
    <section id="why-choose-us" className="py-24 bg-[#090A0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Reliable Printing Partner
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Why Choose Flex Print Zone?
          </h2>
          <p className="mt-3 text-lg text-gray-400 font-normal">
            We deliver high-impact flex printing with focus on durability, exact sizes, and fast local support.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BUSINESS_CONFIG.WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#12141A] border border-gray-800 hover:border-[#FFB800]/40 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#FFB800]/10 border border-[#FFB800]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#FFB800]/20 transition-all">
                  {iconMap[item.icon]}
                </div>

                <h3 className="text-xl font-extrabold text-white mb-3 uppercase tracking-wide">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-[#FFB800] font-bold uppercase tracking-wider">
                <span>Standard Guarantee</span>
                <span className="w-2 h-2 rounded-full bg-[#FFB800]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
