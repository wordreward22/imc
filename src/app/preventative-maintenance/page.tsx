"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, ShieldCheck, CheckCircle2, Clock, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

export default function PreventativeMaintenancePage() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  const tiers = [
    {
      name: "Silver Maintenance SLA",
      desc: "Quarterly inspection, oil & filter change, 24-point electrical check, battery electrolyte testing.",
      features: ["4 Scheduled Visits / Year", "Fluid Analysis", "Standard Response Time"],
    },
    {
      name: "Gold Priority SLA",
      popular: true,
      desc: "Bi-monthly comprehensive servicing, cooling system flush, governor calibration, priority 4-hour emergency response.",
      features: ["6 Scheduled Visits / Year", "Complete Diagnostic Logging", "4-Hour Emergency Dispatch", "10% Discount on Genuine Parts"],
    },
    {
      name: "Platinum 24/7 Mission Critical",
      desc: "Dedicated full-time on-site technicians, continuous oil sampling, automated fuel polishing, guaranteed 2-hour SLA.",
      features: ["Monthly Comprehensive Service", "2-Hour Emergency Response", "Dedicated Account Engineer", "All Filter & Lubricant Consumables Included"],
    },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen pb-24">
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/service-contracts-1.jpeg"
            alt="Service Contracts"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cummins-red/20 border border-cummins-red/40 text-cummins-red text-xs font-bold uppercase tracking-wider">
              {t.serviceContracts}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {language === "en" ? "Service Contracts & Preventative Care" : "عقود الصيانة الوقائية والتشغيل"}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {t.serviceContractsDesc}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-8 border shadow-lg flex flex-col justify-between relative ${
                tier.popular
                  ? "border-cummins-red ring-2 ring-cummins-red/20"
                  : "border-neutral-200/80"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -tranneutral-x-1/2 bg-cummins-red text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                  Most Selected by Clients
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-neutral-900 font-heading">{tier.name}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{tier.desc}</p>
                <div className="pt-4 border-t border-neutral-100 space-y-2.5">
                  {tier.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-cummins-red flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => openQuote()}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                    tier.popular
                      ? "bg-cummins-red text-white hover:bg-cummins-red-dark shadow-md"
                      : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
                  }`}
                >
                  Inquire For Contract
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
