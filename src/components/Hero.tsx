"use client";

import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { ArrowRight, MessageSquare, CheckCircle2, Printer, Layers, Frame, ShieldCheck, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen pt-44 sm:pt-48 lg:pt-52 pb-20 flex flex-col justify-center overflow-hidden bg-[#090A0D]">
      {/* Background Graphic Effects & Printing Workshop Imagery */}
      <div className="absolute inset-0 z-0 opacity-25 bg-[radial-gradient(#FFB800_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB800]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-bold uppercase tracking-wider mt-4">
              <Sparkles className="w-4 h-4 text-[#FFB800]" />
              Bareilly's Premier Printing Press
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight uppercase leading-[1.05]">
                BIG PRINTS. <br />
                <span className="text-[#FFB800] drop-shadow-sm">BOLD IMPACT.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 font-normal max-w-2xl pt-3 leading-relaxed">
                {BUSINESS_CONFIG.HERO.SUBTEXT}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-4 rounded-xl bg-[#FFB800] hover:bg-[#e0a200] text-black font-extrabold text-sm uppercase tracking-wider transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-xl shadow-[#FFB800]/25 flex items-center justify-center gap-3 group"
              >
                GET A FREE QUOTE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${BUSINESS_CONFIG.RAW_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Flex Print Zone, I want to request a quote for printing.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 font-extrabold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-3"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                WHATSAPP US
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-4 border-t border-gray-800/80 flex flex-wrap items-center gap-6 text-sm text-gray-300 font-medium">
              {BUSINESS_CONFIG.HERO.TRUST_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FFB800]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl bg-[#12141A] group">
              
              {/* High Quality Industrial Printing Workshop Image */}
              <div className="relative h-[420px] sm:h-[480px] w-full">
                <img
                  src="/hero_flex_printer_machine.jpg"
                  alt="Large Format Commercial Flex Printer Machine"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090A0D] via-transparent to-black/20" />
              </div>

              {/* Floating Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0D0F14]/90 backdrop-blur-md border border-gray-700/80 shadow-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#FFB800]/20 border border-[#FFB800]/40 flex items-center justify-center text-[#FFB800]">
                    <Printer className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-black text-sm uppercase">Large Format Flex Printer</div>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#CCFF00] text-black text-[11px] font-black uppercase shadow">
                    BAREILLY WORKSHOP
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Visual Service Strip */}
        <div className="mt-16 pt-8 border-t border-gray-800/80">
          <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4 text-center sm:text-left">
            Core Printing Solutions
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {BUSINESS_CONFIG.HERO.SERVICE_STRIP.map((service, idx) => (
              <a
                key={idx}
                href="#services"
                className="px-4 py-3 rounded-lg bg-[#12141A] border border-gray-800 hover:border-[#FFB800]/50 hover:bg-[#181C26] text-gray-300 hover:text-white font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] group-hover:scale-150 transition-transform" />
                {service}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
