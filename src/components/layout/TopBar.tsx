"use client";

import React from "react";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import { useLanguage, Language } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const TopBar: React.FC = () => {
  const { language, setLanguage, isRtl } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href="tel:+9647842000220"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-cummins-red flex-shrink-0" />
            <span dir="ltr">{t.phone}</span>
          </a>
          <a
            href="mailto:info@imc.iq"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-cummins-red flex-shrink-0" />
            <span>{t.email}</span>
          </a>
          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-cummins-red flex-shrink-0" />
            <span>{t.address}</span>
          </div>
          <div className="hidden xl:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-cummins-red flex-shrink-0" />
            <span>{t.workingHours}</span>
          </div>
        </div>

        {/* Language Switcher */}
        <div className="flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-slate-400" />
          <div className="flex items-center bg-slate-800 rounded-md p-0.5 border border-slate-700">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                language === "en"
                  ? "bg-cummins-red text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("ar")}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                language === "ar"
                  ? "bg-cummins-red text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              العربية
            </button>
            <button
              onClick={() => setLanguage("ku")}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                language === "ku"
                  ? "bg-cummins-red text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
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
