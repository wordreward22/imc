"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Target, Eye, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/engine-technician-shop-800.jpg"
            alt="About IMC Iraq"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E2231B]/20 border border-[#E2231B]/40 text-[#E2231B] text-xs font-bold uppercase tracking-wider">
              {t.aboutUs}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {t.aboutUs}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "IMC the only authorized distributor to sell, distribute and service the Cummins products in Iraq."
                : language === "ar"
                ? "شركة IMC هي الموزع المعتمد الوحيد لبيع وتوزيع وخدمة منتجات كومنز في العراق."
                : "ئای ئێم سی تاکە بریکاری ڕێگەپێدراوی کۆمنزە لە عێراق."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E2231B] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-neutral-900 font-heading">
              {language === "en" ? "Our Mission" : language === "ar" ? "رسالتنا" : "ئەرکی ئێمە"}
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {language === "en"
                ? "To provide the highest quality and most reliable Cummins engines and power solutions to our customers throughout Iraq."
                : language === "ar"
                ? "تزويد عملائنا في جميع أنحاء العراق بمحركات كومنز عالية الجودة والأكثر موثوقية وحلول طاقة متميزة."
                : "دابینکردنی بەرزترین کوالێتی و باوەڕپێکراوترین مۆلیدە و چارەسەری وزەی کۆمنز بۆ کڕیارانمان لە سەرتاسەری عێراق."}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#111111] text-white flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-neutral-900 font-heading">
              {language === "en" ? "Our Vision" : language === "ar" ? "رؤيتنا" : "دیدگای ئێمە"}
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {language === "en"
                ? "To be the top preferred dealer through exceptional customer service, technical expertise, and innovative solutions."
                : language === "ar"
                ? "أن نكون الوكيل المفضل الأول من خلال خدمة عملاء استثنائية، والخبرة التقنية، والحلول المبتكرة."
                : "بوون بە هەڵبژاردەی یەکەمی کڕیاران لە ڕێگەی خزمەتگوزاری بێوێنە و شارەزایی تەکنیکی."}
            </p>
          </div>

          {/* Values */}
          <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E2231B] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-neutral-900 font-heading">
              {language === "en" ? "Our Values" : language === "ar" ? "قيمنا" : "بەهاکانمان"}
            </h2>
            <div className="space-y-2 pt-1 text-sm font-semibold text-neutral-800">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E2231B]" />
                <span>{language === "en" ? "Customer Satisfaction" : "رضا العملاء"}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E2231B]" />
                <span>{language === "en" ? "Quality" : "الجودة"}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E2231B]" />
                <span>{language === "en" ? "Integrity" : "النزاهة"}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Cummins History */}
        <div id="cummins-history" className="scroll-mt-24 bg-neutral-50 rounded-2xl p-8 sm:p-12 border border-neutral-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
                Cummins Inc.
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading">
                {language === "en" ? "Cummins History" : "تاريخ كومنز"}
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {language === "en"
                  ? "Since 1919, Cummins has turned challenges into opportunities, always looking for new solutions to power a more prosperous world. Discover a company founded on unwavering values and willing to solve problems for our customers, communities and environment, to make the world a better place."
                  : language === "ar"
                  ? "منذ عام 1919، حولت كومنز التحديات إلى فرص، وتبحث دائمًا عن حلول جديدة لتمكين عالم أكثر ازدهارًا. اكتشف شركة تأسست على قيم ثابتة ومستعدة لحل المشكلات لعملائنا ومجتمعاتنا وبيئتنا، لجعل العالم مكانًا أفضل."
                  : "لە ساڵی 1919ەوە، کۆمنز ئاستەنگەکانی کردووە بە دەرفەت بۆ دابینکردنی چارەسەری نوێ بۆ جیهانێکی پێشکەوتووتر."}
              </p>

              <div className="pt-4 border-t border-neutral-200">
                <h3 className="text-lg font-bold text-neutral-900 font-heading mb-2">
                  {language === "en" ? "Cummins Values" : "قيم كومنز"}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {language === "en"
                    ? "Cummins is synonymous with integrity, diversity and inclusion, teamwork, excellence and caring for others. These values are deeply rooted in our history, our culture and the people we employ around the world. Values are the backbone of our company. We stand tall because of them – even when standing for what is right comes at a cost."
                    : language === "ar"
                    ? "كومنز مرادفة للنزاهة والتنوع والشمول والعمل الجماعي والتميز والاهتمام بالآخرين. هذه القيم متجذرة بعمق في تاريخنا وثقافتنا والأشخاص الذين نوظفهم حول العالم. القيم هي العمود الفقري لشركتنا."
                    : "کۆمنز هاوتایە لەگەڵ دەستپاکی، کاری بەکۆمەڵ و نایابی. ئەم بەهایانە ڕەگیان لە مێژووی ئێمەدا داکوتاوە."}
                </p>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
              <Image
                src="/uploads/2023/05/engine-closeup-banner.jpg"
                alt="Cummins Engine History"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Alkan Holding History */}
        <div id="alkan-history" className="scroll-mt-24 bg-[#111111] text-white rounded-2xl p-8 sm:p-12 border border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
                {language === "en" ? "Our Group History" : "تاريخ مجموعتنا"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {language === "en" ? "ALKAN HOLDING HISTORY" : "تاريخ ألكان القابضة"}
              </h2>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {language === "en"
                  ? "Alkan Holding Proudly Celebrated its 49th Anniversary in 2023 Under the Leadership of Khaled Nosseir. Alkan Group successfully operates a wide range of business lines, covering a variety of business activities, owns different companies, and runs through local subsidiaries and branches in 17 countries across the Middle East and Africa. With more than 6000 professionals employed, Alkan Holding is actively engaged in multiple business fields, including Communication & Information Technology, Real Estate, Manufacturing, Trade & Distribution, Aviation, Travel & Tourism, Textile & Cotton Trade."
                  : language === "ar"
                  ? "احتفلت ألكان القابضة بفخر بالذكرى السنوية التاسعة والأربعين لتأسيسها في عام 2023 تحت قيادة خالد نصير. تدير مجموعة ألكان بنجاح مجموعة واسعة من خطوط الأعمال في 17 دولة عبر الشرق الأوسط وأفريقيا بأكثر من 6000 موظف متخصص."
                  : "ئەلکان هۆڵدینگ شانازی بە مێژووی درێژخایەنی خۆیەوە دەکات بە زیاتر لە 6000 کارمەند لە 17 وڵاتدا."}
              </p>
            </div>

            <div className="relative h-64 flex items-center justify-center p-8 bg-black/60 rounded-2xl border border-neutral-800">
              <div className="relative w-full h-32">
                <Image
                  src="/uploads/2021/11/alkan_logo_white.png"
                  alt="Alkan Holding"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
