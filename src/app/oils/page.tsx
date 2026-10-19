"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, Zap, Droplets } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

export default function OilsPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  const oilProducts = [
    {
      name: "Valvoline Premium Blue™ 15W-40",
      desc: "Endorsed and exclusively recommended by Cummins for heavy-duty diesel engines, offering superior soot control and extended drain intervals.",
    },
    {
      name: "Valvoline Premium Blue One Solution™ Gen2",
      desc: "Premium synthetic blend engine oil formulated for mixed fleets running compressed natural gas (CNG), liquefied natural gas (LNG), and diesel.",
    },
    {
      name: "Cummins Genuine Hydraulic & Gear Fluids",
      desc: "High-viscosity index lubricants preventing wear on planetary gears, pump components, and electro-hydraulic actuators under extreme heat.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="relative bg-slate-950 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/engine-closeup-banner.jpg"
            alt="Valvoline Cummins Oils"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cummins-red/20 border border-cummins-red/40 text-cummins-red text-xs font-bold uppercase tracking-wider">
              {t.oils}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {language === "en" ? "Valvoline & Cummins Engine Oils" : "زيوت المحركات الأصلية من كومنز وفالفولين"}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "Formulated through joint engineering development between Cummins and Valvoline to unlock peak engine life and thermal stability."
                : "تم تطوير زيوت فالفولين بريميوم بلو بالتعاون الهندسي الحصري مع كومنز لضمان أعلى مستويات الحماية التشغيلية."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {oilProducts.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-cummins-red flex items-center justify-center">
                  <Droplets className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">{p.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => openQuote()}
                  className="w-full py-2 bg-slate-900 hover:bg-cummins-red text-white text-xs font-bold uppercase rounded-lg transition-colors"
                >
                  Request Bulk Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
