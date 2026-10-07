"use client";

import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { Phone, MessageSquare, FileText } from "lucide-react";

interface MobileStickyCTAProps {
  onOpenQuoteModal: () => void;
}

export default function MobileStickyCTA({ onOpenQuoteModal }: MobileStickyCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0D0F14]/95 backdrop-blur-md border-t border-gray-800 p-2 sm:hidden grid grid-cols-3 gap-2 shadow-2xl">
      <a
        href={`tel:${BUSINESS_CONFIG.PHONE_NUMBER}`}
        className="py-2.5 rounded-lg bg-gray-900 border border-gray-700 text-white font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95"
      >
        <Phone className="w-3.5 h-3.5 text-[#FFB800]" />
        CALL
      </a>

      <a
        href={`https://wa.me/${BUSINESS_CONFIG.RAW_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Flex Print Zone, I want to enquire about printing.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="py-2.5 rounded-lg bg-emerald-600/90 text-white font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        WHATSAPP
      </a>

      <button
        onClick={onOpenQuoteModal}
        className="py-2.5 rounded-lg bg-[#FFB800] text-black font-black text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95 shadow-md shadow-[#FFB800]/20"
      >
        <FileText className="w-3.5 h-3.5" />
        GET QUOTE
      </button>
    </div>
  );
}
