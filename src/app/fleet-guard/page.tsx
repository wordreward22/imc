"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, TrendingUp, Layers, Lightbulb } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

export default function FleetGuardPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  const reasons = [
    {
      icon: ShieldCheck,
      title: language === "en" ? "Reliable Quality You Can Rely On" : "جودة معتمدة يمكنك الاعتماد عليها",
      desc: language === "en"
        ? "Fleetguard filters are meticulously designed and engineered to deliver unparalleled protection that not only meets but exceeds OEM standards in terms of quality and performance."
        : "تم تصميم فلاتر فليت جارد وهندستها بدقة لتوفير حماية لا مثيل لها تلبي معايير الجودة والأداء وتتجاوزها.",
    },
    {
      icon: TrendingUp,
      title: language === "en" ? "Maximize Cost Savings in the Long Run" : "أقصى توفير في التكاليف على المدى الطويل",
      desc: language === "en"
        ? "By keeping your engines running efficiently and optimizing fuel consumption, Fleetguard filters provide a significant return on investment. Our customers have saved millions in fuel costs while simultaneously reducing their environmental footprint."
        : "من خلال الحفاظ على تشغيل محركاتك بكفاءة وتحسين استهلاك الوقود، توفر فلاتر فليت جارد عائداً كبيراً على الاستثمار وتوفر تكاليف الوقود.",
    },
    {
      icon: Layers,
      title: language === "en" ? "Comprehensive Solutions Under One Roof" : "حلول شاملة تحت سقف واحد",
      desc: language === "en"
        ? "As the leading provider in the heavy-duty industry, Fleetguard offers an extensive range of filters and coolants. Our commitment to being a one-stop shop ensures that we can support all your equipment maintenance needs, providing convenience and peace of mind."
        : "باعتبارها المزود الرائد في صناعة المعدات الثقيلة، تقدم فليت جارد مجموعة شاملة من الفلاتر وسوائل التبريد لتلبية جميع احتياجات الصيانة.",
    },
    {
      icon: Lightbulb,
      title: language === "en" ? "Innovation" : "الابتكار التكنولوجي",
      desc: language === "en"
        ? "Fleetguard filters are at the forefront of technological advancements in filtration. From our cutting-edge NanoNet filter media to the groundbreaking FleetguardFIT ® filtration performance monitoring system, our innovative solutions are designed to simplify your operations and enhance productivity. With a rich history dating back to 1958, our products undergo rigorous testing both in the lab and in real-world applications."
        : "تقف فلاتر فليت جارد في طليعة التطورات التكنولوجية في مجال الترشيح بفضل وسائط NanoNet ونظام FleetguardFIT المبتكر.",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/engine-closeup-banner.jpg"
            alt="Fleetguard Filtration"
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
              Fleetguard
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "Fleetguard offers a full line of filters specifically engineered for a wide range of systems. With advanced design and high quality performance, Fleetguard heavy duty filters give customers the ultimate protection for all of their equipment."
                : "تقدم فليت جارد خطاً كاملاً من الفلاتر المصممة هندسياً خصيصاً لمجموعة واسعة من الأنظمة لحماية المعدات بأعلى أداء."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* Why Choose Fleetguard Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
            {language === "en" ? "Filtration Excellence" : "تميز الفلاتر"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading">
            {language === "en" ? "Why Choose Fleetguard" : "لماذا تختار فليت جارد"}
          </h2>
          <div className="w-12 h-1 bg-[#E2231B] mx-auto rounded-full mt-2" />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={i} className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E2231B] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 font-heading">{r.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Closing Narrative & Quote Box */}
        <div className="bg-[#111111] text-white rounded-2xl p-8 sm:p-12 border border-neutral-800 space-y-5">
          <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
            {language === "en" ? "Trusted Filtration Partner" : "شريك الترشيح الموثوق"}
          </span>
          <h3 className="text-2xl font-bold font-heading text-white">
            {language === "en" ? "Request A Quote" : "طلب عرض سعر"}
          </h3>
          <p className="text-neutral-300 text-sm leading-relaxed max-w-3xl">
            {language === "en"
              ? "Rest assured that by choosing Fleetguard, you are investing in a trusted partner that delivers uncompromising quality, cost savings, technological advancements, and comprehensive solutions tailored to your business requirements."
              : "كن على ثقة تامة بأنه من خلال اختيار فليت جارد، فإنك تستثمر في شريك موثوق يقدم جودة لا هوادة فيها، وتوفيراً في التكاليف، وحلولاً شاملة مصممة خصيصاً لمتطلبات عملك."}
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
      </div>
    </div>
  );
}
