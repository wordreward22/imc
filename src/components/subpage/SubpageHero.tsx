"use client";

import React from "react";
import Image from "next/image";

interface SubpageHeroProps {
  subtitle?: string;
  title: string;
  accentWord?: string;
  watermark?: string;
  bgImage?: string;
}

export const SubpageHero: React.FC<SubpageHeroProps> = ({
  subtitle = "genuine innovation. genuine expertise.",
  title,
  accentWord,
  watermark = "Alkan",
  bgImage = "/uploads/2023/05/engine-technician-shop-800.jpg",
}) => {
  return (
    <div className="relative bg-black text-white py-20 sm:py-24 overflow-hidden border-b border-neutral-900">
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 opacity-25">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

      {/* Faint Center Watermark Typography */}
      {watermark && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[120px] sm:text-[180px] md:text-[220px] font-black uppercase text-white/[0.03] tracking-widest font-heading">
            {watermark}
          </span>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-3 z-10">
        {subtitle && (
          <p className="text-neutral-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
            {subtitle}
          </p>
        )}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-heading text-white tracking-tight uppercase">
          {title} {accentWord && <span className="text-[#E2231B]">{accentWord}</span>}
        </h1>
        <div className="w-16 h-1 bg-[#E2231B] mx-auto rounded-full mt-4" />
      </div>
    </div>
  );
};
