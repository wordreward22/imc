"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Globe, ShieldCheck, Award, ArrowRight } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";

interface StatItem {
  number: string;
  label: string;
  icon?: "pin" | "globe" | "shield" | "award";
}

interface CtaStatsBannerProps {
  title?: string;
  desc: string;
  buttonText?: string;
  bgImage?: string;
  stats?: StatItem[];
  onButtonClick?: () => void;
}

export const CtaStatsBanner: React.FC<CtaStatsBannerProps> = ({
  title = "The Genuine Difference",
  desc,
  buttonText = "Request A Quote",
  bgImage = "/uploads/2023/05/imc-slider-2.jpeg",
  stats = [
    {
      number: "300+",
      label: "Genuine overhaul kit components tested through lab analysis",
      icon: "pin",
    },
    {
      number: "100+",
      label: "Years of perfecting the design and manufacturing of Genuine Cummins parts",
      icon: "globe",
    },
  ],
  onButtonClick,
}) => {
  const { openQuote } = useQuote();

  const handleAction = () => {
    if (onButtonClick) onButtonClick();
    else openQuote();
  };

  const renderIcon = (type?: string) => {
    switch (type) {
      case "pin":
        return <MapPin className="w-6 h-6 text-[#E2231B]" />;
      case "globe":
        return <Globe className="w-6 h-6 text-[#E2231B]" />;
      case "shield":
        return <ShieldCheck className="w-6 h-6 text-[#E2231B]" />;
      default:
        return <Award className="w-6 h-6 text-[#E2231B]" />;
    }
  };

  return (
    <div className="relative bg-black text-white pt-20 pb-28 sm:pb-32 overflow-visible">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 opacity-35">
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />

      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight uppercase">
          {title}
        </h2>
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          {desc}
        </p>
        <div className="pt-2">
          <button
            onClick={handleAction}
            className="px-8 py-3.5 bg-[#E2231B] hover:bg-[#9E0202] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-red-600/30 inline-flex items-center gap-2"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Floating Stat Cards Overlapping Bottom */}
      {stats && stats.length > 0 && (
        <div className="absolute -bottom-16 sm:-bottom-20 inset-x-0 z-20 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-6">
            {stats.map((st, idx) => (
              <div
                key={idx}
                className="w-full sm:w-[calc(50%-12px)] bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-neutral-200/90 flex items-center gap-5 text-neutral-900"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#E2231B] flex items-center justify-center flex-shrink-0 shadow-sm">
                  {renderIcon(st.icon)}
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-black font-heading text-neutral-900 leading-none">
                    {st.number}
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-snug mt-1.5">
                    {st.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
