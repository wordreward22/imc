"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { subpageTranslations } from "@/data/subpageTranslations";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CircularFeatureBlock } from "@/components/subpage/CircularFeatureBlock";
import { MediaFeatureList } from "@/components/subpage/MediaFeatureList";
import { AdvantageCardsGrid } from "@/components/subpage/AdvantageCardsGrid";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";

export default function RenewablePowerPage() {
  const { language } = useLanguage();
  const t = subpageTranslations[language].renewablePower;

  return (
    <div className="bg-white min-h-screen pb-28">
      {/* 1. Page Hero Banner */}
      <SubpageHero
        subtitle={t.hero.subtitle}
        title={t.hero.title}
        accentWord={t.hero.accentWord}
        watermark={t.hero.watermark}
        bgImage="/uploads/2023/06/solar-farm-rocky-mount_hero.jpg"
      />

      {/* 2. Section 1: Renewable Energy Circular Feature */}
      <CircularFeatureBlock
        subtitle={t.circular.subtitle}
        title={t.circular.title}
        accentWord={t.circular.accentWord}
        paragraphs={t.circular.paragraphs}
        image="/uploads/2023/06/imc_renewable_power.webp"
        badgeTitle={t.circular.badgeTitle}
        badgeText={t.circular.badgeText}
      />

      {/* 3. Section 2: Customized Energy Solutions (Media Feature List) */}
      <MediaFeatureList
        title={t.media.title}
        accentWord={t.media.accentWord}
        intro={t.media.intro}
        image="/uploads/2023/06/solar-farm-rocky-mount_hero.jpg"
        items={t.media.items}
      />

      {/* 4. Section 3: Renewable Solutions Grid */}
      <AdvantageCardsGrid
        subtitle={t.solutions.subtitle}
        title={t.solutions.title}
        accentWord={t.solutions.accentWord}
        watermark={t.solutions.watermark}
        cards={t.solutions.cards}
      />

      {/* 5. Section 4: The Genuine Difference CTA Banner */}
      <CtaStatsBanner
        title={t.cta.title}
        desc={t.cta.desc}
        buttonText={t.cta.buttonText}
        bgImage="/uploads/2023/06/solar-farm-rocky-mount_hero.jpg"
        stats={t.cta.stats}
      />
    </div>
  );
}
