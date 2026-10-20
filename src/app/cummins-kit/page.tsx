"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, ChevronRight, Play, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useQuote } from "@/context/QuoteContext";
import { subpageTranslations } from "@/data/subpageTranslations";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CircularFeatureBlock } from "@/components/subpage/CircularFeatureBlock";
import { MediaFeatureList } from "@/components/subpage/MediaFeatureList";
import { AdvantageCardsGrid } from "@/components/subpage/AdvantageCardsGrid";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";
import { VideoModal } from "@/components/subpage/VideoModal";

export default function CumminsKitPage() {
  const { language, isRtl } = useLanguage();
  const { openQuote } = useQuote();
  const t = subpageTranslations[language].cumminsKit;

  const [videoOpen, setVideoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="bg-white min-h-screen pb-28">
      {/* 1. Page Hero Banner */}
      <SubpageHero
        subtitle={t.hero.subtitle}
        title={t.hero.title}
        accentWord={t.hero.accentWord}
        watermark={t.hero.watermark}
        bgImage="/uploads/2023/04/slider-img-1-1.jpg"
      />

      {/* 2. Section 1: Pre-Packaged Kits Grid */}
      <section className="py-16 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
                {t.packagesTag}
              </span>
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                <path d="M0 2H24" stroke="#E2231B" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M6 6H24" stroke="#E2231B" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M12 10H24" stroke="#E2231B" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-heading leading-tight uppercase">
              {t.packagesTitle} <span className="text-[#E2231B]">{t.packagesAccent}</span>
            </h2>
            <div className="w-16 h-1 bg-[#E2231B] mx-auto rounded-full mt-3" />
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed pt-2">
              {t.packagesIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.kits.map((k, idx) => (
              <div
                key={idx}
                className="bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-neutral-200/90 shadow-sm hover:shadow-md transition-shadow duration-200 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E2231B]">
                    {k.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#E2231B] text-white flex items-center justify-center font-black text-sm">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold font-heading text-neutral-900">
                  {k.name}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {k.desc}
                </p>
                <div className="pt-2 border-t border-neutral-200/80 text-xs font-semibold text-neutral-700">
                  {k.includes}
                </div>
              </div>
            ))}
          </div>

          {/* Video CTA Button */}
          <div className="text-center pt-10">
            <button
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#E2231B] hover:bg-[#9E0202] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-600/20 group"
            >
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 fill-current text-white translate-x-0.5" />
              </span>
              <span>{t.circular.buttonText || "Watch Video"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Section 2: Circular Feature Block */}
      <CircularFeatureBlock
        subtitle={t.circular.subtitle}
        title={t.circular.title}
        accentWord={t.circular.accentWord}
        paragraphs={t.circular.paragraphs}
        image="/uploads/2023/04/2pj92mb.jpg"
        badgeTitle={t.circular.badgeTitle}
        badgeText={t.circular.badgeText}
        buttonText={t.circular.buttonText}
        videoUrl="https://www.youtube.com/watch?v=Pd1LYnbpP1k"
      />

      {/* 4. Section 3: There is a Difference Media Feature Block */}
      <MediaFeatureList
        title={t.media.title}
        accentWord={t.media.accentWord}
        intro={t.media.intro}
        image="/uploads/2023/05/cummins.jpeg"
        items={t.media.items}
      />

      {/* 5. Section 4: The Risk of using Non-Genuine Parts (6 Cards Grid) */}
      <AdvantageCardsGrid
        subtitle={t.risks.subtitle}
        title={t.risks.title}
        accentWord={t.risks.accentWord}
        watermark={t.risks.watermark}
        cards={t.risks.cards}
      />

      {/* 6. Section 5: The Genuine Difference CTA Banner */}
      <CtaStatsBanner
        title={t.cta.title}
        desc={t.cta.desc}
        buttonText={t.cta.buttonText}
        bgImage="/uploads/2023/04/slider-img-1-1.jpg"
        stats={t.cta.stats}
      />

      {/* 7. Section 6: Technical Details & Comparison Tabs */}
      {t.techTabs && t.techTabs.tabs && t.techTabs.tabs.length > 0 && (
        <section className="py-20 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
                {t.techTabs.subtitle}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 font-heading">
                {t.techTabs.title} <span className="text-[#E2231B]">{t.techTabs.accentWord}</span>
              </h2>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 border-b border-neutral-200 pb-4">
              {t.techTabs.tabs.map((tab, idx) => (
                <button
                  key={tab.id || idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === idx
                      ? "bg-[#E2231B] text-white shadow-md"
                      : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Active Tab Content */}
            {t.techTabs.tabs[activeTab] && (
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-sm space-y-4">
                <h3 className="text-2xl font-bold text-neutral-900 font-heading">
                  {t.techTabs.tabs[activeTab].title}
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {t.techTabs.tabs[activeTab].desc}
                </p>

                {t.techTabs.tabs[activeTab].points && (
                  <ul className="space-y-2 pt-2">
                    {t.techTabs.tabs[activeTab].points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-sm text-neutral-700">
                        <CheckCircle2 className="w-5 h-5 text-[#E2231B] flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-neutral-400">
                    Cummins Genuine Engineering Standard
                  </span>
                  <button
                    onClick={() => openQuote()}
                    className="text-xs font-bold text-[#E2231B] hover:text-[#9E0202] uppercase tracking-wider flex items-center gap-1"
                  >
                    <span>{t.cta.buttonText}</span>
                    <ChevronRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Video Modal */}
      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=Pd1LYnbpP1k"
      />
    </div>
  );
}
