"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Gauge, Weight, Maximize2, Activity } from "lucide-react";
import { Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";
import { ProductDetailsModal } from "./ProductDetailsModal";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language, isRtl } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  const [imageError, setImageError] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const imgSrc =
    !imageError && product.images && product.images.length > 0 && product.images[0]
      ? product.images[0]
      : "/uploads/2023/05/generator.png";

  const attrs = product.attributes;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-[#E2231B]">
      <button type="button" onClick={() => setDetailsOpen(true)} aria-label={language === "en" ? `View full specifications for ${product.name}` : language === "ar" ? `عرض المواصفات الكاملة لـ ${product.name}` : `بینینی تایبەتمەندییە تەواوەکانی ${product.name}`} className="block w-full text-start focus-visible:outline-2 focus-visible:outline-[#E2231B]">
        {/* Generator Image Header */}
        <div className="relative h-56 w-full bg-neutral-50 p-6 flex items-center justify-center overflow-hidden border-b border-neutral-200">
          <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
            <Image
              src={imgSrc}
              alt={product.name}
              fill
              className="object-contain"
              onError={() => setImageError(true)}
            />
          </div>

          {/* Standby Rating Badge */}
          {attrs.standby_kva_kw && (
            <div className="absolute top-3 right-3 bg-[#E2231B] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
              {attrs.standby_kva_kw.split("-")[0]?.trim() || attrs.standby_kva_kw}
            </div>
          )}
        </div>

        {/* Product Info */}
          <div className="p-5 space-y-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#E2231B]">
              Cummins Power Generation
            </span>
            <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#E2231B] transition-colors font-heading mt-0.5">
              {product.name}
            </h3>
            <span className="inline-block mt-2 text-xs font-bold text-[#E2231B]">{language === "en" ? "View full specifications" : language === "ar" ? "عرض المواصفات الكاملة" : "بینینی تایبەتمەندییە تەواوەکان"}</span>
          </div>

          {/* Key Spec Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs text-neutral-600 bg-neutral-50 p-3 rounded-xl border border-neutral-200">
            {attrs.engine_model && (
              <div className="flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 text-[#E2231B] flex-shrink-0" />
                <span className="truncate font-medium">{attrs.engine_model}</span>
              </div>
            )}
            {attrs.frequency_hz && (
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#E2231B] flex-shrink-0" />
                <span className="truncate font-medium">{attrs.frequency_hz}</span>
              </div>
            )}
            {attrs.dry_weight_kg && (
              <div className="flex items-center gap-1.5">
                <Weight className="w-3.5 h-3.5 text-[#E2231B] flex-shrink-0" />
                <span className="truncate font-medium">{attrs.dry_weight_kg}</span>
              </div>
            )}
            {attrs.dimensions_lwh && (
              <div className="flex items-center gap-1.5 col-span-2">
                <Maximize2 className="w-3.5 h-3.5 text-[#E2231B] flex-shrink-0" />
                <span className="truncate font-medium text-[11px]">{attrs.dimensions_lwh}</span>
              </div>
            )}
          </div>
        </div>
      </button>

      {/* Action Footer */}
      <div className="p-5 pt-0">
        <button
          onClick={() => openQuote(product)}
          className="w-full py-2.5 bg-[#111111] hover:bg-[#E2231B] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors duration-200 flex items-center justify-center shadow-sm"
        >
          <span>{t.requestQuoteForThis}</span>
        </button>
      </div>
      {detailsOpen && <ProductDetailsModal product={product} onClose={() => setDetailsOpen(false)} />}
    </div>
  );
};
