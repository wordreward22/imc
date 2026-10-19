"use client";

import React from "react";
import Image from "next/image";
import { Droplets, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

export default function OilsPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  const benefits = [
    {
      title: language === "en" ? "Unique Dispersive Polymer Technology" : "تقنية البوليمر المشتت الفريدة",
      desc: language === "en"
        ? "Unique dispersive polymer technology (DPT), with premium Group II base oil, provides advanced soot control, and cold start protection"
        : "توفر تقنية البوليمر المشتت الفريدة (DPT) مع زيت الأساس الممتاز من المجموعة الثانية تحكماً متقدماً في السخام وحماية فائقة عند التشغيل على البارد.",
    },
    {
      title: language === "en" ? "Valvetrain Wear Protection" : "حماية مجموعة الصمامات من التآكل",
      desc: language === "en"
        ? "Valvetrain wear protection and reduced oil filter restriction at high soot levels"
        : "حماية تآكل قطار الصمامات وتقليل انسداد فلتر الزيت عند المستويات العالية من السخام.",
    },
    {
      title: language === "en" ? "High Temperature Deposit Control" : "التحكم في الرواسب تحت درجات الحرارة العالية",
      desc: language === "en"
        ? "High temperature deposit control, including single and two-piece pistons, and ring/liner wear protection"
        : "التحكم في الرواسب في درجات الحرارة العالية، بما في ذلك المكابس المكونة من قطعة واحدة أو قطعتين، وحماية تآكل الحلقات وبطانة الأسطوانة.",
    },
    {
      title: language === "en" ? "Higher TBN Level and Retention" : "مستوى أعلى والاحتفاظ بالرقم القاعدي الكلي TBN",
      desc: language === "en"
        ? "Higher TBN level and TBN retention for long-life performance, while meeting all chemical limits"
        : "مستوى أعلى من TBN والاحتفاظ به لأداء طويل الأمد، مع تلبية جميع الحدود الكيميائية الصارمة.",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/engine-closeup-banner.jpg"
            alt="Valvoline Premium Blue Oil"
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
              {language === "en" ? "Valvoline Premium Blue Oil" : "زيوت فالفولين بريميوم بلو المعتمدة"}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "Valvoline's Premium Blue Engine Oils are designed to provide advanced lubricant performance in modern, emissions treatment equipped diesel engines, including all types of Exhaust Gas Recirculation (EGR) and Diesel Particulate Filters (DPF)."
                : "تم تصميم زيوت محركات فالفولين بريميوم بلو لتوفير أداء تشحيم متقدم في محركات الديزل الحديثة المجهزة بأنظمة معالجة الانبعاثات."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* Intro Overview */}
        <div className="bg-neutral-50 rounded-2xl p-8 sm:p-12 border border-neutral-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
                {language === "en" ? "Advanced Lubricant Technology" : "تكنولوجيا التزييت المتقدمة"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading">
                {language === "en" ? "Valvoline Premium Blue Oil" : "زيوت فالفولين بريميوم بلو"}
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {language === "en"
                  ? "Valvoline's Premium Blue Engine Oils are designed to provide advanced lubricant performance in modern, emissions treatment equipped diesel engines, including all types of Exhaust Gas Recirculation (EGR) and Diesel Particulate Filters (DPF). When used in conjunction with Ultra-Low Diesel Sulfur fuel, this product technology offers a long-life, extended drainage capability, balanced formulation which helps maximize engine durability and after-treatment cleanliness."
                  : "عند استخدامها مع وقود الديزل منخفض الكبريت، توفر تكنولوجيا هذه المنتجات عمراً طويلاً، وقدرة ممتدة لتصريف الزيت، وتركيبة متوازنة تساعد في تعظيم متانة المحرك ونظافة معالجة الانبعاثات."}
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

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
              <Image
                src="/uploads/2023/05/engine-closeup-banner.jpg"
                alt="Valvoline Oil"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Product Benefits */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
              {language === "en" ? "Engine Protection" : "حماية المحرك"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading">
              {language === "en" ? "Product Benefits" : "مزايا وفوائد المنتج"}
            </h2>
            <div className="w-12 h-1 bg-[#E2231B] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E2231B] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 font-heading">{b.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cummins Endorsement Box */}
        <div className="bg-[#111111] text-white rounded-2xl p-8 sm:p-12 border border-neutral-800 space-y-5">
          <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
            {language === "en" ? "Tested & Endorsed by Cummins" : "معتمد ومختبر من كومنز"}
          </span>
          <h3 className="text-2xl font-bold font-heading text-white">
            {language === "en" ? "Endorsed by Cummins Engineers" : "الزيت الموصى به حصرياً لمحركات كومنز"}
          </h3>
          <p className="text-neutral-300 text-sm leading-relaxed max-w-3xl">
            {language === "en"
              ? "Valvoline's Premium Blue Engine Oil is endorsed by Cummins and has been tested extensively by Cummins in stationary and EGR on-road engines, including engines powered by diesel, CNG, LNG, as well as engines equipped with DPFs. It is tested and approved against industry standard specifications such as SAE, TMC and CES."
              : "تم اعتماد زيت فالفولين بريميوم بلو من قبل كومنز واختباره على نطاق واسع في المحركات الثابتة ومحركات الطرق، بما في ذلك المحركات التي تعمل بالديزل والغاز الطبيعي المضغوط، وهو معتمد وفقاً لمعايير SAE و TMC و CES."}
          </p>
          <p className="text-neutral-400 text-xs leading-relaxed">
            {language === "en"
              ? "To learn more about Valvoline's Premium Blue Oils available for Cummins engines, please contact us."
              : "لمعرفة المزيد حول زيوت فالفولين بريميوم بلو المتوفرة لمحركات كومنز، يرجى التواصل معنا."}
          </p>
          <div className="pt-2">
            <button
              onClick={() => openQuote()}
              className="px-6 py-3 bg-[#E2231B] hover:bg-[#9E0202] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-md"
            >
              {language === "en" ? "Request A Quote" : "طلب عرض سعر"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
