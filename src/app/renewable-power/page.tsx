"use client";

import React from "react";
import Image from "next/image";
import { Sun, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

export default function RenewablePowerPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  const sections = [
    {
      title: language === "en" ? "Customized Energy Solutions" : "حلول طاقة مخصصة",
      desc: language === "en"
        ? "At Our Group Energy we take pride in our ability to work diligently with all of our clients and parties to successfully create customized energy solutions that would reduce the dependence on traditional Energy while preserving our Environment."
        : "نحن نفخر بقدرتنا على العمل بجد واجتهاد مع جميع عملائنا وشركائنا لإنشاء حلول طاقة مخصصة تقلل الاعتماد على الطاقة التقليدية مع الحفاظ على بيئتنا.",
    },
    {
      title: language === "en" ? "For Accurate Solutions" : "حلول دقيقة لكافة القطاعات",
      desc: language === "en"
        ? "Our Group Energy has earned a good reputation for providing the best, most affordable energy solutions for all market segments including industrial, oil & gas, commercial, agricultural, military, telecommunications, marine and residential sectors."
        : "اكتسبت مجموعتنا سمعة مرموقة في تقديم أفضل حلول الطاقة وأكثرها ملاءمة لجميع قطاعات السوق بما في ذلك القطاعات الصناعية، النفط والغاز، التجارية، الزراعية، العسكرية، الاتصالات، البحرية والسكنية.",
    },
    {
      title: language === "en" ? "Best Tailor-made Energy" : "أفضل حلول الطاقة المصممة حسب الطلب",
      desc: language === "en"
        ? "Our Group Energy offer the best tailor-made energy solutions to meet any power requirements with the support from largest international energy companies."
        : "نقدم أفضل حلول الطاقة المصممة خصيصاً لتلبية أي متطلبات قدرة بدعم من أكبر شركات الطاقة العالمية.",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/imc-slider-1.jpeg"
            alt="Renewable Power"
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
              {t.renewablePower}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "Our Group Energy provides a turnkey project with cutting edge solar energy technology & Products providing consulting, energy auditing service, renewable energy production with various solutions Supported with full technical advice and specification services."
                : "تقدم مجموعتنا مشاريع متكاملة بتقنيات ومنتجات الطاقة الشمسية المتطورة مع خدمات الاستشارات وتدقيق الطاقة وإنتاج الطاقة المتجددة المدعومة بالاستشارات الفنية الدقيقة."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((sec, i) => (
            <div key={i} className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E2231B] flex items-center justify-center">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 font-heading">{sec.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{sec.desc}</p>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <button
                  onClick={() => openQuote()}
                  className="w-full py-2.5 bg-[#111111] hover:bg-[#E2231B] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
                >
                  {t.getQuote}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
