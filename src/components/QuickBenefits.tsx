"use client";

import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { Printer, Maximize2, Zap, CheckCircle2 } from "lucide-react";

export default function QuickBenefits() {
  const iconMap: Record<string, React.ReactNode> = {
    Printer: <Printer className="w-7 h-7 text-[#FFB800]" />,
    Maximize: <Maximize2 className="w-7 h-7 text-[#FFB800]" />,
    Zap: <Zap className="w-7 h-7 text-[#FFB800]" />,
    CheckCircle2: <CheckCircle2 className="w-7 h-7 text-[#FFB800]" />,
  };

  return (
    <section className="py-12 bg-[#0D0F14] border-y border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_CONFIG.QUICK_BENEFITS.map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#12141A] border border-gray-800 hover:border-gray-700 transition-all hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-[#FFB800]/10 border border-[#FFB800]/20 flex items-center justify-center mb-4">
                {iconMap[benefit.icon]}
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5 uppercase tracking-wide">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
