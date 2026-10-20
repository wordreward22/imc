"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Wrench, FileText, Settings, GraduationCap, ArrowRight } from "lucide-react";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";
import { getSourceParagraphs } from "@/components/subpage/SourceCopyPage";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { subpageTranslations } from "@/data/subpageTranslations";

export default function ServicesPage() {
  const { language, isRtl } = useLanguage();
  const t = translations[language];
  const ctaData = subpageTranslations[language].repairs.cta;

  const services = [
    {
      title: t.fieldService,
      desc: t.fieldServiceDesc,
      href: "/repairs",
      image: "/uploads/2023/05/field-service.jpg",
      icon: Wrench,
      pillar: language === "ar" ? "الركيزة الخدمية الأولى" : language === "ku" ? "کۆڵەکەی یەکەمی خزمەتگوزاری" : "Service Pillar 1",
    },
    {
      title: t.serviceContracts,
      desc: t.serviceContractsDesc,
      href: "/preventative-maintenance",
      image: "/uploads/2023/05/service-contracts-1.jpeg",
      icon: FileText,
      pillar: language === "ar" ? "الركيزة الخدمية الثانية" : language === "ku" ? "کۆڵەکەی دووەمی خزمەتگوزاری" : "Service Pillar 2",
    },
    {
      title: t.workshopRepairs,
      desc: t.workshopRepairsDesc,
      href: "/master-rebuild",
      image: "/uploads/2023/05/engine-technician-shop-800.jpg",
      icon: Settings,
      pillar: language === "ar" ? "الركيزة الخدمية الثالثة" : language === "ku" ? "کۆڵەکەی سێیەمی خزمەتگوزاری" : "Service Pillar 3",
    },
    {
      title: t.training,
      desc: t.trainingDesc,
      href: "/training",
      image: "/uploads/2023/05/engine-technician-shop-800.jpg",
      icon: GraduationCap,
      pillar: language === "ar" ? "التدريب" : language === "ku" ? "ڕاهێنان" : "Training",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Subpage Hero */}
      <SubpageHero
        subtitle="IMC Iraq"
        title="IMC"
        accentWord={language === "ar" ? "الخدمات" : language === "ku" ? "خزمەتگوزارییەکان" : "Services"}
        watermark="IMC Iraq"
        bgImage="/uploads/2023/05/field-service.jpg"
      />

      {/* 2. Main Services Grid */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
                {t.servicesSubtitle}
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-heading uppercase">
              {t.servicesHeadline}
            </h2>
            <div className="w-16 h-1 bg-[#E2231B] mx-auto rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative h-64 sm:h-72 w-full bg-neutral-900 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className={`absolute top-4 ${isRtl ? "left-4" : "right-4"} w-12 h-12 rounded-2xl bg-black/80 backdrop-blur-md text-[#E2231B] flex items-center justify-center border border-white/10 shadow-lg`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className={`absolute bottom-4 ${isRtl ? "right-6 text-right" : "left-6 text-left"}`}>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#E2231B] block">
                          {item.pillar}
                        </span>
                        <h3 className="text-2xl font-bold text-white font-heading uppercase">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-8 space-y-4">
                      <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-8 pb-8 pt-2">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E2231B] hover:text-[#9E0202] transition-colors group-hover:translate-x-1 duration-200"
                    >
                      <span>{item.title}</span>
                      <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CTA Stats Banner */}
      <CtaStatsBanner
        title={ctaData.title}
        desc={getSourceParagraphs(language, "services")[0] ?? ctaData.desc}
        buttonText={ctaData.buttonText}
        bgImage="/uploads/2023/05/engine-technician-shop-800.jpg"
        stats={[]}
      />
    </div>
  );
}
