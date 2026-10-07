"use client";

import React, { useState, useEffect } from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { Send, CheckCircle2, MessageSquare, Phone, Upload, AlertCircle, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

interface DetailedEnquiryFormProps {
  selectedServiceTitle?: string;
}

export default function DetailedEnquiryForm({ selectedServiceTitle }: DetailedEnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    sameAsMobile: true,
    whatsappNumber: "",
    email: "",
    printingRequirement: "Flex Banner",
    customRequirement: "",
    width: "6",
    height: "3",
    unit: "Feet",
    dontKnowSize: false,
    quantity: "1",
    printingType: "Single Side",
    finishing: [] as string[],
    hasArtwork: "No",
    deliveryOption: "Pickup",
    deliveryAddress: "",
    installationLocation: "",
    requiredDate: "",
    timePreference: "No Preference",
    projectDetails: "",
    source: "Google",
  });

  const [artworkFile, setArtworkFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successData, setSuccessData] = useState<{ enquiryId: string; whatsappMessage: string } | null>(null);

  // Multi-step form state for mobile view
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  useEffect(() => {
    if (selectedServiceTitle) {
      setFormData((prev) => ({
        ...prev,
        printingRequirement: selectedServiceTitle,
      }));
    }
  }, [selectedServiceTitle]);

  const handleMobileChange = (val: string) => {
    setFormData((prev) => ({
      ...prev,
      mobileNumber: val,
      whatsappNumber: prev.sameAsMobile ? val : prev.whatsappNumber,
    }));
  };

  const handleCheckboxSameAsMobile = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      sameAsMobile: checked,
      whatsappNumber: checked ? prev.mobileNumber : prev.whatsappNumber,
    }));
  };

  const handleFinishingToggle = (item: string) => {
    setFormData((prev) => {
      const exists = prev.finishing.includes(item);
      const updated = exists ? prev.finishing.filter((f) => f !== item) : [...prev.finishing, item];
      return { ...prev, finishing: updated };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const ext = file.name.split(".").pop()?.toLowerCase() || "";
      const allowed = ["jpg", "jpeg", "png", "pdf", "ai", "cdr", "psd"];
      if (!allowed.includes(ext)) {
        setErrorMessage(`Unsupported format .${ext}. Allowed: JPG, PNG, PDF, AI, CDR, PSD.`);
        return;
      }
      if (file.size > 50 * 1024 * 1024) {
        setErrorMessage("File size exceeds maximum allowed 50MB.");
        return;
      }
      setErrorMessage("");
      setArtworkFile(file);
    }
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) return "Please enter your full name.";
    const cleanNum = formData.mobileNumber.replace(/\D/g, "");
    if (!cleanNum || cleanNum.length < 10) return "Please enter a valid 10-digit mobile number.";
    if (!formData.printingRequirement) return "Please select a printing requirement.";
    const q = parseInt(formData.quantity, 10);
    if (isNaN(q) || q < 1) return "Please enter a valid quantity.";
    return null;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMessage("");

    const err = validateForm();
    if (err) {
      setErrorMessage(err);
      return;
    }

    setIsSubmitting(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        if (key === "finishing") {
          data.append("finishing", (val as string[]).join(","));
        } else {
          data.append(key, String(val));
        }
      });

      if (artworkFile) {
        data.append("artworkFile", artworkFile);
      }

      const res = await fetch("/api/enquiry", {
        method: "POST",
        body: data,
      });

      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error || "Failed to submit quote request.");
      }

      setSuccessData({
        enquiryId: json.enquiryId,
        whatsappMessage: json.whatsappMessage,
      });
    } catch (error: any) {
      setErrorMessage(error.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const printingRequirementOptions = [
    "Flex Banner",
    "Flex Board",
    "Frontlit Flex",
    "3D Acrylic Letter",
    "Glow Sign Board",
    "Hoarding Unipole",
    "Backlit Flex",
    "Star Flex",
    "Mesh Flex",
    "Hoarding",
    "Shop Board",
    "Vinyl Printing",
    "Eco Vinyl Printing",
    "Retro Vinyl Printing",
    "Oneway Vision",
    "Offset Printing",
    "Digital Printing",
    "Event Backdrop",
    "Stage Backdrop",
    "Poster",
    "Exhibition Graphics",
    "Promotional Banner",
    "Other",
  ];

  const finishingOptions = [
    "Eyelets",
    "Hemming",
    "Rope",
    "Cutting",
    "Mounting",
    "Installation",
    "Delivery",
    "No Finishing Required",
    "Not Sure",
  ];

  return (
    <section id="enquiry" className="py-24 bg-[#090A0D] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Instant Quote Calculation
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Get a Free Quote
          </h2>
          <p className="mt-3 text-base text-gray-400 font-normal">
            Tell us what you need to print and we'll help you with the right solution.
          </p>
        </div>

        {/* Success View */}
        {successData ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-[#12141A] border border-emerald-500/40 text-center space-y-6 shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black text-white uppercase tracking-tight">
              Thank You!
            </h3>
            <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
              Your enquiry <span className="text-[#FFB800] font-bold">#{successData.enquiryId}</span> has been received successfully. Our team will review your requirement and contact you shortly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={`https://wa.me/${BUSINESS_CONFIG.RAW_WHATSAPP_NUMBER}?text=${successData.whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-900/30"
              >
                <MessageSquare className="w-5 h-5" />
                CHAT ON WHATSAPP NOW
              </a>

              <a
                href={`tel:${BUSINESS_CONFIG.PHONE_NUMBER}`}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-3 border border-gray-700"
              >
                <Phone className="w-5 h-5 text-[#FFB800]" />
                CALL US DIRECTLY
              </a>
            </div>

            <button
              onClick={() => {
                setSuccessData(null);
                setFormData((prev) => ({ ...prev, fullName: "", mobileNumber: "" }));
              }}
              className="text-xs text-gray-500 underline hover:text-white pt-4 block mx-auto"
            >
              Submit Another Quote Request
            </button>
          </div>
        ) : (
          <div className="rounded-3xl bg-[#12141A] border border-gray-800 p-6 sm:p-10 shadow-2xl">
            
            {/* Error Message */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Mobile Progress Bar */}
            <div className="lg:hidden mb-8">
              <div className="flex justify-between items-center text-xs text-gray-400 font-bold uppercase tracking-wider mb-2">
                <span>Step {currentStep} of {totalSteps}</span>
                <span>{Math.round((currentStep / totalSteps) * 100)}% Completed</span>
              </div>
              <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden">
                <div
                  className="h-full bg-[#FFB800] transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* STEP 1: CUSTOMER INFORMATION */}
              <div className={`space-y-6 ${currentStep === 1 ? "block" : "hidden lg:block"}`}>
                <h3 className="text-xl font-black text-[#FFB800] uppercase tracking-wide border-b border-gray-800 pb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#FFB800]/20 text-[#FFB800] text-xs font-black flex items-center justify-center">1</span>
                  Customer Information
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0D] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFB800] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter 10-digit mobile number"
                      value={formData.mobileNumber}
                      onChange={(e) => handleMobileChange(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0D] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFB800] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter WhatsApp number"
                      value={formData.whatsappNumber}
                      disabled={formData.sameAsMobile}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0D] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFB800] text-sm disabled:opacity-60"
                    />
                    <label className="flex items-center gap-2 mt-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.sameAsMobile}
                        onChange={(e) => handleCheckboxSameAsMobile(e.target.checked)}
                        className="rounded border-gray-800 text-[#FFB800] focus:ring-[#FFB800] accent-[#FFB800]"
                      />
                      <span className="text-xs text-gray-400">Same as mobile number</span>
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0D] border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-[#FFB800] text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* STEP 2: PRINTING REQUIREMENT */}
              <div className={`space-y-6 ${currentStep === 2 ? "block" : "hidden lg:block"}`}>
                <h3 className="text-xl font-black text-[#FFB800] uppercase tracking-wide border-b border-gray-800 pb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#FFB800]/20 text-[#FFB800] text-xs font-black flex items-center justify-center">2</span>
                  Printing Requirement
                </h3>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    What do you want to print? *
                  </label>
                  <select
                    value={formData.printingRequirement}
                    onChange={(e) => setFormData({ ...formData, printingRequirement: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-sm"
                  >
                    {printingRequirementOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-gray-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {formData.printingRequirement === "Other" && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Please specify your requirement
                    </label>
                    <input
                      type="text"
                      placeholder="Specify your custom printing requirement"
                      value={formData.customRequirement}
                      onChange={(e) => setFormData({ ...formData, customRequirement: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-sm"
                    />
                  </div>
                )}
              </div>

              {/* STEP 3: SIZE & QUANTITY */}
              <div className={`space-y-6 ${currentStep === 3 ? "block" : "hidden lg:block"}`}>
                <h3 className="text-xl font-black text-[#FFB800] uppercase tracking-wide border-b border-gray-800 pb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#FFB800]/20 text-[#FFB800] text-xs font-black flex items-center justify-center">3</span>
                  Required Size & Quantity
                </h3>

                <div className="space-y-4">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                    Required Size
                  </label>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <span className="text-[11px] text-gray-400 block mb-1">Width</span>
                      <input
                        type="text"
                        disabled={formData.dontKnowSize}
                        placeholder="Width"
                        value={formData.width}
                        onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-sm disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] text-gray-400 block mb-1">Height</span>
                      <input
                        type="text"
                        disabled={formData.dontKnowSize}
                        placeholder="Height"
                        value={formData.height}
                        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-sm disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] text-gray-400 block mb-1">Unit</span>
                      <select
                        disabled={formData.dontKnowSize}
                        value={formData.unit}
                        onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-sm disabled:opacity-50"
                      >
                        <option value="Feet">Feet</option>
                        <option value="Inches">Inches</option>
                        <option value="Meters">Meters</option>
                        <option value="CM">CM</option>
                      </select>
                    </div>
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.dontKnowSize}
                      onChange={(e) => setFormData({ ...formData, dontKnowSize: e.target.checked })}
                      className="rounded border-gray-800 text-[#FFB800] focus:ring-[#FFB800] accent-[#FFB800]"
                    />
                    <span className="text-xs text-gray-400">I don't know the exact size</span>
                  </label>

                  {formData.dontKnowSize && (
                    <div className="p-3.5 rounded-xl bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs leading-relaxed">
                      No problem. Tell us your requirement in project details and our team can help determine the suitable size.
                    </div>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-6 pt-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Quantity *
                    </label>
                    <input
                      type="number"
                      min="1"
                      required
                      placeholder="Example: 5"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Printing Type
                    </label>
                    <select
                      value={formData.printingType}
                      onChange={(e) => setFormData({ ...formData, printingType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-sm"
                    >
                      <option value="Single Side">Single Side</option>
                      <option value="Double Side">Double Side</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">
                    Finishing Requirements (Multi-select)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {finishingOptions.map((opt) => {
                      const selected = formData.finishing.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleFinishingToggle(opt)}
                          className={`p-3 rounded-xl border text-xs font-bold uppercase tracking-wider text-left transition-all flex items-center justify-between ${
                            selected
                              ? "bg-[#FFB800]/10 border-[#FFB800] text-[#FFB800]"
                              : "bg-[#090A0D] border-gray-800 text-gray-400 hover:text-white"
                          }`}
                        >
                          <span>{opt}</span>
                          {selected && <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* STEP 4: DESIGN / ARTWORK UPLOAD */}
              <div className={`space-y-6 ${currentStep === 4 ? "block" : "hidden lg:block"}`}>
                <h3 className="text-xl font-black text-[#FFB800] uppercase tracking-wide border-b border-gray-800 pb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#FFB800]/20 text-[#FFB800] text-xs font-black flex items-center justify-center">4</span>
                  Design & Artwork
                </h3>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-3">
                    Do you already have the design?
                  </label>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { label: "Yes, I have final artwork", value: "Yes" },
                      { label: "I need design assistance", value: "Assistance Needed" },
                      { label: "I am not sure", value: "Not Sure" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setFormData({ ...formData, hasArtwork: opt.value })}
                        className={`p-4 rounded-xl border text-xs font-bold text-left transition-all ${
                          formData.hasArtwork === opt.value
                            ? "bg-[#FFB800]/10 border-[#FFB800] text-[#FFB800]"
                            : "bg-[#090A0D] border-gray-800 text-gray-400 hover:text-white"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.hasArtwork === "Yes" && (
                  <div className="p-6 rounded-2xl bg-[#090A0D] border border-dashed border-gray-700 text-center space-y-3">
                    <Upload className="w-8 h-8 text-[#FFB800] mx-auto" />
                    <div>
                      <span className="text-xs font-bold text-white uppercase tracking-wider block">
                        Upload Artwork File
                      </span>
                      <span className="text-[11px] text-gray-400 block mt-0.5">
                        Supported: JPG, JPEG, PNG, PDF, AI, CDR, PSD (Max 50MB)
                      </span>
                    </div>

                    <input
                      type="file"
                      id="artwork-upload"
                      accept=".jpg,.jpeg,.png,.pdf,.ai,.cdr,.psd"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    <label
                      htmlFor="artwork-upload"
                      className="inline-block px-5 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-bold text-xs uppercase tracking-wider cursor-pointer border border-gray-600"
                    >
                      {artworkFile ? "Change File" : "Choose File"}
                    </label>

                    {artworkFile && (
                      <div className="text-xs text-emerald-400 font-medium">
                        Selected File: {artworkFile.name} ({(artworkFile.size / (1024 * 1024)).toFixed(2)} MB)
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* STEP 5: DELIVERY & DATE */}
              <div className={`space-y-6 ${currentStep === 5 ? "block" : "hidden lg:block"}`}>
                <h3 className="text-xl font-black text-[#FFB800] uppercase tracking-wide border-b border-gray-800 pb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#FFB800]/20 text-[#FFB800] text-xs font-black flex items-center justify-center">5</span>
                  Delivery & Preferred Date
                </h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      How would you like to receive your order?
                    </label>
                    <select
                      value={formData.deliveryOption}
                      onChange={(e) => setFormData({ ...formData, deliveryOption: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-sm"
                    >
                      <option value="Pickup">Pickup from Workshop</option>
                      <option value="Delivery">Bareilly City Delivery</option>
                      <option value="Delivery + Installation">Delivery + On-Site Installation</option>
                      <option value="Not Sure">Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      When do you need the printing?
                    </label>
                    <input
                      type="date"
                      value={formData.requiredDate}
                      onChange={(e) => setFormData({ ...formData, requiredDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-sm"
                    />
                  </div>
                </div>

                {formData.deliveryOption === "Delivery" && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      placeholder="Enter detailed delivery address in Bareilly"
                      value={formData.deliveryAddress}
                      onChange={(e) => setFormData({ ...formData, deliveryAddress: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-sm"
                    />
                  </div>
                )}

                {formData.deliveryOption === "Delivery + Installation" && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Installation Location Site
                    </label>
                    <input
                      type="text"
                      placeholder="Enter shop or hoarding site location in Bareilly"
                      value={formData.installationLocation}
                      onChange={(e) => setFormData({ ...formData, installationLocation: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-sm"
                    />
                  </div>
                )}
              </div>

              {/* STEP 6: PROJECT DETAILS & SOURCE */}
              <div className={`space-y-6 ${currentStep === 6 ? "block" : "hidden lg:block"}`}>
                <h3 className="text-xl font-black text-[#FFB800] uppercase tracking-wide border-b border-gray-800 pb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#FFB800]/20 text-[#FFB800] text-xs font-black flex items-center justify-center">6</span>
                  Project Details & Submit
                </h3>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Tell us more about your requirement
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Example: I need 10 flex banners for a shop promotion, each 6 ft × 3 ft with eyelets."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    How did you find us?
                  </label>
                  <select
                    value={formData.source}
                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090A0D] border border-gray-800 text-white focus:outline-none focus:border-[#FFB800] text-sm"
                  >
                    <option value="Google">Google Search</option>
                    <option value="Instagram">Instagram (@flexprint__bly_)</option>
                    <option value="Facebook">Facebook</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Friend / Referral">Friend / Referral</option>
                    <option value="Existing Customer">Existing Customer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Mobile Step Navigation Controls */}
              <div className="lg:hidden flex items-center justify-between pt-4 border-t border-gray-800">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="px-5 py-3 rounded-xl bg-gray-800 text-white font-bold text-xs uppercase flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : <div />}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                    className="px-6 py-3 rounded-xl bg-[#FFB800] text-black font-extrabold text-xs uppercase flex items-center gap-2"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-xl bg-[#FFB800] hover:bg-[#e0a200] text-black font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : "SUBMIT QUOTE"}
                  </button>
                )}
              </div>

              {/* Desktop Submit Button */}
              <div className="hidden lg:block pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#FFB800] hover:bg-[#e0a200] text-black font-black text-sm uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#FFB800]/25 flex items-center justify-center gap-3 disabled:opacity-60"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Sending your enquiry..." : "REQUEST MY QUOTE"}
                </button>
              </div>

            </form>

          </div>
        )}

      </div>
    </section>
  );
}
