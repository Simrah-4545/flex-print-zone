"use client";

import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

export default function PrintThatInspires() {
  return (
    <section className="py-20 bg-[#7C3AED] text-white text-center border-y-2 border-[#CCFF00]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight">
          Print that inspires.
        </h2>
        <p className="text-base sm:text-lg text-purple-100 font-normal">
          Here's a glimpse of some beautiful ideas we have brought to life in print.
        </p>

        {/* Only Social Logos in Original Brand Colors */}
        <div className="flex items-center justify-center gap-6 pt-2">
          {/* Instagram Official Logo */}
          <a
            href={BUSINESS_CONFIG.INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Follow Flex Print Zone on Instagram"
            aria-label="Instagram"
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-2xl border-2 border-white/40 transition-all hover:scale-110 group text-white"
            style={{
              background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
            }}
          >
            <InstagramIcon className="w-9 h-9 text-white group-hover:scale-110 transition-transform" />
          </a>

          {/* Facebook Official Logo */}
          <a
            href={BUSINESS_CONFIG.FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Follow Flex Print Zone on Facebook"
            aria-label="Facebook"
            className="w-16 h-16 rounded-2xl bg-[#1877F2] flex items-center justify-center text-3xl shadow-2xl border-2 border-white/40 transition-all hover:scale-110 group text-white"
          >
            <FacebookIcon className="w-9 h-9 text-white group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

