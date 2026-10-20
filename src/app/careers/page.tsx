"use client";

import React, { useState } from "react";
import { submissionError, submissionNotice, submitForm } from "@/lib/formSubmission";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CircularFeatureBlock } from "@/components/subpage/CircularFeatureBlock";
import { getSourceParagraphs } from "@/components/subpage/SourceCopyPage";
import { AdvantageCardsGrid } from "@/components/subpage/AdvantageCardsGrid";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";
import { useLanguage } from "@/context/LanguageContext";
import { subpageTranslations } from "@/data/subpageTranslations";
import { CheckCircle2, Send, UploadCloud } from "lucide-react";

export default function CareersPage() {
  const { language, isRtl } = useLanguage();
  const t = subpageTranslations[language].careers;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: "Bachelors",
    phone: "",
    fileName: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const { fileName: _fileName, ...fields } = formData;
      await submitForm("careers", language, fields, cvFile);
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

      {/* 2. Circular Feature Block */}
      <CircularFeatureBlock
        subtitle={t.circular.subtitle}
        title={t.circular.title}
        accentWord={t.circular.accentWord}
        paragraphs={getSourceParagraphs(language, "careers").length ? getSourceParagraphs(language, "careers").slice(0, 1) : t.circular.paragraphs}
        image="/uploads/2023/05/engine-technician-shop-800.jpg"
        badgeTitle={t.circular.badgeTitle}
        badgeText={t.circular.badgeText}
      />

      {/* 3. Advantage Cards Grid */}
      {language === "ku" && <AdvantageCardsGrid
        subtitle={t.advantages.subtitle}
        title={t.advantages.title}
        accentWord={t.advantages.accentWord}
        watermark={t.advantages.watermark}
        cards={t.advantages.cards}
      />}

      {/* 4. Interactive Job Application Form */}
      <section className="py-20 bg-neutral-900 text-white relative overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
        {/* Subtle Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
          <span className="text-[140px] sm:text-[200px] font-black uppercase text-white tracking-widest font-heading">
            ALKAN
          </span>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
                {t.form.subtitle}
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
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading uppercase">
              {t.form.title}{" "}
              <span className="text-[#E2231B]">{t.form.accentWord}</span>
            </h2>
            <div className="w-16 h-1 bg-[#E2231B] mx-auto rounded-full mt-3" />
          </div>

          <div className="bg-[#111111] p-8 sm:p-12 rounded-3xl border border-neutral-800 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">
                    {submissionNotice[language].title}
                </h3>
                <p className="text-neutral-400 text-sm max-w-md mx-auto">
                    {submissionNotice[language].careerDescription}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setCvFile(null);
                    setFormData({ name: "", email: "", education: "Bachelors", phone: "", fileName: "" });
                  }}
                  className="px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  {t.form.resetText}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      {t.form.educationLabel} <span className="text-[#E2231B]">*</span>
                    </label>
                    <select
                      value={formData.education}
                      onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#E2231B] transition-colors"
                    >
                      <option value="Bachelors">{t.form.educationOptions.bachelors}</option>
                      <option value="Masters">{t.form.educationOptions.masters}</option>
                      <option value="Diploma">{t.form.educationOptions.diploma}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      {t.form.phoneLabel} <span className="text-[#E2231B]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.form.phoneLabel}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    {t.form.cvLabel} <span className="text-[#E2231B]">*</span>
                  </label>
                  <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-neutral-800 rounded-2xl cursor-pointer hover:border-[#E2231B]/50 transition-colors bg-neutral-900/50">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadCloud className="w-8 h-8 text-neutral-400 mb-2" />
                      <p className="text-xs text-neutral-400 font-bold uppercase tracking-wider">
                        {formData.fileName || t.form.cvHint}
                      </p>
                      {formData.fileName && (
                        <span className="text-[11px] text-emerald-400 mt-1 font-medium">
                          {t.form.cvSelected}
                        </span>
                      )}
                    </div>
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
                <div className="pt-4 border-t border-neutral-800">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#E2231B] hover:bg-[#9E0202] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-600/30 disabled:opacity-50"
                  >
                    {submitting ? t.form.sendingText : t.form.buttonText}
                    <Send className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. CTA Stats Banner */}
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
