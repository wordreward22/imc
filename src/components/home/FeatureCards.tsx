"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, SlidersHorizontal, Settings, Wrench } from "lucide-react";
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
      icon: Settings,
    },
    {
      title: t.cumminsKitTitle,
      desc: t.cumminsKitDesc,
      href: "/cummins-kit",
      image: "/uploads/2023/05/genuine-parts-box-800x400-1.jpg",
      icon: SlidersHorizontal,
    },
    {
      title: t.imcServicesTitle,
      desc: t.imcServicesDesc,
      href: "/imc-services",
      image: "/uploads/2023/05/field-service.jpg",
      icon: Wrench,
    },
  ];

  return (
    <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              href={card.href}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#E2231B]"
            >
              {/* Top Solid Red Accent Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-[#E2231B]" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E2231B] flex items-center justify-center group-hover:bg-[#E2231B] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="relative w-20 h-16 opacity-85 group-hover:opacity-100 transition-all">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 uppercase font-heading group-hover:text-[#E2231B] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#E2231B]">
                <span className="uppercase tracking-wider">
                  {language === "en" ? "Explore More" : language === "ar" ? "اكتشف المزيد" : "زیاتر ببینە"}
                </span>
                <div className="w-7 h-7 rounded-full bg-red-50 group-hover:bg-[#E2231B] group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? "rotate-180" : ""}`} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Cummins Authorized Seller Divider Banner */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 py-6 border-b border-neutral-200">
        <div className="flex items-center gap-4">
          <h4 className="text-lg sm:text-xl font-bold text-neutral-900 font-heading">
            {language === "en"
              ? "Award Wining Cummins Authorized Seller."
              : language === "ar"
              ? "الوكيل الحائز على جوائز والمعتمد من كومنز."
              : "بریکاری ڕێگەپێدراوی کۆمنز خاوەنی خەڵات."}
          </h4>
          <div className="hidden sm:block w-16 h-[2px] bg-[#9E0202]" />
        </div>
        <div className="relative w-28 h-10 flex-shrink-0">
          <Image
            src="/uploads/2023/02/CUMMINS-PNG.png"
            alt="Cummins Official"
            fill
            className="object-contain object-right"
          />
        </div>
      </div>
    </section>
  );
};
