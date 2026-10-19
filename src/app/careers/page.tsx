"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Briefcase, CheckCircle, Send, Award, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function CareersPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const [applied, setApplied] = useState(false);

  const openings = [
    {
      title: "Senior Cummins Field Service Engineer",
      location: "Baghdad / Basra",
      dept: "Technical Operations",
      type: "Full-Time",
    },
    {
      title: "Electronic Diagnostic Specialist (INSITE™)",
      location: "Baghdad Workshop",
      dept: "Master Rebuild Center",
      type: "Full-Time",
    },
    {
      title: "Heavy Equipment Technical Sales Representative",
      location: "Erbil / Kurdistan Region",
      dept: "Commercial Power Systems",
      type: "Full-Time",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="relative bg-slate-950 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/engine-technician-shop-800.jpg"
            alt="Careers at IMC"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cummins-red/20 border border-cummins-red/40 text-cummins-red text-xs font-bold uppercase tracking-wider">
              {t.careers}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {language === "en" ? "Join the Team at IMC Iraq" : "انضم إلى فريق العمل في شركة IMC العراق"}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "Build a world-class engineering career representing the global power leader Cummins in Iraq."
                : "ابنِ مسيرتك المهنية الهندسية مع الوكيل الحصري لكومنز في العراق."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {openings.map((job, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-cummins-red">
                  <span>{job.dept}</span>
                  <span className="px-2 py-0.5 bg-red-50 rounded-full">{job.type}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">{job.title}</h3>
                <p className="text-xs text-slate-500">{job.location}</p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href="mailto:careers@imc.iq"
                  className="w-full py-2 bg-slate-900 hover:bg-cummins-red text-white text-xs font-bold uppercase rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Apply with CV</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
