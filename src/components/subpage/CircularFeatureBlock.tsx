"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, ShieldCheck } from "lucide-react";
import { VideoModal } from "./VideoModal";

interface CircularFeatureBlockProps {
  subtitle: string;
  title: string;
  accentWord?: string;
  paragraphs: string[];
  image: string;
  badgeTitle?: string;
  badgeText?: string;
  buttonText?: string;
  videoUrl?: string;
  reverse?: boolean;
}

export const CircularFeatureBlock: React.FC<CircularFeatureBlockProps> = ({
  subtitle,
  title,
  accentWord,
  paragraphs,
  image,
  badgeTitle = "Cummins Authorized Distributor",
  badgeText = "Only buy Genuine Cummins parts and accessories from Cummins distributors or Cummins authorized dealer locations",
  buttonText,
  videoUrl,
  reverse = false,
}) => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text Narrative Column */}
          <div
            className={`space-y-6 lg:col-span-7 ${
              reverse ? "lg:order-2" : "lg:order-1"
            }`}
          >
            {/* Subtitle with 3 Horizontal Red Lines */}
            <div className="flex items-center gap-3">
              <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
                {subtitle}
              </span>
              <svg
                width="24"
                height="12"
                viewBox="0 0 24 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M0 2H24"
                  stroke="#E2231B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6 6H24"
                  stroke="#E2231B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 10H24"
                  stroke="#E2231B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-heading leading-tight uppercase">
              {title} {accentWord && <span className="text-[#E2231B]">{accentWord}</span>}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Optional Watch Video or Action Button */}
            {buttonText && videoUrl && (
              <div className="pt-2">
                <button
                  onClick={() => setVideoOpen(true)}
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#E2231B] hover:bg-[#9E0202] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-600/20 group"
                >
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-current text-white translate-x-0.5" />
                  </span>
                  <span>{buttonText}</span>
                </button>
              </div>
            )}
          </div>

          {/* Red Ring Circle Graphic with Overlapping Badge */}
          <div
            className={`flex justify-center lg:col-span-5 relative ${
              reverse ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Bold Red Circle Ring Frame */}
              <div className="absolute inset-0 rounded-full border-[12px] sm:border-[16px] border-[#E2231B] shadow-2xl overflow-hidden bg-neutral-100">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Overlapping White Badge Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-neutral-100 max-w-[260px] sm:max-w-xs z-20 space-y-1.5 animate-fadeIn">
                <div className="flex items-center gap-2 text-[#E2231B]">
                  <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                  <span className="font-extrabold text-xs text-neutral-900 font-heading">
                    {badgeTitle}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 leading-relaxed">
                  {badgeText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoUrl && (
        <VideoModal
          isOpen={videoOpen}
          onClose={() => setVideoOpen(false)}
          videoUrl={videoUrl}
        />
      )}
    </section>
  );
};
