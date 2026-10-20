"use client";

import React from "react";
import { getSourceCopy, SourceCopyPage } from "@/components/subpage/SourceCopyPage";
import { useLanguage } from "@/context/LanguageContext";
import { subpageTranslations } from "@/data/subpageTranslations";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CircularFeatureBlock } from "@/components/subpage/CircularFeatureBlock";
import { MediaFeatureList } from "@/components/subpage/MediaFeatureList";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";

export default function EnginesPage() {
  const { language } = useLanguage();
  const t = subpageTranslations[language].engines;

  if (getSourceCopy(language, "engines")) {
    return <SourceCopyPage pageKey="engines" hero={t.hero} image="/uploads/2023/05/engine-closeup-banner.jpg" />;
  }

  return (
    <div className="bg-white min-h-screen pb-28">
      {/* 1. Page Hero Banner */}
      <SubpageHero
        subtitle={t.hero.subtitle}
        title={t.hero.title}
        accentWord={t.hero.accentWord}
        watermark={t.hero.watermark}
        bgImage="/uploads/2023/05/engine-closeup-banner.jpg"
      />

      {/* 2. Section 1: Count on us / Cummins Engines (Circular Graphic) */}
      <CircularFeatureBlock
        subtitle={t.circular1.subtitle}
        title={t.circular1.title}
        accentWord={t.circular1.accentWord}
        paragraphs={t.circular1.paragraphs}
        image="/uploads/2023/05/engine-closeup-banner.jpg"
        badgeTitle={t.circular1.badgeTitle}
        badgeText={t.circular1.badgeText}
      />

      {/* 3. Section 2: Core Strengths (Media Feature with Numbered Points) */}
      <MediaFeatureList
        title={t.media.title}
        accentWord={t.media.accentWord}
        intro={t.media.intro}
        image="/uploads/2023/05/engine-technician-shop-800.jpg"
        items={t.media.items}
      />

      {/* 4. Section 3: After Sales Support (Circular Graphic Block) */}
      <CircularFeatureBlock
        subtitle={t.circular2.subtitle}
        title={t.circular2.title}
        accentWord={t.circular2.accentWord}
        paragraphs={t.circular2.paragraphs}
        image="/uploads/2023/05/engine-technician-shop-800.jpg"
        badgeTitle={t.circular2.badgeTitle}
        badgeText={t.circular2.badgeText}
      />

      {/* 5. Section 4: The Genuine Difference CTA Banner */}
      <CtaStatsBanner
        title={t.cta.title}
        desc={t.cta.desc}
        buttonText={t.cta.buttonText}
        bgImage="/uploads/2023/05/engine-closeup-banner.jpg"
        stats={t.cta.stats}
      />
    </div>
  );
}
