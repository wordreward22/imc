"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function TrainingPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/engine-closeup-banner.jpg"
            alt="IMC Training"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E2231B]/20 border border-[#E2231B]/40 text-[#E2231B] text-xs font-bold uppercase tracking-wider">
              {t.training}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {language === "en" ? "IMC Training" : "تدريب IMC المعتمد"}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "At IMC, we believe that knowledge and skills are key to maximizing the performance and efficiency of your Cummins generators."
                : "في IMC، نؤمن بأن المعرفة والمهارات هما المفتاح لتعظيم أداء وكفاءة مولدات كومنز الخاصة بك."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        <div className="bg-neutral-50 rounded-2xl p-8 sm:p-12 border border-neutral-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
                {language === "en" ? "Boost Technical Skills" : "تطوير المهارات التقنية"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading">
                {language === "en" ? "Training with IMC Iraq" : "التدريب مع شركة IMC العراق"}
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                {language === "en"
                  ? "At IMC, we believe that knowledge and skills are key to maximizing the performance and efficiency of your Cummins generators. That’s why we are proud to offer a range of comprehensive training programs. Apply now to boost your technical skills."
                  : "في IMC، نؤمن بأن المعرفة والمهارات هما المفتاح لتعظيم أداء وكفاءة مولدات كومنز الخاصة بك. لهذا السبب نحن فخورون بتقديم مجموعة من برامج التدريب الشاملة. قدم طلبك الآن لتعزيز مهاراتك الفنية."}
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#E2231B] hover:bg-[#9E0202] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-md"
                >
                  {language === "en" ? "Apply Now" : "قدم الآن"}
                </Link>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
              <Image
                src="/uploads/2023/05/engine-closeup-banner.jpg"
                alt="IMC Training Academy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
