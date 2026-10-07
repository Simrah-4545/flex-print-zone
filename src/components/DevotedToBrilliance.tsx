"use client";

import React from "react";
import { Target, Users, Star } from "lucide-react";

export default function DevotedToBrilliance() {
  return (
    <section id="brilliance" className="py-20 bg-[#E0F2FE] text-gray-900 border-y border-sky-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title matching Image 5 */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#581C87] tracking-tight font-display">
            Perfection on Flex & Print. We are devoted to brilliance.
          </h2>
        </div>

        {/* 3 Columns matching Image 5 */}
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Column 1 */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full border-2 border-[#7E22CE] text-[#7E22CE] flex items-center justify-center text-xl">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#6B21A8]">
              Exceptional print quality
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed font-normal">
              Be it professional flex banners, shop frontlit boards, or custom vinyl graphics, we produce the highest quality print possible. To keep our promise, we continually invest in the best infrastructure and state-of-the-art print techniques. Flex Print Zone is your online print partner capable of producing almost anything you can possibly imagine.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full border-2 border-[#7E22CE] text-[#7E22CE] flex items-center justify-center text-xl">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#6B21A8]">
              Work with the experts
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed font-normal">
              At Flex Print Zone, all new orders are instantly given a personal point of contact, and each order is reviewed by our production team. We have dedicated print experts with experience spanning three decades, ready to discuss your ideas and bring them to life.
            </p>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full border-2 border-[#7E22CE] text-[#7E22CE] flex items-center justify-center text-xl">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#6B21A8]">
              Make a statement
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed font-normal">
              We have a spectacular variety of flex media stocks, a wide range of special finishes, and utmost precision in everything print. We help you make the best decisions about print — only to help your business create a remarkable and lasting impression.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
