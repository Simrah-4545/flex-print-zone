"use client";

import React, { useState, useRef, useEffect } from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface ServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export default function Services({ onSelectServiceForQuote }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "Flex", "Boards", "Vinyl", "Signage", "Hoarding", "Paper", "Events"];

  const filteredServices = activeCategory === "All"
    ? BUSINESS_CONFIG.SERVICES
    : BUSINESS_CONFIG.SERVICES.filter((s) => s.category === activeCategory);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    const speed = 1.2; // medium speed continuous scrolling

    const step = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScroll - 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += speed;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, activeCategory]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-black bg-[#CCFF00] px-4 py-2 rounded-full border border-black/20 shadow">⚡ Vibrant Printing Range</span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#172033] uppercase mt-4 font-display">Our Printing Services</h2>
            <p className="text-gray-600 text-base mt-2 font-normal">Complete printing and outdoor advertising solutions for shops, businesses, events and campaigns.</p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-[#F5F7FA] border-2 border-gray-200 hover:border-[#CCFF00] hover:bg-[#CCFF00] text-black font-black flex items-center justify-center transition-all shadow-sm"
              aria-label="Previous Services"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-[#F5F7FA] border-2 border-gray-200 hover:border-[#CCFF00] hover:bg-[#CCFF00] text-black font-black flex items-center justify-center transition-all shadow-sm"
              aria-label="Next Services"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-black text-xs uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-[#CCFF00] text-black shadow-md border-2 border-black/20"
                  : "bg-[#F5F7FA] text-gray-700 hover:text-black border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Scrolling Service Cards Container */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex items-stretch gap-6 overflow-x-auto pb-8 pt-2 scrollbar-thin scrollbar-thumb-[#0066FF] scrollbar-track-[#F5F7FA]"
        >
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="w-[300px] sm:w-[330px] shrink-0 snap-start rounded-2xl bg-white border-2 border-gray-200 hover:border-[#CCFF00] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl group"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent select-none"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-lg bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-wider shadow">
                  ⚡ {service.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black text-[#172033] uppercase group-hover:text-[#0066FF] transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mt-1">
                    {service.shortDesc}
                  </p>

                  <div className="pt-2.5 mt-3 border-t border-gray-100">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0066FF] block mb-0.5">
                      Ideal For:
                    </span>
                    <p className="text-[11px] text-gray-500 italic line-clamp-1">
                      {service.forText}
                    </p>
                  </div>
                </div>

                {/* Buttons & Details Link matching media_1791215520786.png */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="w-full py-3 px-4 rounded-full bg-[#FF5500] hover:bg-[#E04B00] text-white font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md border-2 border-[#CCFF00]"
                  >
                    GET BEST QUOTE
                  </button>
                  <div className="text-right">
                    <button
                      onClick={() => onSelectServiceForQuote(service.title)}
                      className="text-[11px] font-bold text-[#0066FF] hover:underline inline-flex items-center gap-1"
                    >
                      Details <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

