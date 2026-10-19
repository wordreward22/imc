"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, ArrowRight, Zap, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

export default function CumminsKitPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  const benefits = [
    {
      title: "100% Genuine Cummins Guarantee",
      desc: "Every part is sourced directly from Cummins global manufacturing plants with official holographic authenticity labels.",
    },
    {
      title: "Exact Engineering Tolerances",
      desc: "Non-genuine parts deviate in dimensions and metallurgy, leading to premature cylinder scoring, turbo failures, and excessive oil consumption.",
    },
    {
      title: "Full Factory Warranty Protection",
      desc: "Using Genuine Cummins Parts protects your equipment under full manufacturer warranty terms across Iraq.",
    },
    {
      title: "Complete Overhaul Kits",
      desc: "Pre-packaged in-frame and out-of-frame overhaul kits containing matched pistons, rings, bearings, and gaskets.",
    },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/uploads/2023/05/genuine-parts-box-800x400-1.jpg"
            alt="Cummins Genuine Parts"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cummins-red/20 border border-cummins-red/40 text-cummins-red text-xs font-bold uppercase tracking-wider">
              {t.cumminsKitTitle}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {language === "en" ? "Genuine Cummins Parts & Kits" : "قطع غيار كومنز الأصلية وأطقم الصيانة"}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {t.cumminsKitDesc}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 space-y-16">
        {/* Main Content Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100/80 text-cummins-red rounded-full text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Authenticity First</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading">
              Why Compromise Your Investment With Counterfeit Parts?
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Non-genuine suppliers copy the look of Cummins parts at a discounted initial price. However, tests prove that non-genuine injectors, filters, and turbochargers cause fuel inefficiency, unexpected downtime, and catastrophic engine failure.
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed">
              At IMC, we stock tens of thousands of fast-moving line items at our warehouses in Baghdad and Basra, ready for same-day dispatch anywhere in Iraq.
            </p>

            <button
              onClick={() => openQuote()}
              className="px-6 py-3.5 bg-cummins-red hover:bg-cummins-red-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/20 transition-all flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              <span>Request Parts Quotation</span>
            </button>
          </div>

          <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-neutral-100">
            <Image
              src="/uploads/2023/05/genuine-parts-box-800x400-1.jpg"
              alt="Genuine Cummins Parts Box"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Benefits Grid */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl font-extrabold text-neutral-900 font-heading">
              The Genuine Cummins Advantage
            </h3>
            <div className="w-12 h-1 bg-cummins-red mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-cummins-red flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-neutral-900 font-heading">{b.title}</h4>
                  <p className="text-neutral-600 text-xs sm:text-sm mt-1 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
