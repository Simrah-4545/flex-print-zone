"use client";

import React, { useState, useEffect } from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { X, Send, MessageSquare, AlertCircle, CheckCircle2 } from "lucide-react";

interface PopupQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function PopupQuoteModal({ isOpen, onClose, initialService }: PopupQuoteModalProps) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [requirement, setRequirement] = useState(initialService || "Flex Banner");
  const [width, setWidth] = useState("6");
  const [height, setHeight] = useState("3");
  const [unit, setUnit] = useState("Feet");
  const [quantity, setQuantity] = useState("1");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialService) {
      setRequirement(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }
    const cleanMob = mobile.replace(/\D/g, "");
    if (!cleanMob || cleanMob.length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: name.trim(),
          mobileNumber: cleanMob,
          printingRequirement: requirement,
          width,
          height,
          unit,
          quantity: quantity || "1",
          projectDetails: message,
          source: "Popup Modal Form",
        }),
      });

      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error || "Failed to submit quote.");
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappMsg = `Hello Flex Print Zone,
I want to get a quote.
Name: ${name}
Mobile: ${mobile}
Requirement: ${requirement}
Size: ${width} x ${height} ${unit}
Quantity: ${quantity}
Message: ${message}`;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-3 sm:p-6 flex items-center justify-center animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#12141A] rounded-3xl border border-gray-800 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase">Quote Requested!</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Thank you for contacting Flex Print Zone. We will respond with your price estimate shortly.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.RAW_WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                CHAT ON WHATSAPP NOW
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FFB800]">
                Quick Quote Estimate
              </span>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                Get a Free Quote
              </h3>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090A0D] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFB800] text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090A0D] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFB800] text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                  Printing Requirement
                </label>
                <select
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-xs"
                >
                  {BUSINESS_CONFIG.SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other">Other Custom Print</option>
                </select>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <span className="text-[10px] text-gray-400 block mb-1">Width</span>
                  <input
                    type="text"
                    placeholder="6"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-xs"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block mb-1">Height</span>
                  <input
                    type="text"
                    placeholder="3"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-xs"
                  />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block mb-1">Unit</span>
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-xs"
                  >
                    <option value="Feet">Feet</option>
                    <option value="Inches">Inches</option>
                    <option value="Meters">Meters</option>
                    <option value="CM">CM</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
                    Details (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Short note"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-xs"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-[#FFB800] hover:bg-[#e0a200] text-black font-black text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {loading ? "Submitting..." : "GET MY QUOTE"}
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-gray-800 text-center">
              <span className="text-[11px] text-gray-400 block mb-2">Prefer instant conversation?</span>
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.RAW_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Flex Print Zone, I would like to get a quote.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-emerald-500/30"
              >
                <MessageSquare className="w-4 h-4" />
                CHAT ON WHATSAPP
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
