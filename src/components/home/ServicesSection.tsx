"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench, FileText, Settings, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import homeSource from "@/data/homeSource.json";

export const ServicesSection: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const t = translations[language];
  const sourceServices = language === "ku" ? null : homeSource[language].services;

  const services = [
    {
      id: "field-service",
      title: sourceServices?.fieldService.title ?? t.fieldService,
      desc: sourceServices?.fieldService.description ?? t.fieldServiceDesc,
      image: "/uploads/2023/05/field-service.jpg",
      href: "/repairs",
      icon: Wrench,
    },
    {
      id: "service-contracts",
      title: sourceServices?.serviceContracts.title ?? t.serviceContracts,
      desc: sourceServices?.serviceContracts.description ?? t.serviceContractsDesc,
      image: "/uploads/2023/05/service-contracts-1.jpeg",
      href: "/preventative-maintenance",
      icon: FileText,
    },
    {
      id: "workshop-repairs",
      title: sourceServices?.workshopRepairs.title ?? t.workshopRepairs,
      desc: sourceServices?.workshopRepairs.description ?? t.workshopRepairsDesc,
      image: "/uploads/2023/05/engine-technician-shop-800.jpg",
      href: "/master-rebuild",
      icon: Settings,
    },
    {
      id: "training",
      title: sourceServices?.training.title ?? t.training,
      desc: sourceServices?.training.description ?? t.trainingDesc,
      image: "/uploads/2023/05/engine-closeup-banner.jpg",
      href: "/training",
      icon: GraduationCap,
    },
  ];

  return (
    <section className="py-20 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-4 py-1 rounded-full bg-white text-[#E2231B] text-xs font-bold uppercase tracking-widest shadow-sm border border-neutral-200">
            {language === "en" ? "Always Customer Driven" : language === "ar" ? "خدمات الصيانة" : "هەمیشە لە خزمەتی کڕیاردا"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight font-heading">
            {language === "ar" ? (
              <>خدمات <span className="text-[#E2231B]">شركة المعدات العالمية للتجارة العامة</span></>
            ) : language === "ku" ? (
              <>خزمەتگوزارییەکانی <span className="text-[#E2231B]">IMC</span></>
            ) : (
              <>IMC <span className="text-[#E2231B]">Services</span></>
            )}
          </h2>
          <div className="w-16 h-1 bg-[#E2231B] mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-[#E2231B] hover:-translate-y-1"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-black">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-black/60 text-white flex items-center justify-center border border-white/20">
                      <Icon className="w-4 h-4 text-[#E2231B]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-2.5">
                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#E2231B] transition-colors font-heading">
                      {item.title}
                    </h3>
                    <p className="text-[#666666] text-xs leading-relaxed line-clamp-4">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-5 pb-5 pt-2">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E2231B] hover:text-[#9E0202] uppercase tracking-wider transition-colors"
                  >
                    <span>{t.learnMore}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? "rotate-180" : ""}`} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
