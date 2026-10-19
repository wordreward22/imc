"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSlider } from "@/components/home/HeroSlider";
import { FeatureCards } from "@/components/home/FeatureCards";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ProductCard } from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

export default function HomePage() {
  const { language, isRtl } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  const featured = getFeaturedProducts(6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Revolution Slider */}
      <HeroSlider />

      {/* 2. Feature Cards (Power Generation, Cummins Kit, IMC Services) */}
      <FeatureCards />

      {/* 3. Company Overview & Mission/Vision/Values */}
      <div className="mt-8">
        <AboutSection />
      </div>

      {/* 4. Featured Cummins Generators Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#E2231B] text-xs sm:text-sm font-bold tracking-wider uppercase font-heading">
                  {language === "en" ? "Commercial & Industrial Power" : language === "ar" ? "طاقة تجارية وصناعية" : "وزەی بازرگانی و پیشەسازی"}
                </span>
                <div className="w-10 h-[2px] bg-[#E2231B]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-heading">
                {t.catalogTitle}
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                {t.catalogSubtitle}
              </p>
            </div>

            <Link
              href="/power-generation"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-[#E2231B] hover:text-white text-slate-900 text-xs font-bold uppercase tracking-wider transition-colors duration-200 shadow-sm self-start md:self-auto"
            >
              <span>{language === "en" ? "View All 27 Generators" : language === "ar" ? "عرض جميع المولدات (27 موديل)" : "هەموو مۆلیدەکان ببینە"}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? "rotate-180" : ""}`} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core Services Grid */}
      <ServicesSection />

      {/* 6. FAQ Accordion */}
      <FaqSection />

      {/* 7. Bottom High-Impact CTA Banner */}
      <section className="py-16 bg-[#0F172A] text-white relative border-t-4 border-[#E2231B]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              {language === "en"
                ? "Looking for an Engineered Power Solution?"
                : language === "ar"
                ? "تبحث عن حلول طاقة هندسية متكاملة؟"
                : "بەدوای چارەسەری ئەندازیاری وزەدا دەگەڕێیت؟"}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              {language === "en"
                ? "Get in touch with IMC Iraq today for customized Cummins generator sizing, genuine spare parts, and certified field support."
                : language === "ar"
                ? "تواصل مع شركة IMC العراق اليوم للحصول على دراسة أحمال المولدات، وقطع الغيار الأصلية، والدعم الميداني المعتمد."
                : "ئەمڕۆ پەیوەندی بە ئای ئێم سی عێراقەوە بکە بۆ ڕاوێژکاری تەکنیکی و داواکردنی نرخ."}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 flex-shrink-0">
            <button
              onClick={() => openQuote()}
              className="px-7 py-3.5 bg-[#E2231B] text-white hover:bg-[#9E0202] font-bold text-xs uppercase tracking-wider shadow-md transition-colors flex items-center justify-center"
            >
              <span>{t.getQuote}</span>
            </button>
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              {t.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
