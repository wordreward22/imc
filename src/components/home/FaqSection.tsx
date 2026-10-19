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
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-cummins-red">
            {t.faqSubtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            {t.faqTitle}
          </h2>
          <div className="w-16 h-1 bg-cummins-red mx-auto rounded-full mt-2" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-cummins-red flex-shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-cummins-red" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Help Box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-cummins-red/20 border border-cummins-red/30 flex items-center justify-center text-cummins-red flex-shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base">
                {language === "en"
                  ? "Still have technical questions?"
                  : language === "ar"
                  ? "هل لديك استفسارات فنية إضافية؟"
                  : "پرسیاری تەکنیکی زیاترت هەیە؟"}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
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
            className="px-5 py-2.5 bg-cummins-red hover:bg-cummins-red-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex-shrink-0"
          >
            {t.contactUs}
          </Link>
        </div>
      </div>
    </section>
  );
};
