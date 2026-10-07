"use client";

import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { Phone, MessageSquare, Mail, MapPin, Clock, Navigation, FileText, Sparkles } from "lucide-react";
import QuickEnquiryForm from "./QuickEnquiryForm";

interface ContactSectionProps {
  onOpenQuoteModal: () => void;
}

export default function ContactSection({ onOpenQuoteModal }: ContactSectionProps) {
  return (
    <section id="contact" className="py-24 bg-[#090A0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Let's Start Your Next Print Project
          </h2>
          <p className="mt-3 text-lg text-gray-400 font-normal">
            Visit our Bareilly workshop, call us, or send an enquiry for fast printing quotation support.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business Details & Action Buttons */}
          <div className="lg:col-span-7 space-y-8">
            <div className="rounded-3xl bg-[#12141A] border border-gray-800 p-8 space-y-6 shadow-2xl">
              
              <div className="flex items-center gap-4 border-b border-gray-800 pb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FFB800] text-black font-black text-2xl flex items-center justify-center shrink-0">
                  FP
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                    {BUSINESS_CONFIG.BUSINESS_NAME}
                  </h3>
                  <p className="text-xs text-[#FFB800] font-bold uppercase tracking-wider">
                    {BUSINESS_CONFIG.TAGLINES.PRIMARY}
                  </p>
                </div>
              </div>

              {/* Detail Items */}
              <div className="space-y-5">
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFB800]/10 border border-[#FFB800]/20 flex items-center justify-center text-[#FFB800] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                      Workshop Address
                    </span>
                    <p className="text-sm font-semibold text-white mt-0.5 leading-snug">
                      {BUSINESS_CONFIG.ADDRESS}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 pt-2">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFB800]/10 border border-[#FFB800]/20 flex items-center justify-center text-[#FFB800] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                        Phone Number
                      </span>
                      <a href={`tel:${BUSINESS_CONFIG.PHONE_NUMBER}`} className="text-sm font-extrabold text-[#FFB800] hover:underline mt-0.5 block">
                        {BUSINESS_CONFIG.PHONE_NUMBER}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                        WhatsApp Enquiries
                      </span>
                      <a
                        href={`https://wa.me/${BUSINESS_CONFIG.RAW_WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-extrabold text-emerald-400 hover:underline mt-0.5 block"
                      >
                        {BUSINESS_CONFIG.WHATSAPP_NUMBER}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 pt-2">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFB800]/10 border border-[#FFB800]/20 flex items-center justify-center text-[#FFB800] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                        Email Address
                      </span>
                      <a href={`mailto:${BUSINESS_CONFIG.EMAIL}`} className="text-sm font-semibold text-white hover:underline mt-0.5 block">
                        {BUSINESS_CONFIG.EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFB800]/10 border border-[#FFB800]/20 flex items-center justify-center text-[#FFB800] shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 block">
                        Business Hours
                      </span>
                      <p className="text-sm font-bold text-emerald-400 mt-0.5">
                        {BUSINESS_CONFIG.BUSINESS_HOURS}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons Grid */}
              <div className="pt-6 border-t border-gray-800 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <a
                  href={`tel:${BUSINESS_CONFIG.PHONE_NUMBER}`}
                  className="py-3 px-4 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 border border-gray-700"
                >
                  <Phone className="w-4 h-4 text-[#FFB800]" />
                  CALL NOW
                </a>

                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.RAW_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  WHATSAPP
                </a>

                <a
                  href={BUSINESS_CONFIG.MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 border border-gray-700"
                >
                  <Navigation className="w-4 h-4 text-[#FFB800]" />
                  DIRECTIONS
                </a>

                <button
                  onClick={onOpenQuoteModal}
                  className="py-3 px-4 rounded-xl bg-[#FFB800] hover:bg-[#e0a200] text-black font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  GET QUOTE
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Quick Enquiry Form */}
          <div className="lg:col-span-5">
            <QuickEnquiryForm />
          </div>

        </div>

      </div>
    </section>
  );
}
