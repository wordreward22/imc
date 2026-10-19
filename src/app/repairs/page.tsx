"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Wrench, PhoneCall, ShieldCheck, CheckCircle2, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function RepairsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-neutral-50 min-h-screen pb-24">
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/field-service.jpg"
            alt="Field Service Cummins"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cummins-red/20 border border-cummins-red/40 text-cummins-red text-xs font-bold uppercase tracking-wider">
              {t.fieldService}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {language === "en" ? "On-Site Field Service & Emergency Repairs" : "الخدمة الميدانية والإصلاحات الطارئة في الموقع"}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {t.fieldServiceDesc}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 space-y-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-xl space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-neutral-900 font-heading">
                Mobile Engineering Fleet Ready 24/7
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Our fleet of specialized service vehicles is fully equipped with advanced electronic diagnostic tooling (Cummins INSITE™, InPower™), specialized pullers, calibrated torque equipment, and genuine high-demand spare parts.
              </p>
              <ul className="space-y-2.5 text-sm text-neutral-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cummins-red flex-shrink-0" />
                  <span>On-site load banking and electrical testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cummins-red flex-shrink-0" />
                  <span>Engine electronic fault code analysis and calibrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cummins-red flex-shrink-0" />
                  <span>Emergency cooling, fueling, and governor system repair</span>
                </li>
              </ul>

              <div className="pt-4">
                <a
                  href="tel:+9647842000220"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cummins-red text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-cummins-red-dark transition-colors shadow-lg shadow-red-600/20"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Request Emergency Field Dispatch</span>
                </a>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
              <Image
                src="/uploads/2023/05/field-service.jpg"
                alt="Field service truck"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
