"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, Zap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

export default function FleetGuardPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  const filterTypes = [
    {
      title: "Fuel Filters & Water Separators",
      desc: "Patented NanoNet® media filters capturing particles down to 4 microns, protecting high-pressure common rail fuel systems from contaminated diesel.",
    },
    {
      title: "Lube & Oil Filtration",
      desc: "StrataPore® multi-layered synthetic media removing soot and metal contaminants, significantly extending oil drain intervals.",
    },
    {
      title: "Air Intake & Pre-cleaners",
      desc: "Direct Flow™ high-efficiency compact air cleaners designed for high-dust desert environments across central and southern Iraq.",
    },
    {
      title: "Coolant & Corrosion Inhibitors",
      desc: "Fleetguard ES Compleat™ organic acid technology coolants protecting wet cylinder liners against cavitation erosion and scaling.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="relative bg-slate-950 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/engine-closeup-banner.jpg"
            alt="Fleetguard Filtration"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cummins-red/20 border border-cummins-red/40 text-cummins-red text-xs font-bold uppercase tracking-wider">
              {t.cumminsFiltration}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {language === "en" ? "Fleetguard Filtration Systems" : "أنظمة فلاتر فليت جارد الأصلية"}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "Engineered specifically for Cummins engines, Fleetguard filters deliver industry-leading media technology for maximum protection."
                : "فلاتر فليت جارد المصممة هندسياً خصيصاً لمحركات كومنز لتوفير أقصى درجات الحماية والنقاء."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filterTypes.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cummins-red flex-shrink-0" />
                <h3 className="text-lg font-bold text-slate-900 font-heading">{item.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => openQuote()}
            className="px-8 py-3.5 bg-cummins-red hover:bg-cummins-red-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/20"
          >
            Order Fleetguard Filters
          </button>
        </div>
      </div>
    </div>
  );
}
