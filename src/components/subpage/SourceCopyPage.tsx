"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SubpageHero } from "./SubpageHero";
import { useLanguage, type Language } from "@/context/LanguageContext";
import { useQuote } from "@/context/QuoteContext";
import { translations } from "@/data/translations";
import sourceCopy from "@/data/sourceCopy.json";

type Block = { kind: "heading" | "paragraph"; text: string };
type SourcePage = { title: string; blocks: Block[] };
type SourcePages = Record<Language, Record<string, SourcePage | undefined>>;

export function getSourceCopy(language: Language, pageKey: string): SourcePage | undefined {
  return (sourceCopy as SourcePages)[language][pageKey];
}

export function getSourceParagraphs(language: Language, pageKey: string): string[] {
  return getSourceCopy(language, pageKey)?.blocks
    .filter((block) => block.kind === "paragraph")
    .map((block) => block.text) ?? [];
}

type Hero = { subtitle: string; title: string; accentWord: string; watermark: string };

export function SourceCopyPage({ pageKey, hero, image }: { pageKey: string; hero: Hero; image: string }) {
  const { language, isRtl } = useLanguage();
  const { openQuote } = useQuote();
  const page = getSourceCopy(language, pageKey);
  if (!page) return null;

  const sections: { heading?: string; paragraphs: string[] }[] = [];
  for (const block of page.blocks) {
    if (block.kind === "heading") {
      if (/^(Cummins Authorized Distributer|موزع كمنز المعتمد)$/i.test(block.text)) continue;
      sections.push({ heading: block.text, paragraphs: [] });
    } else {
      if (!sections.length) sections.push({ paragraphs: [] });
      sections[sections.length - 1].paragraphs.push(block.text);
    }
  }
  const visibleSections = sections.filter((section) => section.heading || section.paragraphs.length);

  return (
    <div className="bg-white min-h-screen">
      <SubpageHero {...hero} bgImage={image} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-12 sm:space-y-16">
        {visibleSections.map((section, index) => (
          <section key={`${section.heading || 'intro'}-${index}`} className={`grid gap-8 lg:gap-14 items-center ${index === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.7fr)]'}`}>
            {index === 0 ? (
              <div className="relative min-h-72 sm:min-h-96 rounded-3xl overflow-hidden bg-neutral-900 shadow-xl border border-neutral-200">
                <Image src={image} alt={page.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            ) : (
              <div className="self-start pt-2">
                <span className="text-[#E2231B] text-xs font-bold uppercase tracking-widest">IMC Iraq</span>
                <div className="mt-3 h-1 w-14 bg-[#E2231B] rounded-full" />
              </div>
            )}
            <div className="space-y-5">
              {section.heading && <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 font-heading leading-tight">{section.heading}</h2>}
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex} className="text-neutral-600 text-sm sm:text-base leading-8">{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <section className="bg-[#111111] text-white py-14 sm:py-20 border-t-4 border-[#E2231B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">{page.title}</h2>
          <button onClick={() => openQuote()} className="inline-flex items-center gap-3 bg-[#E2231B] hover:bg-[#9E0202] text-white font-bold text-sm px-7 py-4 rounded-xl transition-colors">
            {translations[language].getQuote}
            <ArrowRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </section>
    </div>
  );
}
