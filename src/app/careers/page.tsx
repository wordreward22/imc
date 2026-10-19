"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Briefcase, CheckCircle, Send, Upload } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function CareersPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "Bachelors",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/engine-technician-shop-800.jpg"
            alt="Careers at IMC"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E2231B]/20 border border-[#E2231B]/40 text-[#E2231B] text-xs font-bold uppercase tracking-wider">
              {t.careers}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {language === "en" ? "Careers" : "الوظائف"}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {language === "en" ? "Apply with IMC" : "قدم طلب التوظيف مع شركة IMC"}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        {/* Intro Card */}
        <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 space-y-4">
          <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
            {language === "en" ? "Join Our Team" : "انضم إلى فريقنا"}
          </span>
          <h2 className="text-2xl font-bold text-neutral-900 font-heading">
            {language === "en" ? "Apply with IMC" : "العمل مع شركة IMC العراق"}
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            {language === "en"
              ? "At IMC, we are proud to foster a dynamic and inclusive work environment where talented individuals can thrive and make a meaningful impact in the power solutions industry. We believe that our people are the driving force behind our success, and we are always looking for exceptional individuals to join our team."
              : "نحن في IMC فخورون بتعزيز بيئة عمل ديناميكية وشاملة حيث يمكن للأفراد الموهوبين أن يزدهروا ويحدثوا تأثيراً مفيداً في صناعة حلول الطاقة. نحن نؤمن بأن موظفينا هم القوة الدافعة وراء نجاحنا، ونبحث دائماً عن أفراد استثنائيين للانضمام إلى فريقنا."}
          </p>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">
                {language === "en" ? "Application Submitted Successfully!" : "تم تقديم الطلب بنجاح!"}
              </h3>
              <p className="text-neutral-600 text-sm max-w-md mx-auto">
                {language === "en"
                  ? "Thank you for your interest in joining IMC Iraq. Our human resources team will review your qualifications."
                  : "شكراً لاهتمامك بالانضمام إلى فريق IMC العراق. سيقوم فريق الموارد البشرية بمراجعة مؤهلاتك والتواصل معك."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-xl font-bold text-neutral-900 font-heading border-b border-neutral-100 pb-3">
                {language === "en" ? "Submit Your Application" : "نموذج التقديم"}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    {language === "en" ? "Full Name *" : "الاسم الكامل *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-[#E2231B]/20 focus:border-[#E2231B] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    {language === "en" ? "Email Address *" : "البريد الإلكتروني *"}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-[#E2231B]/20 focus:border-[#E2231B] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    {language === "en" ? "Phone Number *" : "رقم الهاتف *"}
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-[#E2231B]/20 focus:border-[#E2231B] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    {language === "en" ? "Education Level" : "المستوى التعليمي"}
                  </label>
                  <select
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-[#E2231B]/20 focus:border-[#E2231B] outline-none"
                  >
                    <option value="Bachelors">Bachelors / بكالوريوس</option>
                    <option value="Masters">Masters / ماجستير</option>
                    <option value="Diploma">Diploma / دبلوم</option>
                    <option value="Other">Other / أخرى</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  {language === "en" ? "Upload Your CV" : "تحميل السيرة الذاتية (CV)"}
                </label>
                <div className="border-2 border-dashed border-neutral-300 rounded-xl p-6 text-center hover:border-[#E2231B] transition-colors cursor-pointer bg-neutral-50">
                  <Upload className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
                  <p className="text-xs text-neutral-600">
                    {language === "en" ? "Click to select PDF or DOCX file" : "انقر لاختيار ملف السيرة الذاتية (PDF أو DOCX)"}
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#E2231B] hover:bg-[#9E0202] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{language === "en" ? "Apply Now" : "تقديم الطلب الآن"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
