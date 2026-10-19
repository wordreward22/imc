"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Zap, Gauge, Weight, Maximize2, Shield, ArrowRight } from "lucide-react";
import { Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language, isRtl } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  const [imageError, setImageError] = useState(false);

  const imgSrc =
    !imageError && product.images && product.images.length > 0 && product.images[0]
      ? product.images[0]
      : "/uploads/2023/05/generator.png";

  const attrs = product.attributes;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      <div>
        {/* Generator Image Header with Badges */}
        <div className="relative h-56 w-full bg-gradient-to-b from-slate-100 to-slate-50 p-6 flex items-center justify-center overflow-hidden border-b border-slate-100">
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
            <div className="absolute top-3 right-3 bg-cummins-red text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md">
              {attrs.standby_kva_kw.split("-")[0]?.trim() || attrs.standby_kva_kw}
            </div>
          )}

          {/* Official Badge */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-bold px-2.5 py-0.5 rounded-md border border-slate-200 shadow-sm flex items-center gap-1">
            <Shield className="w-3 h-3 text-cummins-red" />
            <span>Cummins Official</span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5 space-y-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-cummins-red">
              Heavy Duty Diesel Generator
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-cummins-red transition-colors font-heading">
              {product.name}
            </h3>
          </div>

          {/* Key Spec Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
            {attrs.engine_model && (
              <div className="flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 text-cummins-red flex-shrink-0" />
                <span className="truncate font-medium">{attrs.engine_model}</span>
              </div>
            )}
            {attrs.frequency_hz && (
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-cummins-red flex-shrink-0" />
                <span className="truncate font-medium">{attrs.frequency_hz}</span>
              </div>
            )}
            {attrs.dry_weight_kg && (
              <div className="flex items-center gap-1.5">
                <Weight className="w-3.5 h-3.5 text-cummins-red flex-shrink-0" />
                <span className="truncate font-medium">{attrs.dry_weight_kg}</span>
              </div>
            )}
            {attrs.dimensions_lwh && (
              <div className="flex items-center gap-1.5 col-span-2">
                <Maximize2 className="w-3.5 h-3.5 text-cummins-red flex-shrink-0" />
                <span className="truncate font-medium text-[11px]">{attrs.dimensions_lwh}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 pt-0">
        <button
          onClick={() => openQuote(product)}
          className="w-full py-2.5 bg-slate-900 hover:bg-cummins-red text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group-hover:bg-cummins-red"
        >
          <Zap className="w-3.5 h-3.5" />
          <span>{t.requestQuoteForThis}</span>
        </button>
      </div>
    </div>
  );
};
