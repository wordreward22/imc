"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const FloatingWidget: React.FC = () => {
  const { language, isRtl } = useLanguage();

  const phoneRaw = "9647842000220";
  const waUrl = `https://wa.me/${phoneRaw}?text=${encodeURIComponent(
    language === "en"
      ? "Hello IMC Iraq, I would like to inquire about Cummins generators and services."
      : language === "ar"
      ? "مرحباً بشركة IMC العراق، أود الاستفسار بخصوص مولدات وخدمات كومنز."
      : "سڵاو IMC عێراق، دەمەوێت دەربارەی مۆلیدە و خزمەتگوزارییەکانی کۆمنز پرسیار بکەم."
  )}`;

  return (
    <div
      className={`fixed bottom-6 ${
        isRtl ? "left-6" : "right-6"
      } z-50 flex items-center gap-2.5`}
    >
      {/* Speech Bubble Tooltip: "Reach us" */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-[#222222] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md border border-neutral-200 hover:text-[#E2231B] transition-colors flex items-center gap-1"
      >
        <span>{language === "en" ? "Reach us" : language === "ar" ? "تواصل معنا" : "پەیوەندیمان پێوە بکەن"}</span>
      </a>

      {/* Circular Black Button with Red Badge 1 */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Reach us on WhatsApp"
        className="relative w-12 h-12 rounded-full bg-[#000000] hover:bg-[#E2231B] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        {/* Red notification badge '1' */}
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#E2231B] text-white text-[10px] font-bold flex items-center justify-center border border-white">
          1
        </span>
      </a>
    </div>
  );
};
