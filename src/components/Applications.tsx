"use client";

import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { Building2, Store, Utensils, GraduationCap, Heart, Megaphone, LandPlot, ShieldCheck, Sparkles, Award } from "lucide-react";

export default function Applications() {
  const applicationCategories = [
    { title: "Retail Shops & Storefronts", icon: <Store className="w-5 h-5 text-[#FFB800]" /> },
    { title: "Restaurants & Cafes", icon: <Utensils className="w-5 h-5 text-[#FFB800]" /> },
    { title: "Schools & Educational Institutes", icon: <GraduationCap className="w-5 h-5 text-[#FFB800]" /> },
    { title: "Real Estate & Housing Projects", icon: <LandPlot className="w-5 h-5 text-[#FFB800]" /> },
    { title: "Weddings & Celebrations", icon: <Heart className="w-5 h-5 text-[#FFB800]" /> },
    { title: "Political & Rally Campaigns", icon: <Megaphone className="w-5 h-5 text-[#FFB800]" /> },
    { title: "Corporate Events & Exhibitions", icon: <Building2 className="w-5 h-5 text-[#FFB800]" /> },
    { title: "Religious Events & Festivals", icon: <Sparkles className="w-5 h-5 text-[#FFB800]" /> },
  ];

  return (
    <section className="py-24 bg-[#090A0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Applications Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Versatile Use Cases
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Printing For Every Occasion
          </h2>
          <p className="mt-3 text-lg text-gray-400 font-normal">
            Custom printing solutions tailored for commercial, institutional, private, and outdoor advertising events.
          </p>
        </div>

        {/* Applications Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {applicationCategories.map((app, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#12141A] border border-gray-800 hover:border-[#FFB800]/40 transition-all hover:-translate-y-1 shadow-lg flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#FFB800]/10 border border-[#FFB800]/20 flex items-center justify-center shrink-0 group-hover:bg-[#FFB800]/20 transition-all">
                {app.icon}
              </div>
              <h3 className="text-sm font-extrabold text-white uppercase tracking-wide">
                {app.title}
              </h3>
            </div>
          ))}
        </div>

        {/* OUR CLIENTS SECTION */}
        <div className="pt-16 border-t border-gray-800">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
              <Award className="w-4 h-4 text-emerald-400" />
              Trusted Local Businesses
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Our Esteemed Clients
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Trusted by leading businesses, brands, and establishments across Bareilly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BUSINESS_CONFIG.CLIENTS.map((client, idx) => (
              <div
                key={idx}
                className="py-4 px-5 rounded-2xl bg-[#12141A] border border-gray-800/80 hover:border-[#FFB800]/40 transition-all text-center flex items-center justify-center group shadow-sm"
              >
                <h4 className="text-sm font-black text-[#0066FF] group-hover:text-[#FFB800] transition-colors tracking-wide uppercase">
                  {idx + 1}. {client.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
