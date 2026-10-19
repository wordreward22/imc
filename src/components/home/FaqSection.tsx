"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const FaqSection: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const t = translations[language];

  const faqs = [
    { q: t.faq1Q, a: t.faq1A },
    { q: t.faq2Q, a: t.faq2A },
    { q: t.faq3Q, a: t.faq3A },
    { q: t.faq4Q, a: t.faq4A },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E2231B] font-heading">
            {t.faqSubtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-heading">
            {t.faqTitle}
          </h2>
          <div className="w-16 h-1 bg-[#E2231B] mx-auto rounded-full mt-2" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#E2231B] flex-shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-slate-900 font-heading">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#E2231B]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-[#666666] text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Help Box */}
        <div className="mt-12 p-6 bg-[#0F172A] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg border-l-4 border-[#E2231B]">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-[#E2231B] flex-shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base font-heading">
                {language === "en"
                  ? "Still have technical questions?"
                  : language === "ar"
                  ? "هل لديك استفسارات فنية إضافية؟"
                  : "پرسیاری تەکنیکی زیاترت هەیە؟"}
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                {language === "en"
                  ? "Speak directly with an IMC Cummins Certified Engineer."
                  : language === "ar"
                  ? "تحدث مباشرة مع أحد مهندسي كومنز المعتمدين في العراق."
                  : "ڕاستەوخۆ پەیوەندی بە ئەندازیارانی باوەڕپێکراوی کۆمنز بکە."}
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-[#E2231B] hover:bg-[#9E0202] text-white text-xs font-bold uppercase tracking-wider transition-colors flex-shrink-0"
          >
            {t.contactUs}
          </Link>
        </div>
      </div>
    </section>
  );
};
