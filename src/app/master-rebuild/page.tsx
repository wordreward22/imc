"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Settings, ShieldCheck, CheckCircle2, Award, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

export default function MasterRebuildPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="relative bg-slate-950 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/engine-technician-shop-800.jpg"
            alt="Master Rebuild Center"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cummins-red/20 border border-cummins-red/40 text-cummins-red text-xs font-bold uppercase tracking-wider">
              {t.workshopRepairs}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {language === "en" ? "Certified Master Rebuild Center" : "مركز إعادة البناء والتعمير المعتمد"}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.workshopRepairsDesc}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 space-y-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900 font-heading">
              Zero-Hour Factory Standard Rebuilding
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              At our climate-controlled rebuild facilities in Baghdad, engines undergo complete disassembly, high-pressure ultrasonic chemical cleaning, non-destructive crack detection (NDT), line boring, crankshaft grinding, and precision assembly back to factory tolerances.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every rebuilt Cummins engine is tested on an automated dyno cell to simulate 100% full continuous load conditions before delivery to the customer.
            </p>
            <div className="pt-2">
              <button
                onClick={() => openQuote()}
                className="px-6 py-3 bg-cummins-red text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-cummins-red-dark transition-colors shadow-lg shadow-red-600/20"
              >
                Inquire About Engine Rebuild
              </button>
            </div>
          </div>

          <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <Image
              src="/uploads/2023/05/engine-technician-shop-800.jpg"
              alt="Engine rebuilding shop"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
