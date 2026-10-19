"use client";

import React from "react";
import Image from "next/image";
import { Wrench, PhoneCall, ShieldCheck, CheckCircle2, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

export default function RepairsPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  const benefits = [
    {
      num: "1",
      title: language === "en" ? "Prompt Response, Anytime" : "استجابة فورية على مدار الساعة",
      desc: language === "en"
        ? "Our team of highly skilled technicians is available around the clock, ready to respond promptly to your service requests."
        : "فريقنا من الفنيين المهرة متواجد ومستعد دائماً للاستجابة السريعة لطلبات الخدمة والصيانة الطارئة في أي وقت.",
    },
    {
      num: "2",
      title: language === "en" ? "Expert Diagnosis for Swift Solutions" : "تشخيص خبير لحلول سريعة وفعالة",
      desc: language === "en"
        ? "Our technicians are certified by Cummins and possess in-depth knowledge and expertise in generator systems."
        : "فنيونا معتمدون رسمياً من شركة كومنز ويمتلكون معرفة تقنية عميقة في أنظمة المولدات الكهربائية ولوحات التحكم.",
    },
    {
      num: "3",
      title: language === "en" ? "On-Site Repairs for Minimum Disruption" : "إصلاحات ميدانية لتقليل تعطل الأعمال",
      desc: language === "en"
        ? "When it comes to generator repairs, time is of the essence.."
        : "عندما يتعلق الأمر بإصلاحات المولدات، فإن عامل الوقت حاسم لحماية أعمالك ومنشأتك من انقطاع التيار.",
    },
    {
      num: "4",
      title: language === "en" ? "Technical Support and Peace of Mind" : "دعم فني واستشارات متواصلة",
      desc: language === "en"
        ? "Our Field Service Option comes with comprehensive technical support, providing you with guidance, advice, and answers to your questions regarding generator operation, maintenance, and troubleshooting."
        : "يوفر خيار الخدمة الميدانية دعماً فنياً شاملاً يمنحك التوجيه والنصائح والإجابات الوافية حول تشغيل المولد واستكشاف الأعطال.",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/field-service.jpg"
            alt="Field Service"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E2231B]/20 border border-[#E2231B]/40 text-[#E2231B] text-xs font-bold uppercase tracking-wider">
              {language === "en" ? "Responding to Customer's Needs On Site" : "تلبية احتياجات العملاء في الموقع"}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {language === "en" ? "Field Service" : "الخدمة الميدانية في الموقع"}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "At IMC, we understand the critical importance of uninterrupted power supply for your business. That's why we are thrilled to offer our comprehensive Field Service Option for Cummins generators, bringing exceptional service and expertise right to your doorstep."
                : "في IMC، ندرك الأهمية الحاسمة لاستمرار إمدادات الطاقة لأعمالك. لذلك نقدم خدمة ميدانية متكاملة لمولدات كومنز تجلب الخبرة المعتمدة مباشرة إلى موقعك."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* Intro Grid */}
        <div className="bg-neutral-50 rounded-2xl p-8 sm:p-12 border border-neutral-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
                {language === "en" ? "On Site Engineering" : "خدمات هندسية ميدانية"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading">
                {language === "en" ? "Maximize Performance & Reliability" : "تعظيم أداء وموثوقية مولدك"}
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {language === "en"
                  ? "With IMC's Field Service Option, you can enjoy a range of benefits that are designed to maximize the performance and reliability of your Cummins generator, while minimizing downtime and optimizing your operations."
                  : "مع خدمة IMC الميدانية، ستستمتع بمجموعة من المزايا المصممة لتعظيم أداء وموثوقية مولد كومنز الخاص بك مع تقليل فترات التوقف وتحسين كفاءة عملياتك."}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => openQuote()}
                  className="px-6 py-3 bg-[#E2231B] hover:bg-[#9E0202] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-md"
                >
                  {language === "en" ? "Request Field Service Visit" : "طلب زيارة خدمة ميدانية"}
                </button>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
              <Image
                src="/uploads/2023/05/field-service.jpg"
                alt="Field Service Van"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4 Points Grid */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
              {language === "en" ? "Certified Support" : "دعم معتمد"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading">
              {language === "en" ? "Key Field Service Benefits" : "مزايا الخدمة الميدانية"}
            </h2>
            <div className="w-12 h-1 bg-[#E2231B] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b) => (
              <div key={b.num} className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E2231B] text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                    {b.num}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 font-heading">{b.title}</h3>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Box */}
        <div className="bg-[#111111] text-white rounded-2xl p-8 sm:p-12 border border-neutral-800 space-y-5">
          <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
            {language === "en" ? "Immediate Field Support" : "دعم ميداني فوري"}
          </span>
          <h3 className="text-2xl font-bold font-heading text-white">
            {language === "en" ? "Fill the below fields to request Field Service Visit" : "طلب زيارة ميدانية لفحص وصيانة المولد"}
          </h3>
          <p className="text-neutral-300 text-sm leading-relaxed max-w-2xl">
            {language === "en"
              ? "Contact us today to schedule an on-site visit by certified Cummins technicians."
              : "تواصل معنا اليوم لجدولة زيارة ميدانية من قبل مهندسي وفنيي كومنز المعتمدين في العراق."}
          </p>
          <div className="pt-2">
            <button
              onClick={() => openQuote()}
              className="px-6 py-3 bg-[#E2231B] hover:bg-[#9E0202] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-md"
            >
              {language === "en" ? "Apply Now" : "تقديم الطلب الآن"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
