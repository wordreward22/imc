"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CircularFeatureBlock } from "@/components/subpage/CircularFeatureBlock";
import { AdvantageCardsGrid } from "@/components/subpage/AdvantageCardsGrid";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, Send, UploadCloud, FileText, Briefcase, Award, Users, Globe } from "lucide-react";

export default function CareersPage() {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: "Bachelors",
    phone: "",
    fileName: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const careerAdvantages = [
    {
      num: 1,
      title: "Global Training & Cummins Certification",
      desc: "Gain direct access to factory-accredited Cummins technical academies, international engineering credentials, and world-class mechanical and electronic curriculum.",
    },
    {
      num: 2,
      title: "High-Impact Infrastructure Projects",
      desc: "Deliver vital power generation solutions for oil & gas installations, telecommunications networks, healthcare facilities, and heavy industry across all Iraqi governorates.",
    },
    {
      num: 3,
      title: "Collaborative & Inclusive Culture",
      desc: "Thrive in an environment grounded in integrity, teamwork, and mutual respect, backed by 49 years of Alkan Holding corporate leadership across the region.",
    },
    {
      num: 4,
      title: "Competitive Rewards & Advancement",
      desc: "Enjoy comprehensive compensation packages, merit-based career progression, and long-term professional development within an expansive international network.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Subpage Hero */}
      <SubpageHero
        subtitle="Alkan"
        title="Alkan"
        accentWord="Careers"
        watermark="Alkan"
        bgImage="/uploads/2023/05/engine-technician-shop-800.jpg"
      />

      {/* 2. Circular Feature Block */}
      <CircularFeatureBlock
        subtitle="Careers"
        title="Apply with"
        accentWord="Alkan"
        paragraphs={[
          "At Alkan, we are proud to foster a dynamic and inclusive work environment where talented individuals can thrive and make a meaningful impact in the power solutions industry. We believe that our people are the driving force behind our success, and we are always looking for exceptional individuals to join our team.",
          "As part of Alkan Holding operating across 17 countries with more than 6000 professionals, IMC Iraq offers continuous technical education, career stability, and the opportunity to work alongside the best Cummins power experts in the region.",
        ]}
        image="/uploads/2023/05/engine-technician-shop-800.jpg"
        badgeTitle="Cummins Authorized Distributor"
        badgeText="Only buy Genuine Cummins parts and accessories from Cummins distributors or Cummins authorized dealer locations"
      />

      {/* 3. Advantage Cards Grid */}
      <AdvantageCardsGrid
        subtitle="Why Choose Alkan"
        title="Build Your Future"
        accentWord="With Us"
        watermark="Alkan"
        cards={careerAdvantages}
      />

      {/* 4. Interactive Job Application Form */}
      <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
        {/* Subtle Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
          <span className="text-[140px] sm:text-[200px] font-black uppercase text-white tracking-widest font-heading">
            CAREERS
          </span>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
                Join Our Team
              </span>
              <svg
                width="24"
                height="12"
                viewBox="0 0 24 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2H24"
                  stroke="#E2231B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6 6H24"
                  stroke="#E2231B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 10H24"
                  stroke="#E2231B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading uppercase">
              Submit Your <span className="text-[#E2231B]">Application</span>
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
                  Application Received Successfully
                </h3>
                <p className="text-neutral-400 text-sm max-w-md mx-auto">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Our Human Resources team will review your qualifications and reach out if there is an alignment with current openings.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", education: "Bachelors", phone: "", fileName: "" });
                  }}
                  className="px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Applicant Name <span className="text-[#E2231B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Applicant Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      E-mail <span className="text-[#E2231B]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Education Level <span className="text-[#E2231B]">*</span>
                    </label>
                    <select
                      value={formData.education}
                      onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#E2231B] transition-colors"
                    >
                      <option value="Bachelors">Bachelors Degree</option>
                      <option value="Masters">Masters Degree</option>
                      <option value="Technical Diploma">Technical Diploma / Vocational</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                    />
                  </div>
                </div>

                {/* Upload Your CV */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Upload Your CV <span className="text-[#E2231B]">*</span>
                  </label>
                  <label className="flex flex-col items-center justify-center p-6 bg-neutral-900 border-2 border-dashed border-neutral-800 hover:border-[#E2231B]/60 rounded-2xl cursor-pointer transition-colors group">
                    <UploadCloud className="w-8 h-8 text-neutral-400 group-hover:text-[#E2231B] mb-2 transition-colors" />
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                      {formData.fileName ? formData.fileName : "Click to browse and upload CV (PDF, DOCX)"}
                    </span>
                    <span className="text-[11px] text-neutral-500 mt-1">
                      Max file size: 10MB
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="pt-4 border-t border-neutral-800">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#E2231B] hover:bg-[#9E0202] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-600/30 disabled:opacity-50"
                  >
                    {submitting ? "Submitting Application..." : "Apply Now"}
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. CTA Stats Banner */}
      <CtaStatsBanner
        title="Power Your Potential"
        desc="At Alkan, we are proud to foster a dynamic and inclusive work environment where talented individuals can thrive and make a meaningful impact in the power solutions industry."
        buttonText="Join Our Talent Network"
        bgImage="/uploads/2023/05/engine-technician-shop-800.jpg"
        stats={[
          {
            number: "6000+",
            label: "Alkan Group professionals employed regionally",
            icon: "globe",
          },
          {
            number: "17+",
            label: "Countries served with local subsidiaries and branches",
            icon: "pin",
          },
          {
            number: "49+",
            label: "Years of engineering reliability, excellence and trust",
            icon: "award",
          },
        ]}
      />
    </div>
  );
}
