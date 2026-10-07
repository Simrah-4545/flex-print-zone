"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DevotedToBrilliance from "@/components/DevotedToBrilliance";
import Services from "@/components/Services";
import FeaturedCTA from "@/components/FeaturedCTA";
import PrintThatInspires from "@/components/PrintThatInspires";
import Portfolio from "@/components/Portfolio";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PrintingOptions from "@/components/PrintingOptions";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs";
import Applications from "@/components/Applications";
import FAQSection from "@/components/FAQSection";
import SayHelloContactSection from "@/components/SayHelloContactSection";
import DetailedEnquiryForm from "@/components/DetailedEnquiryForm";
import Footer from "@/components/Footer";
import Floating3ConnectingWidget from "@/components/Floating3ConnectingWidget";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import PopupQuoteModal from "@/components/PopupQuoteModal";
import PrivacyTermsModal from "@/components/PrivacyTermsModal";

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string | undefined>(undefined);
  const [policyType, setPolicyType] = useState<"privacy" | "terms" | null>(null);

  const handleOpenQuoteModal = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceTitle(serviceTitle);
    }
    setQuoteModalOpen(true);
  };

  const handleSelectServiceForQuoteForm = (serviceTitle: string) => {
    setSelectedServiceTitle(serviceTitle);
    const el = document.getElementById("contact-hello") || document.getElementById("enquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      setQuoteModalOpen(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#090A0D] text-gray-100 flex flex-col font-sans selection:bg-[#E50914] selection:text-white">
      {/* 1. Header */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 3. Devoted to Brilliance Section (Image 5 Spec) */}
        <DevotedToBrilliance />

        {/* 4. Printing & Advertising Services (PrintsWallah Spec) */}
        <Services onSelectServiceForQuote={handleSelectServiceForQuoteForm} />

        {/* 5. Featured CTA */}
        <FeaturedCTA onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 6. Print That Inspires (Image 4 Spec) */}
        <PrintThatInspires />

        {/* 7. Portfolio / Our Work */}
        <Portfolio />

        {/* 8. Testimonials Section (Image 3 Spec) */}
        <TestimonialsSection />

        {/* 9. Why Choose Us */}
        <WhyChooseUs />

        {/* 10. Printing Options */}
        <PrintingOptions onSelectServiceForQuote={handleSelectServiceForQuoteForm} />

        {/* 11. How It Works */}
        <HowItWorks />

        {/* 12. About Us */}
        <AboutUs />

        {/* 13. Applications & Our Clients */}
        <Applications />

        {/* 14. FAQ Section */}
        <FAQSection />

        {/* 15. Detailed Quote Form */}
        <DetailedEnquiryForm selectedServiceTitle={selectedServiceTitle} />

        {/* 16. Say Hello Contact Form (Image 2 Spec) */}
        <SayHelloContactSection />
      </main>

      {/* 17. Footer */}
      <Footer
        onOpenPrivacy={() => setPolicyType("privacy")}
        onOpenTerms={() => setPolicyType("terms")}
      />

      {/* Floating 3-Connecting Widget (Image 1 Spec: WhatsApp, Call, Email) */}
      <Floating3ConnectingWidget />

      {/* Mobile Sticky CTA */}
      <MobileStickyCTA onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Modals */}
      <PopupQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedServiceTitle}
      />
      <PrivacyTermsModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />
    </div>
  );
}
