"use client";

import React, { useState } from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function SayHelloContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    queryType: "Flex Banner",
    query: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmittedSuccess(false);

    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          mobileNumber: formData.phone,
          emailAddress: formData.email,
          printingRequirement: formData.queryType,
          projectDetails: formData.query,
        }),
      });
    } catch (err) {
      console.error("API submission error:", err);
    }

    const text = `Hello Flex Print Zone,
I am submitting a print enquiry from your website:
Name: ${formData.name || "Customer"}
Phone: ${formData.phone}
Email: ${formData.email || "N/A"}
Requirement: ${formData.queryType}
Details: ${formData.query || "N/A"}`;

    window.open(`https://wa.me/${BUSINESS_CONFIG.RAW_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");

    setIsSubmitting(false);
    setSubmittedSuccess(true);
    setFormData({ name: "", email: "", phone: "", queryType: "Flex Banner", query: "" });
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const text = `Hello Flex Print Zone,
I am submitting a quote enquiry:
Name: ${formData.name || "Customer"}
Phone: ${formData.phone || "N/A"}
Email: ${formData.email || "N/A"}
Requirement: ${formData.queryType}
Details: ${formData.query || "N/A"}`;

    window.open(`https://wa.me/${BUSINESS_CONFIG.RAW_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact-hello" className="py-24 bg-[#F5F7FA] text-[#172033]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column matching Image 2 */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-black uppercase tracking-widest text-[#FF5500]">
              CONTACT US _
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-[#172033] tracking-tight font-display">
              Say Hello. <br />
              <span className="text-[#0066FF]">Get a Free Quote</span>
            </h2>

            <p className="text-sm leading-relaxed text-gray-600 font-normal max-w-md">
              Please fill out this form if you need assistance with custom size flex quotes, artwork preparation, metal framing, or bulk orders. Our print team will respond immediately.
            </p>

            {/* 3 Vertical Contact Items with Round Icon Badges (Visit Us, Mail Us, Phone Us) */}
            <div className="pt-6 space-y-6">

              {/* Item 1: Visit Us */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white text-[#FF5500] border border-gray-200 flex items-center justify-center text-lg shrink-0 shadow-md group-hover:scale-105 group-hover:border-[#FF5500] transition-all">
                  <MapPin className="w-5 h-5 text-[#FF5500]" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#172033] uppercase tracking-wider">Visit Us:</h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed max-w-xs font-medium">
                    {BUSINESS_CONFIG.ADDRESS}
                  </p>
                </div>
              </div>

              {/* Item 2: Mail Us */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white text-[#0066FF] border border-gray-200 flex items-center justify-center text-lg shrink-0 shadow-md group-hover:scale-105 group-hover:border-[#0066FF] transition-all">
                  <Mail className="w-5 h-5 text-[#0066FF]" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#172033] uppercase tracking-wider">Mail Us:</h4>
                  <a href={`mailto:${BUSINESS_CONFIG.EMAIL}`} className="text-xs font-bold text-[#0066FF] hover:underline mt-1 block">
                    {BUSINESS_CONFIG.EMAIL}
                  </a>
                </div>
              </div>

              {/* Item 3: Phone Us */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white text-[#10B981] border border-gray-200 flex items-center justify-center text-lg shrink-0 shadow-md group-hover:scale-105 group-hover:border-[#10B981] transition-all">
                  <Phone className="w-5 h-5 text-[#10B981]" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#172033] uppercase tracking-wider">Phone Us:</h4>
                  <a href={`tel:${BUSINESS_CONFIG.PHONE_NUMBER}`} className="text-xs font-bold text-[#172033] hover:text-[#0066FF] mt-1 block">
                    {BUSINESS_CONFIG.PHONE_NUMBER}
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Dark Form Container matching Image 2 */}
          <div className="lg:col-span-7 bg-[#0A192F] p-8 sm:p-10 rounded-3xl border-2 border-[#CCFF00] shadow-2xl text-white">
            
            <div className="mb-6 space-y-1">
              <h3 className="text-3xl font-black font-display tracking-tight text-white">
                Drop Us a Line
              </h3>
              <p className="text-xs text-gray-300 font-medium">
                Your print enquiry will be answered immediately. Required fields are marked *
              </p>
            </div>

            {submittedSuccess && (
              <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center gap-2 mb-4">
                <span>✓ Thank you! Your print enquiry has been sent successfully. We will contact you immediately.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#CCFF00] mb-1.5">FULL NAME *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 bg-[#1E293B] border border-gray-700/80 text-white placeholder-gray-400 text-sm font-medium focus:bg-[#0F172A] focus:border-[#CCFF00] focus:outline-none rounded-xl transition-all"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#CCFF00] mb-1.5">MOBILE NUMBER *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#1E293B] border border-gray-700/80 text-white placeholder-gray-400 text-sm font-medium focus:bg-[#0F172A] focus:border-[#CCFF00] focus:outline-none rounded-xl transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#CCFF00] mb-1.5">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 bg-[#1E293B] border border-gray-700/80 text-white placeholder-gray-400 text-sm font-medium focus:bg-[#0F172A] focus:border-[#CCFF00] focus:outline-none rounded-xl transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#CCFF00] mb-1.5">WHAT DO YOU WANT TO PRINT? *</label>
                <select
                  value={formData.queryType}
                  onChange={(e) => setFormData({ ...formData, queryType: e.target.value })}
                  className="w-full px-4 py-3.5 bg-[#1E293B] border border-gray-700/80 text-white text-sm font-bold focus:bg-[#0F172A] focus:border-[#CCFF00] focus:outline-none rounded-xl transition-all"
                >
                  <option value="Flex Banner">Flex Banner Printing</option>
                  <option value="Sunpack Printing">Sunpack Printing</option>
                  <option value="Sunboard Printing">Sunboard Printing</option>
                  <option value="Flex Board & Signage">Flex Board & Signage</option>
                  <option value="Outdoor Hoarding">Outdoor Hoarding</option>
                  <option value="Backlit Glow Sign">Backlit Glow Sign</option>
                  <option value="Vinyl Graphics">Vinyl Graphics & Wrapping</option>
                  <option value="Roll Up Standees">Roll Up Standees</option>
                  <option value="Fabric Printing">Fabric Printing</option>
                  <option value="Event Backdrop">Event Backdrop</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#CCFF00] mb-1.5">PROJECT DETAILS / SIZE REQUIREMENT</label>
                <textarea
                  rows={3}
                  placeholder="Tell us your width x height size, quantity or special instructions..."
                  value={formData.query}
                  onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                  className="w-full px-4 py-3.5 bg-[#1E293B] border border-gray-700/80 text-white placeholder-gray-400 text-sm font-medium focus:bg-[#0F172A] focus:border-[#CCFF00] focus:outline-none rounded-xl transition-all"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="py-3.5 px-6 bg-[#FF5500] hover:bg-[#E04B00] text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 border-2 border-[#CCFF00] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" /> {isSubmitting ? "SENDING..." : "SEND ENQUIRY"}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="py-3.5 px-6 bg-[#10B981] hover:bg-[#059669] text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> SEND ON WHATSAPP
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
