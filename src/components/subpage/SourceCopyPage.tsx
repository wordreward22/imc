"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";
import { SubpageHero } from "./SubpageHero";
import { VideoModal } from "./VideoModal";
import { useLanguage, type Language } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import sourceCopy from "@/data/sourceCopy.json";

type Block = { kind: "heading" | "paragraph" | "listItem" | "label"; text: string };
type SourcePage = { title: string; blocks: Block[]; media: string[]; videos: string[]; contactCtas: string[] };
type SourcePages = Record<Language, Record<string, SourcePage | undefined>>;
type Section = { heading: string; eyebrow?: string; body: Block[] };
type ContentGroup = { kind: "section"; section: Section } | { kind: "cards"; heading?: string; sections: Section[] };
type Hero = { subtitle: string; title: string; accentWord: string; watermark: string };

export function getSourceCopy(language: Language, pageKey: string): SourcePage | undefined {
  const page = (sourceCopy as SourcePages)[language][pageKey];
  return page?.blocks.length ? page : undefined;
}

export function getSourceParagraphs(language: Language, pageKey: string): string[] {
  return getSourceCopy(language, pageKey)?.blocks.filter((block) => block.kind === "paragraph").map((block) => block.text) ?? [];
}

function organizeBlocks(blocks: Block[], title: string) {
  const sections: Section[] = [];
  let eyebrow = "";
  for (const block of blocks) {
    if (block.kind === "heading") {
      if (block.text.trim().toLocaleLowerCase() === title.trim().toLocaleLowerCase() && sections.length < 2) continue;
      sections.push({ heading: block.text, eyebrow: eyebrow || undefined, body: [] });
      eyebrow = "";
    } else if (block.kind === "label" && !sections.length) {
      eyebrow = block.text;
    } else {
      if (!sections.length) sections.push({ heading: title, body: [] });
      sections[sections.length - 1].body.push(block);
    }
  }
  const introIndex = sections.findIndex((section) => section.body.some((block) => block.kind === "paragraph"));
  const intro = sections[introIndex >= 0 ? introIndex : 0];
  return { intro, rest: sections.slice(introIndex >= 0 ? introIndex + 1 : 1) };
}

function Body({ blocks }: { blocks: Block[] }) {
  return <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-7 sm:leading-8">
    {blocks.map((block, index) => block.kind === "listItem" ? (
      <p key={index} className="flex gap-3"><span className="text-[#E2231B] font-bold" aria-hidden="true">•</span><span>{block.text}</span></p>
    ) : block.kind === "label" ? (
      <p key={index} className="font-semibold text-neutral-800">{block.text}</p>
    ) : <p key={index}>{block.text}</p>)}
  </div>;
}

function groupContent(sections: Section[], pageKey: string): ContentGroup[] {
  const groups: ContentGroup[] = [];
  const featureCounts: Record<string, number> = { fleetGuard: 4, oils: 4, masterRebuild: 5 };
  for (let index = 0; index < sections.length;) {
    const section = sections[index];
    const nextCount = featureCounts[pageKey] || 0;
    if (nextCount && section.body.length === 0 && sections.slice(index + 1, index + nextCount + 1).length === nextCount
      && sections.slice(index + 1, index + nextCount + 1).every((item) => item.body.length > 0)) {
      groups.push({ kind: "cards", heading: section.heading, sections: sections.slice(index + 1, index + nextCount + 1) });
      index += nextCount + 1;
      continue;
    }
    if (pageKey === "cumminsKit" && section.body.length === 0) {
      let end = index;
      while (end < sections.length && sections[end].body.length === 0) end++;
      if (end - index >= 3) {
        groups.push({ kind: "cards", sections: sections.slice(index, end) });
        index = end;
        continue;
      }
    }
    groups.push({ kind: "section", section });
    index++;
  }
  return groups;
}

export function SourceCopyPage({ pageKey, hero, image }: { pageKey: string; hero: Hero; image: string }) {
  const { language, isRtl } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const page = getSourceCopy(language, pageKey);
  if (!page) return null;

  const originalHeading = page.blocks.find((block) => block.kind === "heading")?.text || page.title;
  const heroWords = originalHeading.trim().split(/\s+/);
  const originalHero = heroWords.length > 1
    ? { ...hero, title: heroWords.slice(0, -1).join(" "), accentWord: heroWords[heroWords.length - 1] }
    : { ...hero, title: originalHeading, accentWord: "" };
  const { intro, rest } = organizeBlocks(page.blocks, page.title);
  const quoteHeading = /quote|اقتباس|عرض سعر|داوا|نرخ/i;
  const authHeading = /authorized|distribut|المعتمد|المعتمدة|دابین|بریکار/i;
  const authorization = rest.find((section) => authHeading.test(section.heading));
  const quote = rest.find((section) => quoteHeading.test(section.heading));
  const content = rest.filter((section) => section !== authorization && section !== quote);
  const groups = groupContent(content, pageKey);
  const media = page.media.filter((source) => source !== image && source !== page.media[0]);
  const watchVideo = { en: "Watch video", ar: "شاهد الفيديو", ku: "ڤیدیۆکە ببینە" }[language];
  const ctaLabel = pageKey === "engines" || pageKey === "renewablePower"
    ? translations[language].contactUs : translations[language].getQuote;
  const ctaLabels = page.contactCtas.length ? page.contactCtas : [ctaLabel];

  return <main className="bg-white min-h-screen">
    <SubpageHero {...originalHero} bgImage={image} />

    {intro && <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative min-h-72 sm:min-h-[430px] overflow-hidden rounded-2xl bg-neutral-100">
          <Image src={page.media[0] || image} alt={page.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="max-w-xl">
          {intro.eyebrow && <p className="text-[#E2231B] text-xs font-bold uppercase tracking-widest mb-4">{intro.eyebrow}</p>}
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-neutral-900 leading-tight mb-6">{intro.heading}</h2>
          <Body blocks={intro.body} />
          {authorization && <div className="mt-8 flex items-start gap-3 border-s-4 border-[#E2231B] bg-neutral-50 p-4 text-sm text-neutral-700"><ShieldCheck className="w-5 h-5 shrink-0 text-[#E2231B]" /><div><strong className="block text-neutral-900">{authorization.heading}</strong><Body blocks={authorization.body} /></div></div>}
        </div>
      </div>
    </section>}

    {groups.map((group, index) => {
      if (group.kind === "cards") return <section key={`cards-${index}`} className="bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          {group.heading && <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-neutral-900 mb-9">{group.heading}</h2>}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {group.sections.map((item) => <article key={item.heading} className="rounded-2xl bg-white border border-neutral-200 border-t-4 border-t-[#E2231B] p-6 shadow-sm">
              <h3 className="font-heading font-bold text-lg text-neutral-900 mb-3">{item.heading}</h3>
              <Body blocks={item.body} />
            </article>)}
          </div>
        </div>
      </section>;
      const section = group.section;
      const sectionImage = media[index] || null;
      if (section.body.length === 0 && index === groups.length - 1) return null;
      return <section key={`${section.heading}-${index}`} className={index % 2 ? "bg-white" : "bg-neutral-50"}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid gap-8 lg:gap-14 items-center lg:grid-cols-2">
            <div className="max-w-xl">
              <span className="inline-block w-11 h-1 bg-[#E2231B] mb-5" aria-hidden="true" />
              {section.eyebrow && <p className="text-[#E2231B] text-xs font-bold uppercase tracking-wider mb-3">{section.eyebrow}</p>}
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-neutral-900 leading-tight">{section.heading}</h2>
              {sectionImage && <div className="mt-6"><Body blocks={section.body} /></div>}
            </div>
            {sectionImage ? <div className="relative min-h-64 sm:min-h-80 overflow-hidden rounded-2xl bg-neutral-100">
              <Image src={sectionImage} alt={section.heading} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div> : <Body blocks={section.body} />}
          </div>
        </div>
      </section>;
    })}

    {page.videos.length > 0 && <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-t border-neutral-200">
      {page.videos.map((video) => <button key={video} onClick={() => setActiveVideo(video)} className="inline-flex items-center gap-3 bg-[#E2231B] hover:bg-[#9E0202] text-white font-bold text-sm px-7 py-4 rounded-xl transition-colors"><Play className="h-4 w-4" />{watchVideo}</button>)}
    </section>}

    <section className="bg-[#111111] text-white py-14 sm:py-20 border-t-4 border-[#E2231B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">{quote?.heading || (content[content.length - 1]?.body.length === 0 ? content[content.length - 1].heading : page.title)}</h2>
          {quote && <div className="mt-3 [&_div]:text-neutral-300"><Body blocks={quote.body} /></div>}
        </div>
        <div className="flex flex-wrap gap-3">
          {ctaLabels.map((label) => <Link key={label} href="/contact" className="inline-flex items-center gap-3 bg-[#E2231B] hover:bg-[#9E0202] text-white font-bold text-sm px-7 py-4 rounded-xl transition-colors">{label}<ArrowRight className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} /></Link>)}
        </div>
      </div>
    </section>
    {activeVideo && <VideoModal isOpen videoUrl={activeVideo} onClose={() => setActiveVideo(null)} />}
  </main>;
}
