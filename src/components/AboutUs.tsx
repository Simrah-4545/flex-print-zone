"use client";

import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { MapPin, Sparkles, Printer } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-[#0D0F14] border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-2xl bg-[#12141A]">
              <img
                src="/about_flex_printer.jpg"
                alt="Flex Print Zone Press Workshop Bareilly"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/90 backdrop-blur-md border border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-[#FFB800]" />
                  <div>
                    <div className="text-white font-extrabold text-xs uppercase tracking-wide">Stadium Road Press Workshop</div>
                    <div className="text-gray-400 text-[11px]">{BUSINESS_CONFIG.ADDRESS}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              Quality Printing That Makes Your Business Stand Out
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight font-display">
              About <span className="text-[#FFB800]">FlexPrintZone</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              <p>
                At FlexPrintZone, we provide reliable and high-quality printing solutions for businesses, shops, events, promotions, and personal requirements. From eye-catching flex banners and hoardings to posters, vinyl prints, standees, and other customized printing work, we help turn your ideas into professional prints.
              </p>
              <p className="text-base text-gray-400">
                We focus on good print quality, sharp colours, durable materials, competitive pricing, and timely delivery. Whether you need a single banner or printing for a larger promotional campaign, our goal is to make the entire process simple and hassle-free.
              </p>
              <p className="text-base text-gray-400">
                With attention to detail and a commitment to customer satisfaction, FlexPrintZone is your trusted partner for printing solutions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] font-black text-sm uppercase tracking-wider flex items-center gap-3">
              <Printer className="w-5 h-5 shrink-0" />
              <span>Have a printing requirement? Let’s bring your idea to print.</span>
            </div>

            <div className="pt-4 border-t border-gray-800 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.RAW_WHATSAPP_NUMBER}?text=Hello%20Flex%20Print%20Zone%2C%20I%20have%20a%20printing%20requirement.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#FFB800] hover:bg-[#e0a200] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#FFB800]/20"
              >
                DISCUSS YOUR PROJECT
              </a>
              <a
                href="#contact-hello"
                className="px-6 py-3.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all border border-gray-700"
              >
                CONTACT US
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
