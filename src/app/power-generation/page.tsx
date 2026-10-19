"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { ProductGrid } from "@/components/products/ProductGrid";
import { products } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function PowerGenerationPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-neutral-50 min-h-screen pb-24">
      {/* Page Hero Banner */}
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/imc-bg-slider.jpeg"
            alt="Cummins Generators"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cummins-red/20 border border-cummins-red/40 text-cummins-red text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.powerSystem}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {t.catalogTitle}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {t.catalogSubtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Main Catalog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
