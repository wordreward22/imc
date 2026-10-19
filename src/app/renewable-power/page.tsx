"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sun, BatteryCharging, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

export default function RenewablePowerPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  return (
    <div className="bg-neutral-50 min-h-screen pb-24">
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/imc-slider-1.jpeg"
            alt="Renewable Power"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              {t.renewablePower}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {language === "en" ? "Hybrid & Renewable Power Systems" : "أنظمة الطاقة المتجددة والهجينة"}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "Integrating solar PV, battery energy storage systems (BESS), and Cummins microgrid controls with diesel generators to reduce fuel consumption by up to 60%."
                : "دمج الطاقة الشمسية وأنظمة تخزين البطاريات مع مولدات الديزل لخفض استهلاك الوقود والانبعاثات بنسبة تصل إلى 60%."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 font-heading">
              Commercial Solar Microgrids
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Utility-scale rooftop and ground-mounted photovoltaic systems coupled with intelligent synchronization switches to prioritize solar generation whenever available.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center">
              <BatteryCharging className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 font-heading">
              Battery Energy Storage (BESS)
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Lithium iron phosphate (LFP) high-density containerized storage banks providing peak shaving, spinning reserve, and zero-emission silent power during light-load hours.
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => openQuote()}
            className="px-8 py-3.5 bg-cummins-red hover:bg-cummins-red-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/20"
          >
            Inquire for Microgrid Sizing
          </button>
        </div>
      </div>
    </div>
  );
}
