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

export default function PreventativeMaintenancePage() {
  const { language } = useLanguage();
  const t = subpageTranslations[language].preventativeMaintenance;

  if (getSourceCopy(language, "preventativeMaintenance")) {
    return <SourceCopyPage pageKey="preventativeMaintenance" hero={t.hero} image="/uploads/2023/05/service-contracts-2.jpeg" />;
  }

  return (
    <div className="bg-white min-h-screen pb-28">
      {/* 1. Page Hero Banner */}
      <SubpageHero
        subtitle={t.hero.subtitle}
        title={t.hero.title}
        accentWord={t.hero.accentWord}
        watermark={t.hero.watermark}
        bgImage="/uploads/2023/05/service-contracts-2.jpeg"
      />

      {/* 2. Section 1: Maintenance is One Key to Reliability (Circular Feature Block) */}
      <CircularFeatureBlock
        subtitle={t.circular.subtitle}
        title={t.circular.title}
        accentWord={t.circular.accentWord}
        paragraphs={t.circular.paragraphs}
        image="/uploads/2023/05/service-contracts-1.jpeg"
        badgeTitle={t.circular.badgeTitle}
        badgeText={t.circular.badgeText}
      />

      {/* 3. Section 2: Service Contracts Advantages (Media Feature List) */}
      <MediaFeatureList
        title={t.media.title}
        accentWord={t.media.accentWord}
        intro={t.media.intro}
        image="/uploads/2023/05/field-service.jpg"
        items={t.media.items}
      />

      {/* 4. Section 3: Preventative Maintenance Packages Grid */}
      <AdvantageCardsGrid
        subtitle={t.packages.subtitle}
        title={t.packages.title}
        accentWord={t.packages.accentWord}
        watermark={t.packages.watermark}
        cards={t.packages.cards}
      />

      {/* 5. Section 4: The Genuine Difference CTA Banner */}
      <CtaStatsBanner
        title={t.cta.title}
        desc={t.cta.desc}
        buttonText={t.cta.buttonText}
        bgImage="/uploads/2023/05/service-contracts-2.jpeg"
        stats={t.cta.stats}
      />
    </div>
  );
}
