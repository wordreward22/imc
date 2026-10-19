"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench, FileText, Settings, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const ServicesSection: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const t = translations[language];

  const services = [
    {
      id: "field-service",
      title: t.fieldService,
      desc: t.fieldServiceDesc,
      image: "/uploads/2023/05/field-service.jpg",
      href: "/repairs",
      icon: Wrench,
    },
    {
      id: "service-contracts",
      title: t.serviceContracts,
      desc: t.serviceContractsDesc,
      image: "/uploads/2023/05/service-contracts-1.jpeg",
      href: "/preventative-maintenance",
      icon: FileText,
    },
    {
      id: "workshop-repairs",
      title: t.workshopRepairs,
      desc: t.workshopRepairsDesc,
      image: "/uploads/2023/05/engine-technician-shop-800.jpg",
      href: "/master-rebuild",
      icon: Settings,
    },
    {
      id: "training",
      title: t.training,
      desc: t.trainingDesc,
      image: "/uploads/2023/05/engine-closeup-banner.jpg",
      href: "/training",
      icon: GraduationCap,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-cummins-red">
            {t.servicesSubtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            {t.servicesHeadline}
          </h2>
          <div className="w-16 h-1 bg-cummins-red mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-slate-900/80 backdrop-blur-md text-cummins-red flex items-center justify-center border border-white/10">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-2.5">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-cummins-red transition-colors font-heading">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-4">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-5 pb-5 pt-2">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cummins-red hover:text-cummins-red-dark uppercase tracking-wider transition-colors"
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
