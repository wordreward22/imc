"use client";

import React, { useEffect } from "react";
import { useQuote } from "@/context/QuoteContext";
import PowerGenerationPage from "../power-generation/page";

export default function RequestQuotePage() {
  const { openQuote } = useQuote();

  useEffect(() => {
    openQuote();
  }, [openQuote]);

  return <PowerGenerationPage />;
}
