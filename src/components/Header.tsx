"use client";

import React, { useState, useEffect } from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { MessageSquare, Phone, Menu, X, ChevronRight, FileText } from "lucide-react";

interface HeaderProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Our Portfolio", href: "#portfolio" },
    { name: "Devotion", href: "#brilliance" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact Us", href: "#contact-hello" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0A192F] text-white shadow-lg border-b-2 border-[#CCFF00] ${
        isScrolled ? "py-3 shadow-xl" : "py-4"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo Image in Left Corner */}
        <a href="#hero" className="flex items-center group">
          <img
            src="/logo.png"
            alt="Flex Print Zone Logo"
            className="h-14 sm:h-16 lg:h-18 w-auto object-contain bg-white px-4 py-1.5 rounded-2xl shadow-xl border-2 border-[#CCFF00] group-hover:scale-105 transition-transform shrink-0"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-white hover:text-[#CCFF00] tracking-tight transition-colors relative py-1 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Desktop CTAs + Instagram & Facebook Social Icons */}
        <div className="hidden lg:flex items-center gap-3.5 ml-6 xl:ml-8">
          {/* Instagram Social Link Icon */}
          <a
            href={BUSINESS_CONFIG.INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Follow Flex Print Zone on Instagram"
            aria-label="Instagram"
            className="w-11 h-11 rounded-2xl text-white flex items-center justify-center text-xl shadow-lg border border-white/40 transition-all hover:scale-110 shrink-0 group"
            style={{
              background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
            }}
          >
            <svg className="w-6 h-6 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* Facebook Social Link Icon */}
          <a
            href={BUSINESS_CONFIG.FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Follow Flex Print Zone on Facebook"
            aria-label="Facebook"
            className="w-11 h-11 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center text-xl shadow-lg border border-white/40 transition-all hover:scale-110 shrink-0 group"
          >
            <svg className="w-6 h-6 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
            </svg>
          </a>

          {/* WhatsApp CTA Icon */}
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.RAW_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Flex Print Zone, I would like to enquire about your flex printing services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            aria-label="WhatsApp"
            className="w-11 h-11 rounded-2xl bg-[#10B981] hover:bg-[#059669] text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 shrink-0 border border-white/40"
          >
            <MessageSquare className="w-6 h-6 text-white" />
          </a>

          {/* Get Free Quote CTA Button */}
          <button
            onClick={() => onOpenQuoteModal()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-black text-xs tracking-wider uppercase transition-all shadow-lg border-2 border-[#CCFF00] hover:scale-105 active:scale-95 whitespace-nowrap shrink-0"
          >
            <FileText className="w-4 h-4" />
            GET FREE QUOTE
          </button>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Instagram */}
          <a
            href={BUSINESS_CONFIG.INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-xl text-white shadow-md border border-white/40 shrink-0"
            style={{
              background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
            }}
          >
            <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* Mobile Facebook */}
          <a
            href={BUSINESS_CONFIG.FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-2 rounded-xl bg-[#1877F2] text-white shadow-md border border-white/40 shrink-0"
          >
            <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
            </svg>
          </a>

          {/* Mobile WhatsApp */}
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.RAW_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Flex Print Zone, I would like to enquire about your printing services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-[#16C96B] text-white shadow-md shrink-0"
            aria-label="WhatsApp"
          >
            <MessageSquare className="w-5 h-5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-200 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0F14] border-b border-gray-800 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col divide-y divide-gray-800/60">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 text-base font-semibold text-gray-200 hover:text-[#FFB800]"
              >
                {link.name}
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-lg bg-[#FFB800] text-black font-extrabold text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg shadow-[#FFB800]/20"
            >
              <FileText className="w-4 h-4" />
              Get a Free Quote
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.PHONE_NUMBER}`}
              className="w-full py-3 rounded-lg bg-gray-900 border border-gray-700 text-white font-bold text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#FFB800]" />
              Call +91-8791159718
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
