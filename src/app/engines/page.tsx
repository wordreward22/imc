"use client";

import React from "react";
import Image from "next/image";
import { Gauge, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

export default function EnginesPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/engine-closeup-banner.jpg"
            alt="Cummins Engines"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E2231B]/20 border border-[#E2231B]/40 text-[#E2231B] text-xs font-bold uppercase tracking-wider">
              {language === "en" ? "Cummins Authorized Distributer" : "الموزع المعتمد لكومنز"}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {t.engines}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "Cummins Inc. is a global leader in the design, manufacturing, and distribution of diesel and natural gas engines, power generation systems, and related technologies."
                : language === "ar"
                ? "تعد شركة كومنز رائدة عالمياً في تصميم وتصنيع وتوزيع محركات الديزل والغاز الطبيعي وأنظمة توليد الطاقة والتقنيات المرتبطة بها."
                : "کۆمپانیای کۆمنز سەرکردەیەکی جیهانییە لە دیزاین، دروستکردن و دابەشکردنی بزوێنەری دیزڵ و غازی سروشتی."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* Main Narrative & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E2231B]">
              {language === "en" ? "Best Engines in the Field" : "أفضل المحركات في الميدان"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading">
              {language === "en" ? "Cummins Engines" : "محركات كومنز"}
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {language === "en"
                ? "Cummins is renowned for its commitment to innovation, quality, and reliability in the engine industry. The company's engines power a wide range of applications, including heavy-duty trucks, buses, construction equipment, marine vessels, agricultural machinery, and power generation systems. Cummins engines are known for their performance, fuel efficiency, and durability, making them a trusted choice for customers worldwide."
                : language === "ar"
                ? "تشتهر كومنز بالتزامها بالابتكار والجودة والموثوقية في صناعة المحركات. تشغل محركات الشركة مجموعة واسعة من التطبيقات بما في ذلك الشاحنات الثقيلة، الحافلات، معدات البناء، السفن البحرية، الآلات الزراعية، وأنظمة توليد الطاقة. وتعرف محركات كومنز بأدائها وكفاءتها في استهلاك الوقود ومتانتها، مما يجعلها الخيار الموثوق للعملاء حول العالم."
                : "کۆمنز ناسراوە بە پابەندبوونی بە داهێنان، کوالێتی و باوەڕپێکراوی لە پیشەسازی بزوێنەردا."}
            </p>
            <div className="pt-2">
              <button
                onClick={() => openQuote()}
                className="px-6 py-3 bg-[#E2231B] hover:bg-[#9E0202] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-md"
              >
                {t.getQuote}
              </button>
            </div>
          </div>

          <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
            <Image
              src="/uploads/2023/05/engine-closeup-banner.jpg"
              alt="Cummins Engine"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Core Strengths & After Sales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Core Strengths */}
          <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E2231B] flex items-center justify-center">
              <Gauge className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 font-heading">
              {language === "en" ? "Core Strengths" : "نقاط القوة الأساسية"}
            </h3>
            <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
              <p>
                {language === "en"
                  ? "One of Cummins' core strengths lies in its extensive engineering expertise and technological advancements."
                  : language === "ar"
                  ? "تكمن إحدى نقاط القوة الأساسية لشركة كومنز في خبرتها الهندسية الواسعة وتقدمها التكنولوجي المستمر."
                  : "یەکێک لە خاڵە بەهێزەکانی کۆمنز بریتییە لە شارەزایی فراوانی ئەندازیاری و پێشکەوتنی تەکنەلۆژی."}
              </p>
              <p>
                {language === "en"
                  ? "Cummins invests heavily in research and development to continually enhance its engine designs, reduce emissions, and improve overall efficiency."
                  : language === "ar"
                  ? "تستثمر كومنز بشكل كبير في البحث والتطوير لتعزيز تصاميم محركاتها باستمرار، وتقليل الانبعاثات، وتحسين الكفاءة العامة."
                  : "کۆمنز وەبەرهێنانی زۆر دەکات لە توێژینەوە و پەرەپێدان بۆ باشترکردنی دیزاین و کەمکردنەوەی دەردانی گازە زیانبەخشەکان."}
              </p>
              <p>
                {language === "en"
                  ? "Cummins engines comply with stringent environmental regulations, such as EPA and Euro emissions standards, demonstrating its dedication to sustainable solutions."
                  : language === "ar"
                  ? "تتوافق محركات كومنز مع اللوائح البيئية الصارمة، مثل معايير انبعاثات EPA و Euro، مما يوضح تفانيها في الحلول المستدامة."
                  : "بزوێنەرەکانی کۆمنز پابەندن بە توندترین ستانداردە ژینگەییەکان."}
              </p>
            </div>
          </div>

          {/* After Sales */}
          <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#111111] text-white flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 font-heading">
              {language === "en" ? "After Sales Support" : "خدمات ما بعد البيع"}
            </h3>
            <div className="space-y-3 text-neutral-600 text-sm leading-relaxed">
              <p>
                {language === "en"
                  ? "In addition to engines, Cummins offers a comprehensive range of services and aftermarket support. This includes maintenance, repair, and overhaul services, genuine parts supply, technical support, and training programs to ensure optimal performance and longevity of its engines throughout their lifecycle."
                  : language === "ar"
                  ? "بالإضافة إلى المحركات، تقدم كومنز مجموعة شاملة من الخدمات والدعم بعد البيع. ويشمل ذلك خدمات الصيانة والإصلاح والتجديد، وتوريد قطع الغيار الأصلية، والدعم الفني، وبرامج التدريب لضمان الأداء الأمثل وطول عمر محركاتها طوال دورة حياتها."
                  : "جگە لە بزوێنەر، کۆمنز خزمەتگوزاری تەواوی دوای فرۆشتن پێشکەش دەکات وەک چاککردنەوە و پارچەی یەدەگی ئەسڵی."}
              </p>
              <p>
                {language === "en"
                  ? "Cummins' global presence is extensive, with a network of manufacturing facilities, sales offices, and service centers spanning over 190 countries."
                  : language === "ar"
                  ? "يمتد الحضور العالمي لشركة كومنز عبر شبكة واسعة من مرافق التصنيع ومكاتب المبيعات ومراكز الخدمة في أكثر من 190 دولة."
                  : "تۆڕی جیهانی کۆمنز زیاتر لە 190 وڵات دەگرێتەوە."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
