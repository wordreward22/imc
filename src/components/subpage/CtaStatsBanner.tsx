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

  const getCardWidthClass = (total: number) => {
    if (total === 1) return "w-full max-w-lg";
    if (total === 2) return "w-full sm:w-[calc(50%-12px)] max-w-lg";
    if (total === 3) return "w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]";
    return "w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]";
  };

  return (
    <div className="relative bg-black text-white py-20 sm:py-24 overflow-hidden border-t border-neutral-900">
      {/* Background Image with Dark Overlays */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        {/* Top Text & CTA Button */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight uppercase">
            {title}
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            {desc}
          </p>
          <div className="pt-2">
            <button
              onClick={handleAction}
              className="px-8 py-3.5 bg-[#E2231B] hover:bg-[#9E0202] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-red-600/30 inline-flex items-center gap-2 group"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stat Cards in Natural Document Flow */}
        {stats && stats.length > 0 && (
          <div className="mt-14 pt-10 border-t border-neutral-800/80">
            <div className="flex flex-wrap justify-center gap-6">
              {stats.map((st, idx) => (
                <div
                  key={idx}
                  className={`${getCardWidthClass(
                    stats.length
                  )} bg-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-neutral-200/90 flex items-center gap-5 text-neutral-900 hover:shadow-red-500/10 transition-shadow`}
                >
                  <div className="w-13 h-13 rounded-2xl bg-red-50 text-[#E2231B] flex items-center justify-center flex-shrink-0 shadow-sm border border-red-100 p-3.5">
                    {renderIcon(st.icon)}
                  </div>
                  <div className="min-w-0">
                    <span className="text-3xl sm:text-4xl font-black font-heading text-neutral-900 leading-none block">
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
    </div>
  );
};
