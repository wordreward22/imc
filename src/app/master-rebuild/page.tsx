"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { subpageTranslations } from "@/data/subpageTranslations";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CircularFeatureBlock } from "@/components/subpage/CircularFeatureBlock";
import { MediaFeatureList } from "@/components/subpage/MediaFeatureList";
import { AdvantageCardsGrid } from "@/components/subpage/AdvantageCardsGrid";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";

export default function MasterRebuildPage() {
  const { language } = useLanguage();
  const t = subpageTranslations[language].masterRebuild;

  return (
    <div className="bg-white min-h-screen pb-28">
      {/* 1. Page Hero Banner */}
      <SubpageHero
        subtitle={t.hero.subtitle}
        title={t.hero.title}
        accentWord={t.hero.accentWord}
        watermark={t.hero.watermark}
        bgImage="/uploads/2023/05/engine-technician-shop-800.jpg"
      />

      {/* 2. Section 1: Repair you can count on (Circular Graphic + Watch Video) */}
      <CircularFeatureBlock
        subtitle={t.circular1.subtitle}
        title={t.circular1.title}
        accentWord={t.circular1.accentWord}
        paragraphs={t.circular1.paragraphs}
        image="/uploads/2023/04/2pj92mb.jpg"
        badgeTitle={t.circular1.badgeTitle}
        badgeText={t.circular1.badgeText}
        buttonText={t.circular1.buttonText}
        videoUrl="https://www.youtube.com/watch?v=omZbcRGNX3I"
      />

      {/* 3. Section 2: Benefit from a Range of Advantages */}
      <MediaFeatureList
        title={t.media.title}
        accentWord={t.media.accentWord}
        intro={t.media.intro}
        image="/uploads/2023/05/cummins.jpeg"
        items={t.media.items}
      />

      {/* 4. Section 3: For Accurate Solutions (Circular Graphic Block) */}
      <CircularFeatureBlock
        subtitle={t.circular2.subtitle}
        title={t.circular2.title}
        accentWord={t.circular2.accentWord}
        paragraphs={t.circular2.paragraphs}
        image="/uploads/2023/02/SLIDER1.jpg"
        badgeTitle={t.circular2.badgeTitle}
        badgeText={t.circular2.badgeText}
      />

      {/* 5. Section 4: Range Of Advantages Grid */}
      <AdvantageCardsGrid
        subtitle={t.advantage.subtitle}
        title={t.advantage.title}
        accentWord={t.advantage.accentWord}
        watermark={t.advantage.watermark}
        cards={t.advantage.cards}
      />

      {/* 6. Section 5: The Genuine Difference CTA Banner with Stat Counters */}
      <CtaStatsBanner
        title={t.cta.title}
        desc={t.cta.desc}
        buttonText={t.cta.buttonText}
        bgImage="/uploads/2023/05/imc-slider-2.jpeg"
        stats={t.cta.stats}
      />
    </div>
  );
}
