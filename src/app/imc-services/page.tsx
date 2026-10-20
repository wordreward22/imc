"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Wrench, ShieldCheck, FileText, Settings, GraduationCap, ArrowRight } from "lucide-react";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";
import { useLanguage } from "@/context/LanguageContext";
import { useQuote } from "@/context/QuoteContext";

export default function ServicesPage() {
  const { language } = useLanguage();
  const { openQuote } = useQuote();

  const services = [
    {
      title: "Field Service",
      desc: "Reliable field service options for Cummins generators, providing prompt response, expert diagnosis, preventive maintenance, on-site repairs, and technical support to ensure optimal performance and minimize downtime.",
      href: "/repairs",
      image: "/uploads/2023/05/field-service.jpg",
      icon: Wrench,
    },
    {
      title: "Service Contracts",
      desc: "Service contracts for Cummins generators deliver peace of mind through scheduled maintenance, priority response, on-site repairs, and the use of genuine Cummins parts, guaranteeing uninterrupted power and optimal performance for customer business.",
      href: "/preventative-maintenance",
      image: "/uploads/2023/05/service-contracts-1.jpeg",
      icon: FileText,
    },
    {
      title: "Workshop Repairs",
      desc: "Workshop repairs for Cummins generators exemplify our commitment to professionalism and excellence. With our team of highly skilled technicians and access to a wide range of specialized tools and equipment, we deliver expert diagnosis, repairs using genuine parts and stringent quality assurance.",
      href: "/master-rebuild",
      image: "/uploads/2023/05/engine-technician-shop-800.jpg",
      icon: Settings,
    },
    {
      title: "Training",
      desc: "We believe that knowledge and skills are key to maximizing the performance and efficiency of your Cummins generators. That’s why we are proud to offer a range of comprehensive training programs. Apply now to boost your technical skills.",
      href: "/training",
      image: "/uploads/2023/05/engine-closeup-banner.jpg",
      icon: GraduationCap,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Subpage Hero */}
      <SubpageHero
        subtitle="IMC Iraq"
        title="IMC"
        accentWord="Services"
        watermark="IMC Iraq"
        bgImage="/uploads/2023/05/field-service.jpg"
      />

      {/* 2. Main Services Grid */}
      <section className="py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
                High Quality Services
              </span>
              <svg
                width="24"
                height="12"
                viewBox="0 0 24 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2H24"
                  stroke="#E2231B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6 6H24"
                  stroke="#E2231B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 10H24"
                  stroke="#E2231B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-heading uppercase">
              Always <span className="text-[#E2231B]">Customer Driven</span>
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
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-2xl bg-black/80 backdrop-blur-md text-[#E2231B] flex items-center justify-center border border-white/10 shadow-lg">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="absolute bottom-4 left-6">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#E2231B] block">
                          Service Pillar {idx + 1}
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
                      <span>Explore {item.title}</span>
                      <ArrowRight className="w-4 h-4" />
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
        title="Request A Quote"
        desc="The Genuine Cummins parts that you buy from a Cummins distributor or authorized dealer are built to our exact standards, meeting or exceeding original specifications on your QSK engine."
        buttonText="Request A Quote"
        bgImage="/uploads/2023/05/engine-technician-shop-800.jpg"
        stats={[
          {
            number: "300+",
            label: "Genuine overhaul kit components tested through lab analysis",
            icon: "pin",
          },
          {
            number: "100+",
            label: "Years of perfecting the design and manufacturing of Genuine Cummins parts",
            icon: "globe",
          },
        ]}
      />
    </div>
  );
}
