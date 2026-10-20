"use client";

import React, { useState, useEffect } from "react";
import { submissionError, submissionNotice, submitForm } from "@/lib/formSubmission";
import { X, CheckCircle, Send } from "lucide-react";
import { useQuote } from "@/context/QuoteContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { products } from "@/data/products";

export const QuoteModal: React.FC = () => {
  const { isOpen, selectedProduct, closeQuote } = useQuote();
  const { language, isRtl } = useLanguage();
  const t = translations[language];

  const [productChoice, setProductChoice] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "Baghdad",
    powerRequired: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedProduct) {
      setProductChoice(selectedProduct.name);
    } else {
      setProductChoice("");
    }
    setSubmitted(false);
    setError("");
  }, [selectedProduct, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await submitForm("quote", language, { product: productChoice, ...formData });
      setSubmitted(true);
    } catch (cause) {
      setError(submissionError(cause, language));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#111111] text-white p-5 flex items-center justify-between border-b-2 border-[#E2231B]">
          <div className="flex items-center gap-2.5">
            <div>
              <h3 className="font-bold text-lg text-white">
                {language === "en"
                  ? "Request an Official Quote"
                  : language === "ar"
                  ? "طلب عرض سعر رسمي"
                  : "داواکاری پیشاندانی نرخ"}
              </h3>
              <p className="text-xs text-neutral-400">
                {language === "en"
                  ? "IMC Iraq — Authorized Cummins Seller"
                  : language === "ar"
                  ? "شركة المعدات العالمية - الموزع الحصري لكومنز"
                  : "ئای ئێم سی عێراق - بریکاری ڕێگەپێدراوی کۆمنز"}
              </p>
            </div>
          </div>
          <button
            onClick={closeQuote}
            className="w-8 h-8 rounded-full bg-[#1a1a1a] text-neutral-400 hover:text-white hover:bg-[#262626] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-neutral-900">
                {submissionNotice[language].title}
              </h4>
              <p className="text-neutral-600 text-sm max-w-md mx-auto">
                {submissionNotice[language].description}
              </p>
              <button
                onClick={closeQuote}
                className="mt-6 px-6 py-2.5 bg-[#E2231B] hover:bg-[#9E0202] text-white rounded-xl font-medium transition-colors"
              >
                {language === "en" ? "Done" : language === "ar" ? "إغلاق" : "تەواو"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Selection */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                  {language === "en"
                    ? "Selected Generator Model"
                    : language === "ar"
                    ? "موديل المولد المطلوب"
                    : "مۆدێلی مۆلیدەی دیاریکراو"}
                </label>
                <select
                  value={productChoice}
                  onChange={(e) => setProductChoice(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#E2231B]/20 focus:border-[#E2231B] transition-all"
                >
                  <option value="">
                    {language === "en"
                      ? "-- Select a Cummins Generator --"
                      : language === "ar"
                      ? "-- اختر موديل مولد كومنز --"
                      : "-- مۆلیدەیەک هەڵبژێرە --"}
                  </option>
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name} ({p.attributes.standby_kva_kw || p.attributes.engine_model || "Cummins"})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {language === "en" ? "Full Name *" : language === "ar" ? "الاسم الكامل *" : "ناوی تەواو *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 text-sm focus:ring-2 focus:ring-[#E2231B]/20 focus:border-[#E2231B] outline-none"
                    placeholder={language === "en" ? "e.g. Ahmed Ali" : "مثال: أحمد علي"}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {language === "en" ? "Company / Organization" : language === "ar" ? "اسم الشركة / المؤسسة" : "ناوی کۆمپانیا"}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 text-sm focus:ring-2 focus:ring-[#E2231B]/20 focus:border-[#E2231B] outline-none"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {language === "en" ? "Email Address *" : language === "ar" ? "البريد الإلكتروني *" : "ئیمەیڵ *"}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 text-sm focus:ring-2 focus:ring-[#E2231B]/20 focus:border-[#E2231B] outline-none"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {language === "en" ? "Phone Number *" : language === "ar" ? "رقم الهاتف *" : "ژمارەی مۆبایل *"}
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 text-sm focus:ring-2 focus:ring-[#E2231B]/20 focus:border-[#E2231B] outline-none"
                    placeholder="+964 78X XXX XXXX"
                  />
                </div>
              </div>

              {/* City / Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {language === "en" ? "City / Province" : language === "ar" ? "المدينة / المحافظة" : "شار"}
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 text-sm focus:ring-2 focus:ring-[#E2231B]/20 focus:border-[#E2231B] outline-none"
                  >
                    <option value="Baghdad">Baghdad / بغداد</option>
                    <option value="Basra">Basra / البصرة</option>
                    <option value="Erbil">Erbil / أربيل</option>
                    <option value="Sulaymaniyah">Sulaymaniyah / السليمانية</option>
                    <option value="Duhok">Duhok / دهوك</option>
                    <option value="Najaf">Najaf / النجف</option>
                    <option value="Karbala">Karbala / كربلاء</option>
                    <option value="Kirkuk">Kirkuk / كركوك</option>
                    <option value="Other">Other / أخرى</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    {language === "en" ? "Desired Power (kVA)" : language === "ar" ? "القدرة المطلوبة (ك.ف.أ)" : "توانای پێویست (kVA)"}
                  </label>
                  <input
                    type="text"
                    value={formData.powerRequired}
                    onChange={(e) => setFormData({ ...formData, powerRequired: e.target.value })}
                    className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 text-sm focus:ring-2 focus:ring-[#E2231B]/20 focus:border-[#E2231B] outline-none"
                    placeholder="e.g. 500 kVA"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  {language === "en" ? "Project Notes / Specific Requirements" : language === "ar" ? "تفاصيل إضافية أو متطلبات خاصة" : "تێبینی زیاتر"}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 text-sm focus:ring-2 focus:ring-[#E2231B]/20 focus:border-[#E2231B] outline-none resize-none"
                />
              </div>

              {error && <p role="alert" className="text-sm text-red-700 bg-red-50 rounded-lg p-3">{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-[#E2231B] hover:bg-[#9E0202] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
              >
                {submitting ? (
                  <span>...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>
                      {language === "en" ? "Send Quote Request" : language === "ar" ? "إرسال طلب عرض السعر" : "ناردنی داواکاری"}
                    </span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
