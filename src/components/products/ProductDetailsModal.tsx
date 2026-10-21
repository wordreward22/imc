"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import type { Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";
import { useQuote } from "@/context/QuoteContext";
import { translations } from "@/data/translations";

export function ProductDetailsModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const { language } = useLanguage();
  const { openQuote } = useQuote();
  const closeRef = useRef<HTMLButtonElement>(null);
  const t = translations[language];
  const labels = {
    en: ["Engine model", "Standby power", "Prime power", "Frequency", "Dry weight", "Dimensions (L × W × H)"],
    ar: ["طراز المحرك", "القدرة الاحتياطية", "القدرة الأساسية", "التردد", "الوزن الجاف", "الأبعاد (الطول × العرض × الارتفاع)"],
    ku: ["مۆدێلی بزوێنەر", "هێزی یەدەگ", "هێزی سەرەکی", "دووبارەبوونەوە", "کێشی وشک", "ڕەهەندەکان (درێژی × پانی × بەرزی)"],
  }[language];
  const values = [
    product.attributes.engine_model,
    product.attributes.standby_kva_kw,
    product.attributes.prime_kva_kw,
    product.attributes.frequency_hz ? `${product.attributes.frequency_hz} Hz` : "",
    product.attributes.dry_weight_kg ? `${product.attributes.dry_weight_kg} kg` : "",
    product.attributes.dimensions_lwh,
  ];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", closeOnEscape); };
  }, [onClose]);

  return createPortal(<div className="fixed inset-0 z-[70] bg-black/70 p-3 sm:p-8 flex items-center justify-center" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <div role="dialog" aria-modal="true" aria-labelledby="product-details-title" className="w-full max-w-4xl max-h-[92dvh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-neutral-200 bg-white px-5 sm:px-8 py-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#E2231B]">Cummins Power Generation</p>
          <h2 id="product-details-title" className="font-heading text-2xl sm:text-3xl font-extrabold text-neutral-900">{product.name}</h2>
        </div>
        <button ref={closeRef} onClick={onClose} aria-label={language === "en" ? "Close specifications" : language === "ar" ? "إغلاق المواصفات" : "داخستنی تایبەتمەندییەکان"} className="shrink-0 rounded-full p-2 text-neutral-700 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-[#E2231B]"><X className="h-6 w-6" /></button>
      </div>
      <div className="grid md:grid-cols-2 gap-6 sm:gap-10 p-5 sm:p-8">
        <div className="relative min-h-56 sm:min-h-80 rounded-xl bg-neutral-50 border border-neutral-200">
          <Image src={product.images[0] || "/uploads/2023/05/generator.png"} alt={product.name} fill className="object-contain p-5" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-neutral-900 mb-4">{language === "en" ? "Full specifications" : language === "ar" ? "المواصفات الكاملة" : "تایبەتمەندییە تەواوەکان"}</h3>
          <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
            {values.map((value, index) => value ? <div key={labels[index]} className="grid grid-cols-2 gap-4 py-3 text-sm"><dt className="text-neutral-500">{labels[index]}</dt><dd className="font-semibold text-neutral-900 break-words">{value}</dd></div> : null)}
          </dl>
          <button onClick={() => { onClose(); openQuote(product); }} className="mt-6 w-full rounded-xl bg-[#E2231B] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#B41812]">{t.requestQuoteForThis}</button>
        </div>
      </div>
    </div>
  </div>, document.body);
}
