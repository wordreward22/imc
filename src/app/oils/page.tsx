"use client";

import React from "react";
import { getSourceCopy, SourceCopyPage } from "@/components/subpage/SourceCopyPage";
import { useLanguage } from "@/context/LanguageContext";
import { subpageTranslations } from "@/data/subpageTranslations";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CircularFeatureBlock } from "@/components/subpage/CircularFeatureBlock";
import { MediaFeatureList } from "@/components/subpage/MediaFeatureList";
import { AdvantageCardsGrid } from "@/components/subpage/AdvantageCardsGrid";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";

export default function OilsPage() {
  const { language } = useLanguage();
  const t = subpageTranslations[language].oils;

  if (getSourceCopy(language, "oils")) {
    return <SourceCopyPage pageKey="oils" hero={t.hero} image="/uploads/2023/06/us_dtc_atf_bottles_393x250.webp" />;
  }

  return (
    <div className="bg-white min-h-screen pb-28">
      {/* 1. Page Hero Banner */}
      <SubpageHero
        subtitle={t.hero.subtitle}
        title={t.hero.title}
        accentWord={t.hero.accentWord}
        watermark={t.hero.watermark}
        bgImage="/uploads/2023/06/us_dtc_atf_bottles_393x250.webp"
      />

      {/* 2. Section 1: Valvoline Premium Blue Oil Circular Feature */}
      <CircularFeatureBlock
        subtitle={t.circular.subtitle}
        title={t.circular.title}
        accentWord={t.circular.accentWord}
        paragraphs={t.circular.paragraphs}
        image="/uploads/2023/06/us_dtc_atf_bottles_393x250.webp"
        badgeTitle={t.circular.badgeTitle}
        badgeText={t.circular.badgeText}
      />

      {/* 3. Section 2: Product Benefits Media Feature List */}
      <MediaFeatureList
        title={t.media.title}
        accentWord={t.media.accentWord}
        intro={t.media.intro}
        image="/uploads/2023/05/cummins.jpeg"
        items={t.media.items}
      />

      {/* 4. Section 3: Premium Blue Advantages Grid */}
      <AdvantageCardsGrid
        subtitle={t.advantages.subtitle}
        title={t.advantages.title}
        accentWord={t.advantages.accentWord}
        watermark={t.advantages.watermark}
        cards={t.advantages.cards}
      />

      {/* 5. Section 4: The Genuine Difference CTA Banner */}
      <CtaStatsBanner
        title={t.cta.title}
        desc={t.cta.desc}
        buttonText={t.cta.buttonText}
        bgImage="/uploads/2023/06/us_dtc_atf_bottles_393x250.webp"
        stats={t.cta.stats}
      />
    </div>
  );
}
