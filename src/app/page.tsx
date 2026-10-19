"use client";

import React from "react";
import { HeroSlider } from "@/components/home/HeroSlider";
import { FeatureCards } from "@/components/home/FeatureCards";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FaqSection } from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Revolution Slider */}
      <HeroSlider />

      {/* 2. Feature Cards (Power Generation, Cummins Kit, IMC Services) + Award Banner */}
      <FeatureCards />

      {/* 3. Company Overview & Mission/Vision/Values */}
      <div className="mt-8">
        <AboutSection />
      </div>

      {/* 4. IMC Services Grid (Always Customer Driven) */}
      <ServicesSection />

      {/* 5. FAQs (Freequently Asked Question) */}
      <FaqSection />
    </div>
  );
}
