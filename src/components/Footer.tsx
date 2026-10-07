"use client";

import React from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { Phone, MessageSquare, Mail, MapPin } from "lucide-react";
import { InstagramIcon as Instagram, FacebookIcon as Facebook } from "./SocialIcons";

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps) {
  return (
    <footer className="bg-[#0A192F] border-t-2 border-[#CCFF00] text-gray-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Column 1: Branding & Intro */}
          <div className="space-y-4">
            <a href="#hero" className="flex items-center gap-3.5 group">
              <img
                src="/logo.png"
                alt="Flex Print Zone"
                className="h-12 w-auto object-contain bg-white px-3 py-1 rounded-xl shadow-md border-2 border-[#CCFF00] shrink-0"
              />
              <div className="flex flex-col justify-center leading-none uppercase font-black select-none text-left">
                <span className="text-[#CCFF00] text-xs font-black tracking-wider leading-none">FLEX</span>
                <span className="text-[#FF0000] text-xs font-black tracking-wider leading-none my-0.5">PRINT</span>
                <span className="text-[#CCFF00] text-xs font-black tracking-wider leading-none">ZONE</span>
                <span className="text-[#CCFF00] text-[8px] font-black tracking-wider uppercase mt-1 leading-tight">YOUR VISION. OUR PRINT.</span>
              </div>
            </a>
            
            <p className="text-xs text-gray-400 leading-relaxed pt-1">
              Professional flex printing, banners, hoardings, shop boards, vinyl, and large-format advertising printing press in Bareilly.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_CONFIG.INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-pink-400 hover:bg-[#FFB800] hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_CONFIG.FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-blue-400 hover:bg-[#FFB800] hover:text-black transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#hero" className="hover:text-[#FFB800] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#FFB800] transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#FFB800] transition-colors">Our Work</a></li>
              <li><a href="#about" className="hover:text-[#FFB800] transition-colors">About Us</a></li>
              <li><a href="#why-choose-us" className="hover:text-[#FFB800] transition-colors">Why Choose Us</a></li>
              <li><a href="#faq" className="hover:text-[#FFB800] transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-[#FFB800] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Printing Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Printing Services
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#services" className="hover:text-[#FFB800] transition-colors">Flex Banner Printing</a></li>
              <li><a href="#services" className="hover:text-[#FFB800] transition-colors">Flex Boards & Shop Signs</a></li>
              <li><a href="#services" className="hover:text-[#FFB800] transition-colors">Outdoor Hoarding Printing</a></li>
              <li><a href="#services" className="hover:text-[#FFB800] transition-colors">Backlit Glow Sign Flex</a></li>
              <li><a href="#services" className="hover:text-[#FFB800] transition-colors">Gloss & Eco Vinyl Printing</a></li>
              <li><a href="#services" className="hover:text-[#FFB800] transition-colors">Event & Stage Backdrops</a></li>
              <li><a href="#services" className="hover:text-[#FFB800] transition-colors">3D Acrylic & Channel Signage</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Contact Details
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.ADDRESS}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFB800] shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.PHONE_NUMBER}`} className="hover:text-[#FFB800]">
                  {BUSINESS_CONFIG.PHONE_NUMBER}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${BUSINESS_CONFIG.RAW_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
                  {BUSINESS_CONFIG.WHATSAPP_NUMBER}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFB800] shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.EMAIL}`} className="hover:text-[#FFB800]">
                  {BUSINESS_CONFIG.EMAIL}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Policy links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Flex Print Zone. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={onOpenPrivacy} className="hover:text-[#FFB800] transition-colors">
              Privacy Policy
            </button>
            <button onClick={onOpenTerms} className="hover:text-[#FFB800] transition-colors">
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
