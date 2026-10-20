"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CircularFeatureBlock } from "@/components/subpage/CircularFeatureBlock";
import { AdvantageCardsGrid } from "@/components/subpage/AdvantageCardsGrid";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";
import { useLanguage } from "@/context/LanguageContext";
import { useQuote } from "@/context/QuoteContext";
import { CheckCircle2, Send, GraduationCap, Award, BookOpen, Wrench } from "lucide-react";

export default function TrainingPage() {
  const { language } = useLanguage();
  const { openQuote } = useQuote();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const trainingModules = [
    {
      num: 1,
      title: "Cummins Engine Operation & Maintenance",
      desc: "Comprehensive foundation covering diesel engine mechanical architecture, lubrication loops, cooling configurations, and preventive service routines to guarantee maximum lifecycle reliability.",
    },
    {
      num: 2,
      title: "INSITE™ & InPower™ Electronic Diagnostics",
      desc: "Hands-on instruction utilizing genuine Cummins diagnostic hardware and software. Master live fault troubleshooting, calibration downloads, sensor verification, and telemetry analysis.",
    },
    {
      num: 3,
      title: "Overhaul & Major Mechanical Repairs",
      desc: "Step-by-step master rebuild procedures adhering to factory tolerances, including cylinder head reconditioning, piston ring fitment, crankshaft alignment, and dynamometer testing.",
    },
    {
      num: 4,
      title: "Fleetguard Filtration & Fluid Quality Analysis",
      desc: "Deep-dive technical understanding of NanoNet™ multi-layer filtration, contamination mitigation, and Valvoline Premium Blue oil chemistry under harsh Iraq operating conditions.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Subpage Hero */}
      <SubpageHero
        subtitle="IMC Iraq"
        title="IMC"
        accentWord="Training"
        watermark="IMC Iraq"
        bgImage="/uploads/2023/05/engine-closeup-banner.jpg"
      />

      {/* 2. Circular Feature Block */}
      <CircularFeatureBlock
        subtitle="Training"
        title="Training with"
        accentWord="IMC Iraq"
        paragraphs={[
          "At IMC, we believe that knowledge and skills are key to maximizing the performance and efficiency of your Cummins generators. That's why we are proud to offer a range of comprehensive training programs. Apply now to boost your technical skills.",
          "Our certified courses are conducted by Cummins-accredited training specialists, blending state-of-the-art classroom modules with direct workbench diagnostics, component teardowns, and electronic fault resolution.",
        ]}
        image="/uploads/2023/05/engine-closeup-banner.jpg"
        badgeTitle="Cummins Authorized Training"
        badgeText="Learn directly from factory-certified Cummins instructors using OEM test benches and diagnostic computers"
      />

      {/* 3. Training Curriculum Modules Grid */}
      <AdvantageCardsGrid
        subtitle="Certified Curriculum"
        title="Comprehensive Training"
        accentWord="Programs"
        watermark="Training"
        cards={trainingModules}
      />

      {/* 4. Interactive Training Application Form */}
      <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
        {/* Faint Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
          <span className="text-[140px] sm:text-[200px] font-black uppercase text-white tracking-widest font-heading">
            ACADEMY
          </span>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
                Boost Your Technical Skills
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
              Apply For Training With <span className="text-[#E2231B]">IMC Iraq</span>
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
                  Training Application Received
                </h3>
                <p className="text-neutral-400 text-sm max-w-md mx-auto">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Our training coordinator will contact you with session schedules and enrollment details.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", company: "", notes: "" });
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
                      Customer Name <span className="text-[#E2231B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Customer Name*"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      E-Mail <span className="text-[#E2231B]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="E-Mail*"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    Notes
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Notes on equipment models, team size, or specific training requirements"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors resize-none"
                  />
                </div>

                <div className="pt-4 border-t border-neutral-800">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#E2231B] hover:bg-[#9E0202] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-600/30 disabled:opacity-50"
                  >
                    {submitting ? "Submitting..." : "Apply Now"}
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
        title="The Genuine Difference"
        desc="At IMC, we believe that knowledge and skills are key to maximizing the performance and efficiency of your Cummins generators. That's why we are proud to offer a range of comprehensive training programs. Apply now to boost your technical skills."
        buttonText="Enroll In Training"
        bgImage="/uploads/2023/05/engine-closeup-banner.jpg"
        stats={[
          {
            number: "500+",
            label: "Technicians and engineers certified across Iraq",
            icon: "award",
          },
          {
            number: "100%",
            label: "Factory-approved Cummins curriculum and diagnostic training",
            icon: "shield",
          },
          {
            number: "49+",
            label: "Years of Alkan engineering heritage and technical excellence",
            icon: "globe",
          },
        ]}
      />
    </div>
  );
}
