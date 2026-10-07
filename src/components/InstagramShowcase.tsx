"use client";

import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { ExternalLink, Sparkles } from "lucide-react";
import { InstagramIcon as Instagram } from "./SocialIcons";

export default function InstagramShowcase() {
  const instaImages = [
    {
      url: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=600&q=80",
      caption: "High Speed Flex Printer in Action at Stadium Road Bareilly Workshop 🖨️✨",
    },
    {
      url: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=600&q=80",
      caption: "Massive Outdoor Hoarding Installation completed for client in Bareilly 🏢📍",
    },
    {
      url: "https://images.unsplash.com/photo-1542744094-3a3121699494?auto=format&fit=crop&w=600&q=80",
      caption: "Custom Frontlit Shop Board banner with crisp color output 🌟",
    },
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
      caption: "Backlit Lightbox Glow Sign ready for nighttime store illumination 💡",
    },
    {
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
      caption: "Stage Backdrop Banner Printing for Grand Marriage Event 💍🎉",
    },
    {
      url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      caption: "Gloss Laminated Vinyl Window Graphics for Showroom Branding 🚗🎨",
    },
  ];

  return (
    <section className="py-20 bg-[#0D0F14] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-extrabold uppercase tracking-widest mb-3">
            <Instagram className="w-4 h-4 text-pink-500" />
            @flexprint__bly_
          </div>
          <h2 className="text-4xl font-black text-white uppercase tracking-tight">
            Follow Our Work
          </h2>
          <p className="mt-2 text-gray-400 text-sm">
            See our latest printing projects, completed work and new designs on Instagram.
          </p>
        </div>

        {/* 6 Grid Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {instaImages.map((img, idx) => (
            <a
              key={idx}
              href={BUSINESS_CONFIG.INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-48 rounded-xl overflow-hidden bg-gray-900 border border-gray-800 shadow-md"
            >
              <img
                src={img.url}
                alt="Flex Print Zone Instagram Project"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                <Instagram className="w-5 h-5 text-pink-400 self-end" />
                <p className="text-[11px] text-white font-medium line-clamp-3 leading-snug">
                  {img.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-10 text-center">
          <a
            href={BUSINESS_CONFIG.INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-[#FFB800] hover:bg-[#e0a200] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#FFB800]/20"
          >
            <Instagram className="w-4 h-4" />
            FOLLOW US ON INSTAGRAM
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
