"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Target, Eye, Heart, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const AboutSection: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const t = translations[language];

  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">("mission");

  const tabContent = {
    mission: {
      icon: Target,
      title: t.mission,
      desc: t.missionDesc,
    },
    vision: {
      icon: Eye,
      title: t.vision,
      desc: t.visionDesc,
    },
    values: {
      icon: Heart,
      title: t.values,
      desc: t.valuesDesc,
    },
  };

  const CurrentIcon = tabContent[activeTab].icon;

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Media with Floating Badge */}
          <div className="relative">
            <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/uploads/2023/03/WhatsApp-Image-2023-02-21-at-1.12.54-PM-650x650.jpeg"
                alt="IMC Cummins Workshop Iraq"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            {/* Official Cummins Watermark Badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 z-20">
              <div className="relative w-16 h-12">
                <Image
                  src="/uploads/2023/02/CUMMINS-PNG.png"
                  alt="Cummins Official"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="border-l border-slate-200 pl-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-cummins-red">
                  Official Seller
                </p>
                <p className="text-xs font-extrabold text-slate-900">
                  {t.customerDriven}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Tabs */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/80 text-cummins-red text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t.badgeTitle}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading leading-tight">
                {t.overviewTitle}
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {t.overviewDesc}
            </p>

            {/* Tabs: Mission, Vision, Values */}
            <div className="pt-2">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
                {(["mission", "vision", "values"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                      activeTab === tab
                        ? "bg-cummins-red text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                    }`}
                  >
                    {tabContent[tab].title}
                  </button>
                ))}
              </div>

              <div className="mt-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm flex items-start gap-4 animate-fadeIn">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-cummins-red flex items-center justify-center flex-shrink-0">
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase">
                    {tabContent[activeTab].title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    {tabContent[activeTab].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Read More Link */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cummins-red hover:text-cummins-red-dark transition-colors"
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
