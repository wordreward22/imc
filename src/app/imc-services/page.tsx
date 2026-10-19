"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Wrench, ShieldCheck, FileText, Settings, GraduationCap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ServicesPage() {
  const { language, isRtl } = useLanguage();
  const t = translations[language];

  const services = [
    {
      title: t.fieldService,
      desc: t.fieldServiceDesc,
      href: "/repairs",
      image: "/uploads/2023/05/field-service.jpg",
      icon: Wrench,
    },
    {
      title: t.serviceContracts,
      desc: t.serviceContractsDesc,
      href: "/preventative-maintenance",
      image: "/uploads/2023/05/service-contracts-1.jpeg",
      icon: FileText,
    },
    {
      title: t.workshopRepairs,
      desc: t.workshopRepairsDesc,
      href: "/master-rebuild",
      image: "/uploads/2023/05/engine-technician-shop-800.jpg",
      icon: Settings,
    },
    {
      title: t.training,
      desc: t.trainingDesc,
      href: "/training",
      image: "/uploads/2023/05/engine-closeup-banner.jpg",
      icon: GraduationCap,
    },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/field-service.jpg"
            alt="IMC Services"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cummins-red/20 border border-cummins-red/40 text-cummins-red text-xs font-bold uppercase tracking-wider">
              {t.servicesSubtitle}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {t.servicesHeadline}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "Full-lifecycle technical support, certified engine overhauls, and preventative maintenance for mission-critical installations across Iraq."
                : "دعم فني متكامل عبر دورة التشغيل الكاملة وإصلاحات معتمدة للمولدات في جميع أنحاء العراق."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 w-full bg-[#111111]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-[#111111]/90 text-cummins-red flex items-center justify-center border border-white/10 shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="p-8 space-y-3">
                    <h3 className="text-2xl font-bold text-neutral-900 font-heading">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cummins-red hover:text-cummins-red-dark transition-colors"
                  >
                    <span>{t.learnMore}</span>
                    <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
