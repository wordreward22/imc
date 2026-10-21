"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import homeSource from "@/data/homeSource.json";

export const AboutSection: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const t = translations[language];
  const source = language === "ku" ? null : homeSource[language];

  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");

  const tabContent = {
    mission: {
      title: t.mission,
      desc: source?.mission ?? t.missionDesc,
    },
    vision: {
      title: t.vision,
      desc: source?.vision ?? t.visionDesc,
    },
    values: {
      title: t.values,
      desc: source?.values ?? t.valuesDesc,
    },
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Media with Authentic Badge */}
          <div className="relative">
            <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/uploads/2023/05/imc-slider-2.jpeg"
                alt="Cummins generators in a power facility"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Red Circle Counter Badge: SINCE 2021 */}
            <div className="absolute -top-6 -left-4 sm:left-4 w-24 h-24 rounded-full bg-gradient-to-br from-[#E2231B] to-[#9E0202] text-white flex flex-col items-center justify-center shadow-xl border-4 border-white z-20">
              <span className="text-[10px] font-bold tracking-widest uppercase">
                {language === "en" ? "SINCE" : language === "ar" ? "منذ" : "لە"}
              </span>
              <span className="text-xl font-black font-heading leading-none mt-0.5">
                2021
              </span>
            </div>

            {/* Official Cummins Watermark Badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white p-4 rounded-2xl shadow-lg border border-neutral-200 flex items-center gap-4 z-20">
              <div className="relative w-16 h-12">
                <Image
                  src="/uploads/2023/02/CUMMINS-PNG.png"
                  alt="Cummins Official"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="border-l border-neutral-200 pl-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#E2231B]">
                  Cummins Authorized Seller.
                </p>
                <p className="text-xs font-bold text-neutral-900">
                  {t.customerDriven}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Tabs */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-[#E2231B] text-sm font-bold tracking-wider uppercase font-heading">
                  {language === "en" ? "IMC Iraq" : language === "ar" ? "أى إم سى العراق" : "ئای ئێم سی عێراق"}
                </span>
                <div className="w-12 h-[2px] bg-black" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight font-heading leading-tight">
                {language === "en" ? (
                  <>Powers <span className="text-[#E2231B]">Industries</span> Around the World</>
                ) : language === "ar" ? (
                  <>نمد <span className="text-[#E2231B]">صناعات العالم</span> بالطاقة</>
                ) : (
                  <>پشتیوانی <span className="text-[#E2231B]">پیشەسازییەکان</span> لە جیهاندا</>
                )}
              </h2>
            </div>

            <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
              {source?.overview ?? t.overviewDesc}
            </p>

            {/* Tabs: Mission, Vision, Values */}
            <div className="pt-2">
              <div className="flex items-center gap-8 border-b border-neutral-200">
                {(["mission", "vision", "values"] as const).map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 text-sm sm:text-base font-bold font-heading transition-colors relative ${
                        isActive ? "text-[#E2231B]" : "text-neutral-700 hover:text-[#E2231B]"
                      }`}
                    >
                      {tabContent[tab].title}
                      {isActive && (
                        <div className="absolute bottom-0 inset-x-0 h-[2.5px] bg-[#E2231B]" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="pt-5 text-[#666666] text-sm sm:text-base leading-relaxed">
                {tabContent[activeTab].desc}
              </div>
            </div>

            {/* Read More Link */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E2231B] hover:text-[#9E0202] transition-colors"
              >
                <span>{t.aboutUs}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? "rotate-180" : ""}`} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
