"use client";

import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { MessageSquare, Phone, Mail } from "lucide-react";

export default function Floating3ConnectingWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2.5">
      {/* 1. WhatsApp (Green Pill Button - Image 1 Spec) */}
      <a
        href={`https://wa.me/${BUSINESS_CONFIG.RAW_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Flex Print Zone, I would like to enquire.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-3 rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-extrabold text-sm shadow-2xl flex items-center gap-2.5 transition-transform hover:scale-105 active:scale-95"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span>WhatsApp</span>
      </a>

      {/* 2. Call (Red Pill Button - Image 1 Spec) */}
      <a
        href={`tel:${BUSINESS_CONFIG.PHONE_NUMBER}`}
        className="px-5 py-2.5 rounded-full bg-[#E50914] hover:bg-[#c00711] text-white font-extrabold text-sm shadow-2xl flex items-center gap-2.5 transition-transform hover:scale-105 active:scale-95"
      >
        <Phone className="w-4 h-4 fill-current" />
        <span>Call</span>
      </a>

      {/* 3. Email (Dark/Black Pill Button - Image 1 Spec) */}
      <a
        href={`mailto:${BUSINESS_CONFIG.EMAIL}`}
        className="px-5 py-2.5 rounded-full bg-[#1F2937] hover:bg-black text-white font-extrabold text-sm shadow-2xl flex items-center gap-2.5 border border-gray-700 transition-transform hover:scale-105 active:scale-95"
      >
        <Mail className="w-4 h-4" />
        <span>Email</span>
      </a>
    </div>
  );
}
