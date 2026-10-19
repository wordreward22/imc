"use client";

import React, { createContext, useContext, useState } from "react";
import { Product } from "@/data/products";

interface QuoteContextType {
  isOpen: boolean;
  selectedProduct: Product | null;
  openQuote: (product?: Product | null) => void;
  closeQuote: () => void;
}

const QuoteContext = createContext<QuoteContextType>({
  isOpen: false,
  selectedProduct: null,
  openQuote: () => {},
  closeQuote: () => {},
});

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openQuote = (product?: Product | null) => {
    setSelectedProduct(product || null);
    setIsOpen(true);
  };

  const closeQuote = () => {
    setIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <QuoteContext.Provider
      value={{
        isOpen,
        selectedProduct,
        openQuote,
        closeQuote,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export const useQuote = () => useContext(QuoteContext);
