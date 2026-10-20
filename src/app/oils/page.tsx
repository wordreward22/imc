"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CircularFeatureBlock } from "@/components/subpage/CircularFeatureBlock";
import { MediaFeatureList } from "@/components/subpage/MediaFeatureList";
import { AdvantageCardsGrid } from "@/components/subpage/AdvantageCardsGrid";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";

export default function OilsPage() {
  const { language } = useLanguage();

  const oilBenefits = [
    {
      num: 1,
      title:
        language === "en"
          ? "Dispersive Polymer Technology (DPT)"
          : "تكنولوجيا البوليمر المشتت المتقدم (DPT)",
      desc:
        language === "en"
          ? "Unique dispersive polymer technology (DPT), with premium Group II base oil, provides advanced soot control and cold start protection."
          : "تكنولوجيا البوليمر المشتت الحصرية مع زيوت الأساس الممتازة توفر تحكماً فائقاً في السخام وحماية ممتازة عند بدء التشغيل البارد.",
    },
    {
      num: 2,
      title:
        language === "en"
          ? "Valvetrain Wear Protection"
          : "حماية متقدمة لمجموعة الصمامات",
      desc:
        language === "en"
          ? "Valvetrain wear protection and reduced oil filter restriction at high soot levels ensure smooth mechanical operation under full load."
          : "حماية استثنائية لمجموعة الصمامات وتقليل انسداد فلاتر الزيت حتى مع ارتفاع مستويات السخام أثناء التشغيل المتواصل.",
    },
    {
      num: 3,
      title:
        language === "en"
          ? "High Temperature Deposit Control"
          : "مقاومة الترسبات عند درجات الحرارة العالية",
      desc:
        language === "en"
          ? "High temperature deposit control, including single and two-piece pistons, and ring/liner wear protection in high-ambient environments."
          : "حماية متقدمة للمكابس وحلقات الأسطوانات ضد التآكل والترسبات الكربونية في البيئات مرتفعة درجات الحرارة.",
    },
    {
      num: 4,
      title:
        language === "en"
          ? "Higher TBN Level & Retention"
          : "مستوى قلوي كلي (TBN) أعلى وثبات فائق",
      desc:
        language === "en"
          ? "Higher TBN level and TBN retention for long-life performance, effectively neutralizing corrosive acids formed during fuel combustion."
          : "مستوى TBN أعلى وثبات ممتد لمعادلة الأحماض الضارة الناتجة عن احتراق الوقود وضمان أطول فترات تصريف ممكنة للزيت بأمان.",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-28">
      {/* 1. Page Hero Banner */}
      <SubpageHero
        subtitle={
          language === "en"
            ? "Official Lubricants Partner"
            : "شريك الزيوت والشحوم المعتمد"
        }
        title={language === "en" ? "Valvoline Premium" : "زيوت فالفولين"}
        accentWord={language === "en" ? "Blue Oil" : "بريميوم بلو"}
        watermark="Valvoline"
        bgImage="/uploads/2023/06/us_dtc_atf_bottles_393x250.webp"
      />

      {/* 2. Section 1: Valvoline Premium Blue Oil Circular Feature */}
      <CircularFeatureBlock
        subtitle={language === "en" ? "IMC Iraq Lubricants" : "زيوت IMC العراق"}
        title={language === "en" ? "Valvoline Premium" : "فالفولين"}
        accentWord={language === "en" ? "Blue Oil" : "بريميوم بلو"}
        paragraphs={[
          language === "en"
            ? "Valvoline's Premium Blue Engine Oils are designed to provide advanced lubricant performance in modern, emissions treatment equipped diesel engines, including all types of Exhaust Gas Recirculation (EGR) and Diesel Particulate Filters (DPF)."
            : "صُممت زيوت فالفولين بريميوم بلو لتوفير أداء تزييت متقدم في محركات الديزل الحديثة المزودة بأنظمة معالجة الانبعاثات، بما في ذلك أنظمة إعادة تدوير غاز العادم (EGR) وفلاتر جسيمات الديزل (DPF).",
          language === "en"
            ? "When used in conjunction with Ultra-Low Diesel Sulfur fuel, this product technology offers a long-life, extended drainage capability, balanced formulation which helps maximize engine durability and after-treatment cleanliness."
            : "عند استخدامه، توفر هذه التكنولوجيا المتطورة فترات تصريف ممتدة وتركيبة متوازنة تساعد على زيادة متانة المحرك ونظافة منظومة معالجة العادم إلى أقصى حد.",
        ]}
        image="/uploads/2023/06/us_dtc_atf_bottles_393x250.webp"
        badgeTitle={
          language === "en" ? "Cummins Authorized Distributor" : "الوكيل المعتمد لكومنز"
        }
        badgeText={
          language === "en"
            ? "Only buy Genuine Cummins parts and accessories from Cummins distributors or Cummins authorized dealer locations"
            : "اشترِ دائماً قطع الغيار الأصلية من موزعي كومنز المعتمدين فقط"
        }
      />

      {/* 3. Section 2: Product Benefits Media Feature List */}
      <MediaFeatureList
        title={language === "en" ? "Product" : "مزايا"}
        accentWord={language === "en" ? "Benefits" : "المنتج"}
        intro={
          language === "en"
            ? "Valvoline Premium Blue is 'The Only One' exclusively endorsed and recommended by Cummins for heavy-duty generator applications."
            : "يعتبر فالفولين بريميوم بلو هو الزيت الوحيد المعتمد والموصى به حصرياً من قبل شركة كومنز العالمية لكافة تطبيقات المولدات والمحركات."
        }
        image="/uploads/2023/05/engine-technician-shop-800.jpg"
        items={[
          {
            title:
              language === "en"
                ? "Unique Dispersive Polymer Technology"
                : "تكنولوجيا البوليمر المشتت الحصرية",
            desc:
              language === "en"
                ? "Advanced soot control and cold start protection with premium Group II base oils."
                : "تحكم فائق في جزيئات السخام وحماية استثنائية عند بدء التشغيل على البارد.",
          },
          {
            title:
              language === "en"
                ? "Valvetrain Wear Protection"
                : "حماية فائقة لمنظومة الصمامات",
            desc:
              language === "en"
                ? "Reduced oil filter restriction even under extreme thermal stress."
                : "تقليل انسداد الفلاتر وحماية دقيقة لمكونات الصمامات تحت الأحمال القصوى.",
          },
          {
            title:
              language === "en"
                ? "High Temperature Deposit Control"
                : "مقاومة الترسبات في درجات الحرارة العالية",
            desc:
              language === "en"
                ? "Piston crown and ring/liner protection under heavy generator operating cycles."
                : "حماية تيجان المكابس وجدران الأسطوانات من التآكل وتكون الرواسب الكربونية.",
          },
        ]}
      />

      {/* 4. Section 3: 4 Pillar Advantages Grid */}
      <AdvantageCardsGrid
        subtitle={language === "en" ? "Valvoline Premium Blue" : "فالفولين بريميوم بلو"}
        title={language === "en" ? "Engine Oil" : "مواصفات الزيت"}
        accentWord={language === "en" ? "Performance" : "المتقدمة"}
        watermark="Valvoline"
        cards={oilBenefits}
      />

      {/* 5. Section 4: Request A Quote Banner with Stat Counters */}
      <CtaStatsBanner
        title={language === "en" ? "Request A Quote" : "طلب عرض أسعار زيوت فالفولين"}
        desc={
          language === "en"
            ? "Protect your capital investment with the only lubricant proven and endorsed by Cummins engineers. Contact our fluids specialist team in Iraq today."
            : "احمِ استثماراتك بأفضل الزيوت المعتمدة والمثبتة كفاءتها من مهندسي كومنز. تواصل مع فريقنا الفني المتخصص في العراق اليوم."
        }
        buttonText={language === "en" ? "Request A Quote" : "طلب عرض أسعار"}
        bgImage="/uploads/2023/05/imc-bg-slider.jpeg"
        stats={[
          {
            number: "10,000+",
            label:
              language === "en"
                ? "Hours of severe heavy-duty testing conducted inside Cummins test cells"
                : "ساعة من الاختبارات المعملية الشاقة داخل معامل ومحركات كومنز",
            icon: "award",
          },
          {
            number: "100%",
            label:
              language === "en"
                ? "Endorsed and approved exclusively by Cummins Inc. for warranty preservation"
                : "اعتماد رسمي وحصري من كومنز للحفاظ على ضمان وأداء المحرك",
            icon: "shield",
          },
        ]}
      />
    </div>
  );
}
