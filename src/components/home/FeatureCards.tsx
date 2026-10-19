"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Shield, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const FeatureCards: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const t = translations[language];

  const cards = [
    {
      title: t.powerGenTitle,
      desc: t.powerGenDesc,
      href: "/power-generation",
      image: "/uploads/2023/05/generator.png",
      icon: Zap,
      gradient: "from-red-600 to-cummins-red",
    },
    {
      title: t.cumminsKitTitle,
      desc: t.cumminsKitDesc,
      href: "/cummins-kit",
      image: "/uploads/2023/05/genuine-parts-box-800x400-1.jpg",
      icon: Shield,
      gradient: "from-slate-900 to-slate-800",
    },
    {
      title: t.imcServicesTitle,
      desc: t.imcServicesDesc,
      href: "/imc-services",
      image: "/uploads/2023/05/field-service.jpg",
      icon: Wrench,
      gradient: "from-red-700 to-slate-900",
    },
  ];

  return (
    <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              href={card.href}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-cummins-red/30"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-cummins-red to-red-400 group-hover:h-2 transition-all" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-cummins-red flex items-center justify-center group-hover:bg-cummins-red group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="relative w-20 h-16 opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 uppercase font-heading group-hover:text-cummins-red transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-cummins-red">
                <span className="uppercase tracking-wider">
                  {language === "en" ? "Explore More" : language === "ar" ? "اكتشف المزيد" : "زیاتر ببینە"}
                </span>
                <div className="w-7 h-7 rounded-full bg-red-50 group-hover:bg-cummins-red group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? "rotate-180" : ""}`} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
