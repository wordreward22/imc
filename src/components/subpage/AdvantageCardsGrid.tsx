"use client";

import React from "react";

interface AdvantageCard {
  num: number | string;
  title: string;
  desc: string;
}

interface AdvantageCardsGridProps {
  subtitle?: string;
  title: string;
  accentWord?: string;
  watermark?: string;
  cards: AdvantageCard[];
}

export const AdvantageCardsGrid: React.FC<AdvantageCardsGridProps> = ({
  subtitle = "Benefit from",
  title,
  accentWord,
  watermark = "Alkan",
  cards,
}) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Watermark */}
      {watermark && (
        <div className="absolute top-12 inset-x-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[120px] sm:text-[180px] font-black uppercase text-neutral-100/80 tracking-widest font-heading">
            {watermark}
          </span>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          {subtitle && (
            <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
              {subtitle}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-heading leading-tight uppercase">
            {title} {accentWord && <span className="text-[#E2231B]">{accentWord}</span>}
          </h2>
          <div className="w-16 h-1 bg-[#E2231B] mx-auto rounded-full mt-3" />
        </div>

        {/* Cards Grid with Centered Trailing Items */}
        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-neutral-50 rounded-2xl p-7 border border-neutral-200/90 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Red Circular Number Badge */}
                <div className="w-10 h-10 rounded-full bg-[#E2231B] text-white flex items-center justify-center font-black text-sm shadow-sm">
                  {card.num}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 font-heading leading-snug">
                  {card.title}
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
