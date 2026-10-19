"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Gauge, ShieldCheck, CheckCircle2, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

export default function EnginesPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  const series = [
    {
      name: "Cummins QSK Series",
      models: "QSK19, QSK23, QSK38, QSK50, QSK60, QSK78, QSK95",
      desc: "Quantum System heavy-duty engines engineered for mining, heavy oilfield pumping, marine propulsion, and continuous high-output power generation.",
    },
    {
      name: "Cummins KTA Series",
      models: "KTA19, KTA38, KTA50",
      desc: "The proven global mechanical workhorse. Unmatched durability in extreme temperatures and hostile operating conditions.",
    },
    {
      name: "Cummins B & C Series",
      models: "B3.3, 4BT, 6BT, 6CT, QSB, QSL",
      desc: "Compact inline 4 and 6 cylinder platforms offering high power-to-weight ratio and exceptional fuel efficiency.",
    },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen pb-24">
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/engine-closeup-banner.jpg"
            alt="Cummins Industrial Engines"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cummins-red/20 border border-cummins-red/40 text-cummins-red text-xs font-bold uppercase tracking-wider">
              {t.engines}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {language === "en" ? "Cummins Industrial Engines" : "محركات كومنز الصناعية المعتمدة"}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "Supplying new replacement engines, complete long blocks, and short blocks for industrial machinery, oil & gas, and marine vessels."
                : "توريد محركات جديدة كاملة ومجمعات المحركات المجهزة للمعدات الصناعية والنفطية والبحرية."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {series.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-md space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-cummins-red flex items-center justify-center">
                  <Gauge className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 font-heading">{s.name}</h3>
                <p className="text-xs font-bold text-cummins-red">{s.models}</p>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <button
                  onClick={() => openQuote()}
                  className="w-full py-2.5 bg-[#111111] hover:bg-cummins-red text-white text-xs font-bold uppercase rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>Inquire for Engine</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
