"use client";

import React from "react";
import { SubpageHero } from "@/components/subpage/SubpageHero";
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
      <SubpageHero
        subtitle="Genuine innovation. Genuine expertise."
        title="Power"
        accentWord="Generation"
        watermark="Cummins"
        bgImage="/uploads/2023/05/imc-bg-slider.jpeg"
      />

      {/* Main Catalog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
