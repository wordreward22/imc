"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Target, Eye, Heart, Award, Building, History } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/engine-technician-shop-800.jpg"
            alt="About IMC Iraq"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cummins-red/20 border border-cummins-red/40 text-cummins-red text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.aboutUs}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {language === "en"
                ? "About IMC Iraq"
                : language === "ar"
                ? "عن شركة IMC العراق"
                : "دەربارەی ئای ئێم سی عێراق"}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {t.badgeTitle}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-20">
        {/* Company Narrative & Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-cummins-red">
              {t.overviewTitle}
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 font-heading">
              {language === "en"
                ? "Exclusive Authorized Cummins Distributor in Iraq"
                : language === "ar"
                ? "الموزع الحصري المعتمد لمنتجات كومنز في العراق"
                : "تاکە بریکاری ڕێگەپێدراوی کۆمنز لە عێراق"}
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {t.overviewDesc}
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {language === "en"
                ? "Operating through modern service centers in Baghdad and Basra, IMC delivers comprehensive support across oil & gas, telecommunications, government infrastructure, healthcare, and industrial sectors."
                : language === "ar"
                ? "من خلال مراكز الخدمة الحديثة في بغداد والبصرة، تقدم IMC دعماً شاملاً لقطاعات النفط والغاز، والاتصالات، والبنية التحتية، والمستشفيات، والمشاريع الصناعية الكبرى."
                : "لە ڕێگەی سەنتەرە پێشکەوتووەکانی لە بەغدا و بەسڕە، پشتگیری تەواوی کەرتە جیاوازەکان دەکات."}
            </p>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-neutral-100">
            <Image
              src="/uploads/2023/03/WhatsApp-Image-2023-02-21-at-1.12.54-PM-650x650.jpeg"
              alt="IMC Workshop"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mission, Vision, Values (id="mission") */}
        <div id="mission" className="scroll-mt-24 pt-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading">
              {t.missionVision}
            </h2>
            <div className="w-12 h-1 bg-cummins-red mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-cummins-red flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 font-heading">{t.mission}</h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">{t.missionDesc}</p>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#111111] text-white flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 font-heading">{t.vision}</h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">{t.visionDesc}</p>
            </div>

            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-red-100 text-cummins-red flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 font-heading">{t.values}</h3>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">{t.valuesDesc}</p>
            </div>
          </div>
        </div>

        {/* Cummins History (id="cummins-history") */}
        <div id="cummins-history" className="scroll-mt-24 pt-8 bg-neutral-50 rounded-3xl p-8 sm:p-12 border border-neutral-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-cummins-red font-bold text-xs uppercase tracking-wider">
                <History className="w-4 h-4" />
                <span>Over 100 Years of Engineering</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading">
                {t.cumminsHistory}
              </h2>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                Founded in 1919 in Columbus, Indiana, Cummins Inc. has grown into the global power leader. A Fortune 500 company designing, manufacturing, distributing, and servicing engines and power generation technologies worldwide.
              </p>
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                IMC brings this century-long legacy directly to Iraq, delivering factory-tested equipment, authentic warranty protection, and factory-trained engineering personnel.
              </p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
              <Image
                src="/uploads/2023/05/engine-closeup-banner.jpg"
                alt="Cummins Engine History"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Alkan Holding History (id="alkan-history") */}
        <div id="alkan-history" className="scroll-mt-24 pt-8 bg-[#111111] text-white rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-cummins-red font-bold text-xs uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>Regional Conglomerate</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {t.alkanHistory}
              </h2>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                As part of Alkan Holding, IMC benefits from decades of regional commercial strength, established supply chain logistics, and strategic investments across the Middle East and North Africa.
              </p>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                Our commitment to Iraq is long-term, investing heavily in state-of-the-art diagnostic facilities, mobile service fleets, and local engineering talent development.
              </p>
            </div>
            <div className="relative h-64 flex items-center justify-center p-8 bg-black/60 rounded-2xl border border-neutral-800">
              <div className="relative w-full h-32">
                <Image
                  src="/uploads/2021/11/alkan_logo_white.png"
                  alt="Alkan Holding"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
