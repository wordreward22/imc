"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import { useLanguage, Language } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const TopBar: React.FC = () => {
  const { language, setLanguage, isRtl } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-[#111111] text-neutral-300 text-xs py-2 px-4 border-b border-[#222222] transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="tel:+9647842000220"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#E2231B] flex-shrink-0" />
            <span dir="ltr">{t.phone}</span>
          </a>
          <a
            href="mailto:info@imc.iq"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#E2231B] flex-shrink-0" />
            <span>{t.email}</span>
          </a>
          <div className="hidden lg:flex items-center gap-1.5 text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-[#E2231B] flex-shrink-0" />
            <span>{t.address}</span>
          </div>
          <div className="hidden xl:flex items-center gap-1.5 text-neutral-400">
            <Clock className="w-3.5 h-3.5 text-[#E2231B] flex-shrink-0" />
            <span>{t.workingHours}</span>
          </div>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-neutral-400" />
          <div className="flex items-center bg-[#1a1a1a] rounded-lg p-0.5 border border-[#333333]">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                language === "en"
                  ? "bg-[#E2231B] text-white shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("ar")}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                language === "ar"
                  ? "bg-[#E2231B] text-white shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              العربية
            </button>
            <button
              onClick={() => setLanguage("ku")}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                language === "ku"
                  ? "bg-[#E2231B] text-white shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              کوردی
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
