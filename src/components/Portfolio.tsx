"use client";

import React, { useState } from "react";
import { BUSINESS_CONFIG } from "@/config/business";
import { ExternalLink, Maximize2, X, MapPin, Sparkles } from "lucide-react";
import { InstagramIcon as Instagram } from "./SocialIcons";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<typeof BUSINESS_CONFIG.PORTFOLIO[0] | null>(null);

  const categories = ["All", "Flex", "Banners", "Hoardings", "Shop Boards", "Events", "Backdrops", "Vinyl", "Signage"];

  const filteredProjects = activeTab === "All"
    ? BUSINESS_CONFIG.PORTFOLIO
    : BUSINESS_CONFIG.PORTFOLIO.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-[#090A0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Completed Projects Showcase
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
            Our Recent Work
          </h2>
          <p className="mt-3 text-lg text-gray-400 font-normal">
            Take a look at some of our printing, signage and advertising projects in Bareilly.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all ${
                activeTab === cat
                  ? "bg-[#FFB800] text-black shadow-lg shadow-[#FFB800]/20"
                  : "bg-[#12141A] text-gray-400 hover:text-white border border-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry/Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-[#12141A] border border-gray-800 hover:border-[#FFB800]/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 text-transparent select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-black/70 border border-gray-700 text-white group-hover:bg-[#FFB800] group-hover:text-black transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#FFB800] text-black text-[10px] font-black uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-extrabold text-white uppercase tracking-wide leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-[#12141A]">
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                {project.location && (
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs font-semibold pt-2 border-t border-gray-800">
                    <MapPin className="w-3.5 h-3.5 text-[#FFB800]" />
                    <span>{project.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Link CTA */}
        <div className="mt-14 text-center">
          <a
            href={BUSINESS_CONFIG.INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-amber-500 hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-purple-900/20 hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            VIEW MORE WORK ON INSTAGRAM
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#12141A] rounded-2xl border border-gray-700 overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/80 text-white hover:bg-[#FFB800] hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[75vh] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>

            <div className="p-6 bg-[#12141A]">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="px-3 py-1 rounded bg-[#FFB800] text-black text-xs font-black uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                {selectedProject.location && (
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FFB800]" />
                    {selectedProject.location}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
