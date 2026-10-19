"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Award, CheckCircle2, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function TrainingPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const courses = [
    {
      title: "Cummins PowerCommand® Control Systems",
      duration: "3 Days Intensive",
      desc: "Deep dive into PCC 1302, 2100, 3201 controllers, synchronizing panels, digital paralleling, and remote monitoring.",
    },
    {
      title: "HHP Diesel Engine Diagnostics & Troubleshooting",
      duration: "5 Days Practical",
      desc: "Fault tracing on QSK and KTA engine platforms using Cummins INSITE™ electronic service tools and calibration tables.",
    },
    {
      title: "Preventative Maintenance & Mechanical Overhaul",
      duration: "4 Days Workshop",
      desc: "Hands-on rebuild best practices, cylinder head servicing, injector timing, valve lash adjustments, and safety protocols.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="relative bg-slate-950 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/engine-closeup-banner.jpg"
            alt="Technical Training Academy"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cummins-red/20 border border-cummins-red/40 text-cummins-red text-xs font-bold uppercase tracking-wider">
              {t.training}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {language === "en" ? "IMC Technical Training Academy" : "أكاديمية التدريب الفني المعتمدة"}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.trainingDesc}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-red-50 text-cummins-red text-[11px] font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>{c.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">{c.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cummins-red hover:text-cummins-red-dark uppercase"
                >
                  <span>Enroll Technical Staff</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
