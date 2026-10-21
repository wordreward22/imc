"use client";

import React, { useState } from "react";
import { submissionError, submissionNotice, submitForm } from "@/lib/formSubmission";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";
import { getSourceParagraphs } from "@/components/subpage/SourceCopyPage";
import { useLanguage } from "@/context/LanguageContext";
import { subpageTranslations } from "@/data/subpageTranslations";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const { language, isRtl } = useLanguage();
  const t = subpageTranslations[language].contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Power Generation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await submitForm("contact", language, formData);
      setSubmitted(true);
    } catch (cause) {
      setError(submissionError(cause, language));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Subpage Hero */}
      <SubpageHero
        subtitle={t.hero.subtitle}
        title={t.hero.title}
        accentWord={t.hero.accentWord}
        watermark={t.hero.watermark}
        bgImage="/uploads/2023/05/engine-technician-shop-800.jpg"
      />

      {/* 2. Main Contact Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Watermark */}
        <div className="absolute top-10 inset-x-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
          <span className="text-[120px] sm:text-[180px] font-black uppercase text-neutral-900 tracking-widest font-heading">
            CONNECT
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Narrative & Contact Detail Boxes */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
                    {t.narrative.subtitle}
                  </span>
                  <svg
                    width="24"
                    height="12"
                    viewBox="0 0 24 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 2H24" stroke="#E2231B" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M6 6H24" stroke="#E2231B" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M12 10H24" stroke="#E2231B" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-heading uppercase">
                  {t.narrative.title} <span className="text-[#E2231B]">{t.narrative.accentWord}</span>
                </h2>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {getSourceParagraphs(language, "contact")[0] ?? t.narrative.desc}
                </p>
              </div>

              {/* Branches and contact details */}
              <div className="space-y-4">
                {/* Baghdad Office */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 shadow-sm hover:border-[#E2231B]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E2231B] flex items-center justify-center flex-shrink-0 border border-red-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      {t.narrative.officeLabel}
                    </h3>
                    <p className="text-sm font-bold text-neutral-900 mt-0.5">
                      {t.narrative.baghdadAddress}
                    </p>
                  </div>
                </div>

                {/* Basra Office */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 shadow-sm hover:border-[#E2231B]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#111111] text-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      {t.narrative.officeLabel}
                    </h3>
                    <p className="text-sm font-bold text-neutral-900 mt-0.5">
                      {t.narrative.basraAddress}
                    </p>
                  </div>
                </div>

                {/* Erbil Branch */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 shadow-sm hover:border-[#E2231B]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E2231B] flex items-center justify-center flex-shrink-0 border border-red-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      {t.narrative.branchLabel}
                    </h3>
                    <p className="text-sm font-bold text-neutral-900 mt-0.5">
                      {t.narrative.erbilBranch}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 shadow-sm hover:border-[#E2231B]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E2231B] flex items-center justify-center flex-shrink-0 border border-red-100">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      {t.narrative.phoneLabel}
                    </h3>
                    <a
                      href="tel:+9647842000220"
                      className="text-sm font-bold text-neutral-900 mt-0.5 block hover:text-[#E2231B] transition-colors"
                      dir="ltr"
                    >
                      {t.narrative.phoneValue}
                    </a>
                  </div>
                </div>

                {/* Mail */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 shadow-sm hover:border-[#E2231B]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#111111] text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      {t.narrative.emailLabel}
                    </h3>
                    <a
                      href={`mailto:${t.narrative.emailValue}`}
                      className="text-sm font-bold text-neutral-900 mt-0.5 block hover:text-[#E2231B] transition-colors"
                      dir="ltr"
                    >
                      {t.narrative.emailValue}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7" dir={isRtl ? "rtl" : "ltr"}>
              <div className="bg-[#111111] text-white p-8 sm:p-12 rounded-3xl border border-neutral-800 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-white">
                      {submissionNotice[language].title}
                    </h3>
                    <p className="text-neutral-400 text-sm max-w-md mx-auto">
                      {submissionNotice[language].description}
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", service: "Power Generation", message: "" });
                      }}
                      className="px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      {t.form.resetText}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#E2231B] block mb-1">
                        {t.form.inquiryTag}
                      </span>
                      <h3 className="text-2xl font-bold font-heading text-white uppercase">
                        {t.form.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                          {t.form.nameLabel} <span className="text-[#E2231B]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={t.form.nameLabel}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                          {t.form.emailLabel} <span className="text-[#E2231B]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder={t.form.emailLabel}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                          {t.form.phoneLabel}
                        </label>
                        <input
                          type="tel"
                          placeholder={t.form.phoneLabel}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                          {t.form.serviceLabel} <span className="text-[#E2231B]">*</span>
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#E2231B] transition-colors"
                        >
                          <option value="Power Generation">{t.form.serviceOptions.power}</option>
                          <option value="Parts">{t.form.serviceOptions.parts}</option>
                          <option value="Service">{t.form.serviceOptions.service}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                        {t.form.messageLabel} <span className="text-[#E2231B]">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder={t.form.messageLabel}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors resize-none"
                      />
                    </div>

                    {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
                    <div className="pt-2 border-t border-neutral-800">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#E2231B] hover:bg-[#9E0202] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-600/30 disabled:opacity-50"
                      >
                        {submitting ? t.form.sendingText : t.form.submitButton}
                        <Send className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Facilities / Workshops Section */}
      {language === "ku" && <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
              {t.workshops.tag}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading uppercase">
              {t.workshops.title}
            </h2>
            <div className="w-12 h-1 bg-[#E2231B] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Baghdad Main Facility */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E2231B] block">
                    {t.workshops.baghdadTag}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-neutral-900 mt-1">
                    {t.workshops.baghdadTitle}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E2231B] flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3 text-sm text-neutral-600">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#E2231B] flex-shrink-0" />
                  <span>{t.workshops.baghdadAddress}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#E2231B] flex-shrink-0" />
                  <span dir="ltr">+964 7842 000 220</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#E2231B] flex-shrink-0" />
                  <span>{t.workshops.baghdadHours}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-neutral-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{t.workshops.baghdadBadge}</span>
              </div>
            </div>

            {/* Basra Facility */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E2231B] block">
                    {t.workshops.basraTag}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-neutral-900 mt-1">
                    {t.workshops.basraTitle}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E2231B] flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3 text-sm text-neutral-600">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#E2231B] flex-shrink-0" />
                  <span>{t.workshops.basraAddress}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#E2231B] flex-shrink-0" />
                  <span dir="ltr">+964 7842 000 220</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#E2231B] flex-shrink-0" />
                  <span>{t.workshops.basraHours}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-neutral-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{t.workshops.basraBadge}</span>
              </div>
            </div>
          </div>
        </div>
      </section>}

      {/* 4. CTA Stats Banner */}
      {language === "ku" && <CtaStatsBanner
        title={t.cta.title}
        desc={t.cta.desc}
        buttonText={t.cta.buttonText}
        bgImage="/uploads/2023/05/engine-technician-shop-800.jpg"
        stats={t.cta.stats}
      />}
    </div>
  );
}
