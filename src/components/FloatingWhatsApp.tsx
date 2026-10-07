"use client";

import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.RAW_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Flex Print Zone, I would like to enquire about your printing services.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-5 sm:bottom-8 sm:right-8 z-40 p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-900/50 flex items-center gap-3 transition-transform hover:scale-110 active:scale-95 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-6 h-6 text-white" />
      <span className="hidden sm:inline font-extrabold text-xs tracking-wider uppercase pr-1">
        Chat on WhatsApp
      </span>
    </a>
  );
}
