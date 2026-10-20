"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CircularFeatureBlock } from "@/components/subpage/CircularFeatureBlock";
import { VideoModal } from "@/components/subpage/VideoModal";
import { getSourceParagraphs } from "@/components/subpage/SourceCopyPage";
import { useLanguage } from "@/context/LanguageContext";
import { subpageTranslations } from "@/data/subpageTranslations";
import {
  ShieldCheck,
  Award,
  Play,
  Users,
  Building2,
  Calendar,
  ThumbsUp,
} from "lucide-react";

export default function AboutPage() {
  const { language, isRtl } = useLanguage();
  const t = subpageTranslations[language].about;
  const aboutParagraphs = getSourceParagraphs(language, "about");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const valueIcons = [ThumbsUp, Award, ShieldCheck];
  const arabicValueTitles = ["الموثوقية", "الجودة", "رضا العملاء"];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Subpage Hero */}
      <SubpageHero
        subtitle={t.hero.subtitle}
        title={t.hero.title}
        accentWord={t.hero.accentWord}
        watermark={t.hero.watermark}
        bgImage="/uploads/2023/05/engine-technician-shop-800.jpg"
      />

      {/* 2. Mission & Vision Circular Feature Block */}
      <div id="mission" className="scroll-mt-24">
      <CircularFeatureBlock
        subtitle={t.circular.subtitle}
        title={t.circular.title}
        accentWord={t.circular.accentWord}
        paragraphs={aboutParagraphs.length ? aboutParagraphs.slice(0, 2) : t.circular.paragraphs}
        image="/uploads/2023/03/WhatsApp-Image-2023-02-21-at-1.12.54-PM-800x530.jpeg"
        badgeTitle={t.circular.badgeTitle}
        badgeText={t.circular.badgeText}
      />
      </div>

      {/* 3. Our Values Section */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden border-y border-neutral-200">
        {/* Subtle Watermark */}
        <div className="absolute top-8 inset-x-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
          <span className="text-[120px] sm:text-[180px] font-black uppercase text-neutral-900 tracking-widest font-heading">
            {t.values.watermark}
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
                {t.values.subtitle}
              </span>
              <svg
                width="24"
                height="12"
                viewBox="0 0 24 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 2H24" stroke="#E2231B" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M6 6H24" stroke="#E2231B" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M12 10H24" stroke="#E2231B" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-heading uppercase">
              {t.values.title} <span className="text-[#E2231B]">{t.values.accentWord}</span>
            </h2>
            <div className="w-16 h-1 bg-[#E2231B] mx-auto rounded-full mt-3" />
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {t.values.items.map((val, idx) => {
              const IconComponent = valueIcons[idx % valueIcons.length];
              return (
                <div
                  key={idx}
                  className="w-full md:w-[calc(33.333%-22px)] max-w-md md:max-w-none bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-200 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E2231B] flex items-center justify-center border border-red-100">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 font-heading">
                    {language === "ar" ? arabicValueTitles[idx] : val.title}
                  </h3>
                  {language === "ku" && <p className="text-neutral-600 text-sm leading-relaxed">{val.desc}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Cummins History & Cummins Values */}
      <section id="cummins-history" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Image with Play Trigger */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-80 sm:h-96 md:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-neutral-100 bg-neutral-900">
                <Image
                  src="/uploads/2023/05/engine-closeup-banner-600x473.jpg"
                  alt="Cummins History"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating Play Video Badge */}
                <button
                  onClick={() => setActiveVideo("https://www.youtube.com/watch?v=B_zooNrioCA")}
                  className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-4 group text-left transition-all hover:bg-black/90"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E2231B] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-lg shadow-red-600/30">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                      {t.cummins.videoBadge}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white uppercase font-heading">
                      {t.cummins.videoSubtitle}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
                  {t.cummins.subtitle}
                </span>
                <div className="w-8 h-0.5 bg-[#E2231B]" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-heading uppercase">
                {t.cummins.title} <span className="text-[#E2231B]">{t.cummins.accentWord}</span>
              </h2>

              <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 font-heading mb-1">
                    {t.cummins.historyTitle}
                  </h3>
                  <p>{aboutParagraphs[2] ?? t.cummins.historyDesc}</p>
                </div>

                <div className="pt-2 border-t border-neutral-100">
                  <h3 className="text-lg font-bold text-neutral-900 font-heading mb-1">
                    {t.cummins.valuesTitle}
                  </h3>
                  <p>{aboutParagraphs[3] ?? t.cummins.valuesDesc}</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveVideo("https://www.youtube.com/watch?v=B_zooNrioCA")}
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#E2231B] hover:bg-[#9E0202] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-600/20 group"
                >
                  <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                  <span>{t.cummins.watchButton}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Alkan Holding History */}
      <section id="alkan-history" className="py-20 bg-[#111111] text-white relative overflow-hidden border-t border-neutral-800 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
                  {t.alkan.subtitle}
                </span>
                <div className="w-8 h-0.5 bg-[#E2231B]" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading uppercase">
                {t.alkan.title} <span className="text-[#E2231B]">{t.alkan.accentWord}</span>
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                {aboutParagraphs[4] ?? t.alkan.p1}
              </p>

              {!aboutParagraphs.length && <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">{t.alkan.p2}</p>}

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setActiveVideo("https://www.youtube.com/watch?v=QrZOzLDVVAs")}
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#E2231B] hover:bg-[#9E0202] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-600/30 group"
                >
                  <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                  <span>{t.alkan.videoButton}</span>
                </button>
              </div>
            </div>

            {/* Right Visual Card with Logo */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/60 flex items-center justify-center p-8">
                <div className="relative w-48 h-20">
                  <Image
                    src="/uploads/2023/05/holding-White-1.png"
                    alt="Alkan Holding"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden border border-neutral-800 shadow-xl">
                <Image
                  src="/uploads/2023/05/imc-iraq-600x473.jpg"
                  alt="IMC Iraq Facilities"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E2231B] block">
                    {t.alkan.badgeTag}
                  </span>
                  <span className="text-sm font-bold text-white uppercase font-heading">
                    {t.alkan.badgeTitle}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Authentic Counter Stats Section */}
      <section className="py-16 bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-[#111111] rounded-2xl p-8 border border-neutral-800 text-center space-y-2 hover:border-[#E2231B]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#E2231B]/10 text-[#E2231B] flex items-center justify-center mx-auto mb-4 border border-[#E2231B]/20">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-heading">
                {t.counters.c1Number}
              </div>
              <div className="text-neutral-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                {t.counters.c1Label}
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-[#111111] rounded-2xl p-8 border border-neutral-800 text-center space-y-2 hover:border-[#E2231B]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#E2231B]/10 text-[#E2231B] flex items-center justify-center mx-auto mb-4 border border-[#E2231B]/20">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-heading">
                {t.counters.c2Number}
              </div>
              <div className="text-neutral-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                {t.counters.c2Label}
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-[#111111] rounded-2xl p-8 border border-neutral-800 text-center space-y-2 hover:border-[#E2231B]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#E2231B]/10 text-[#E2231B] flex items-center justify-center mx-auto mb-4 border border-[#E2231B]/20">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-heading">
                {t.counters.c3Number}
              </div>
              <div className="text-neutral-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                {t.counters.c3Label}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal
          isOpen={!!activeVideo}
          videoUrl={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </div>
  );
}
