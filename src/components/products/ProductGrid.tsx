"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const { language } = useLanguage();
  const t = translations[language];

  const [search, setSearch] = useState("");
  const [powerFilter, setPowerFilter] = useState<"all" | "low" | "mid" | "high">("all");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Search filter
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        (p.attributes.engine_model &&
          p.attributes.engine_model.toLowerCase().includes(search.toLowerCase()));

      if (!matchesSearch) return false;

      // Power filter
      if (powerFilter === "all") return true;

      const standbyStr = p.attributes.standby_kva_kw || "";
      const kvaMatch = standbyStr.match(/(\d+)\s*(?:kva|k\.v\.a)/i);
      const kva = kvaMatch ? parseInt(kvaMatch[1], 10) : 0;

      if (powerFilter === "low") {
        return kva > 0 && kva < 500;
      }
      if (powerFilter === "mid") {
        return kva >= 500 && kva <= 1500;
      }
      if (powerFilter === "high") {
        return kva > 1500;
      }

      return true;
    });
  }, [products, search, powerFilter]);

  return (
    <div className="space-y-8">
      {/* Controls Bar: Search & Power Filter */}
      <div className="bg-white p-5 rounded-2xl shadow-sm border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-xs sm:text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#E2231B]/20 focus:border-[#E2231B] transition-all"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          <div className="flex items-center gap-1 text-xs text-neutral-400 mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t.filterByPower}</span>
          </div>

          {(
            [
              { key: "all", label: t.allPower },
              { key: "low", label: t.lowPower },
              { key: "mid", label: t.midPower },
              { key: "high", label: t.highPower },
            ] as const
          ).map((item) => (
            <button
              key={item.key}
              onClick={() => setPowerFilter(item.key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                powerFilter === item.key
                  ? "bg-[#E2231B] text-white shadow-sm"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-neutral-500 px-1">
        <span>
          {language === "en"
            ? `Showing ${filteredProducts.length} of ${products.length} Cummins Generator Models`
            : language === "ar"
            ? `عرض ${filteredProducts.length} من إجمالي ${products.length} موديل مولد كومنز`
            : `پیشاندانی ${filteredProducts.length} لە کۆی ${products.length} مۆلیدەی کۆمنز`}
        </span>
      </div>

      {/* Grid of Cards */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-neutral-200 p-8 space-y-3">
          <p className="text-neutral-500 text-sm">{t.noProductsFound}</p>
          <button
            onClick={() => {
              setSearch("");
              setPowerFilter("all");
            }}
            className="text-xs font-bold text-[#E2231B] underline hover:text-[#9E0202]"
          >
            {language === "en" ? "Reset Filters" : "إعادة ضبط التصفية"}
          </button>
        </div>
      )}
    </div>
  );
};
