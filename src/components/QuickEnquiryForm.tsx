"use client";

import React, { useState } from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function QuickEnquiryForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [requirement, setRequirement] = useState("Flex Banner");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
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
          quantity: "1",
          dontKnowSize: true,
          projectDetails: message,
          source: "Quick Enquiry Form",
        }),
      });

      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error || "Failed to submit enquiry.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-[#12141A] border border-gray-800 shadow-2xl">
      <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-1">
        Quick Enquiry
      </h3>
      <p className="text-xs text-gray-400 mb-6">
        Have a fast query? Drop your details and we will reach out immediately.
      </p>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
          <h4 className="text-lg font-bold text-white uppercase">Enquiry Sent!</h4>
          <p className="text-xs text-gray-300">
            Thank you for contacting Flex Print Zone. We will get back to you shortly.
          </p>
          <a
            href={`https://wa.me/${BUSINESS_CONFIG.RAW_WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-bold text-xs uppercase"
          >
            Or Chat on WhatsApp
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
              Name *
            </label>
            <input
              type="text"
              required
              placeholder="Your name"
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
              placeholder="10-digit mobile"
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
              <option value="Flex Banner">Flex Banner</option>
              <option value="Flex Board">Flex Board</option>
              <option value="Hoarding">Hoarding</option>
              <option value="Backlit Flex">Backlit Flex</option>
              <option value="Vinyl Printing">Vinyl Printing</option>
              <option value="Event Backdrop">Event Backdrop</option>
              <option value="Shop Sign Board">Shop Sign Board</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1">
              Message
            </label>
            <textarea
              rows={3}
              placeholder="Tell us your printing requirement..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#090A0D] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFB800] text-xs"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#FFB800] hover:bg-[#e0a200] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            {loading ? "Sending..." : "SEND ENQUIRY"}
          </button>
        </form>
      )}
    </div>
  );
}
