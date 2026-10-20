"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CircularFeatureBlock } from "@/components/subpage/CircularFeatureBlock";
import { MediaFeatureList } from "@/components/subpage/MediaFeatureList";
import { AdvantageCardsGrid } from "@/components/subpage/AdvantageCardsGrid";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";

export default function FleetGuardPage() {
  const { language } = useLanguage();

  const innovations = [
    {
      num: 1,
      title:
        language === "en"
          ? "Reliable Quality You Can Rely On"
          : "جودة موثوقة يعتمد عليها",
      desc:
        language === "en"
          ? "Fleetguard filters are meticulously designed and engineered to deliver unparalleled protection that not only meets but exceeds OEM standards in terms of quality and performance."
          : "تم تصميم وهندسة فلاتر فليت جارد بدقة لتوفير حماية لا مثيل لها تلبي وتتجاوز المعايير الأصلية من حيث الجودة والأداء الفائق.",
    },
    {
      num: 2,
      title:
        language === "en"
          ? "Maximize Cost Savings in the Long Run"
          : "أقصى توفير في التكاليف على المدى الطويل",
      desc:
        language === "en"
          ? "By keeping your engines running efficiently and optimizing fuel consumption, Fleetguard filters provide a significant return on investment. Our customers have saved millions in fuel costs while simultaneously reducing their environmental footprint."
          : "من خلال الحفاظ على تشغيل المحركات بكفاءة عالية وتحسين استهلاك الوقود، توفر فلاتر فليت جارد عائداً كبيراً على الاستثمار وتوفر الملايين في تكاليف التشغيل.",
    },
    {
      num: 3,
      title:
        language === "en"
          ? "Comprehensive Solutions Under One Roof"
          : "حلول شاملة متكاملة تحت سقف واحد",
      desc:
        language === "en"
          ? "As the leading provider in the heavy-duty industry, Fleetguard offers an extensive range of filters and coolants. Our commitment to being a one-stop shop ensures that we can support all your equipment maintenance needs, providing convenience and peace of mind."
          : "بصفتها الشركة الرائدة في الصناعات الثقيلة، تقدم فليت جارد مجموعة واسعة من الفلاتر وسوائل التبريد لدعم جميع احتياجات صيانة معداتك براحة بال تامة.",
    },
    {
      num: 4,
      title:
        language === "en"
          ? "Cutting-Edge Filtration Innovation"
          : "ابتكارات متقدمة في تكنولوجيا الترشيح",
      desc:
        language === "en"
          ? "Fleetguard filters are at the forefront of technological advancements in filtration. From our cutting-edge NanoNet filter media to the groundbreaking FleetguardFIT system, we continually invest in research and development to bring you the most advanced solutions available."
          : "تقف فلاتر فليت جارد في طليعة التطور التكنولوجي، من ألياف NanoNet النانوية المتطورة إلى نظام المراقبة الذكي FleetguardFIT لضمان أعلى درجات النقاء.",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-28">
      {/* 1. Page Hero Banner */}
      <SubpageHero
        subtitle={
          language === "en"
            ? "Cummins Heavy Duty Filtration"
            : "فلاتر كومنز الأصلية للمهام الشاقة"
        }
        title={language === "en" ? "Fleet" : "فليت"}
        accentWord={language === "en" ? "Guard" : "جارد"}
        watermark="Fleetguard"
        bgImage="/uploads/2023/06/fleetguard.jpg"
      />

      {/* 2. Section 1: Fleet Guard Circular Feature */}
      <CircularFeatureBlock
        subtitle={language === "en" ? "IMC Iraq Filtration" : "فلاتر IMC العراق"}
        title={language === "en" ? "Fleet" : "فليت"}
        accentWord={language === "en" ? "Guard" : "جارد"}
        paragraphs={[
          language === "en"
            ? "Fleetguard offers a full line of filters specifically engineered for a wide range of systems. With advanced design and high quality performance, Fleetguard heavy duty filters give customers the ultimate protection for all of their equipment."
            : "تقدم فليت جارد خطاً متكاملاً من الفلاتر المصممة هندسياً لمختلف الأنظمة الميكانيكية. بفضل التصميم المتطور والأداء عالي الجودة، تمنح فلاتر فليت جارد للمهام الشاقة الحماية القصوى لجميع معداتكم.",
        ]}
        image="/uploads/2023/06/fleetguard.jpg"
        badgeTitle={
          language === "en" ? "Cummins Authorized Distributor" : "الوكيل المعتمد لكومنز"
        }
        badgeText={
          language === "en"
            ? "Only buy Genuine Cummins parts and accessories from Cummins distributors or Cummins authorized dealer locations"
            : "اشترِ دائماً قطع الغيار الأصلية من موزعي كومنز المعتمدين فقط"
        }
      />

      {/* 3. Section 2: Why Choose Fleetguard (Media Feature List) */}
      <MediaFeatureList
        title={language === "en" ? "Why Choose" : "لماذا تختار"}
        accentWord={language === "en" ? "Fleetguard" : "فليت جارد"}
        intro={
          language === "en"
            ? "Discover how authentic Fleetguard filtration safeguards your engine's combustion chamber, fuel injection systems, and lubrication circuits from harmful contaminants."
            : "اكتشف كيف تحمي فلاتر فليت جارد الأصلية غرف الاحتراق ومنظومة حقن الوقود ودورات التزييت من أدق الشوائب الضارة."
        }
        image="/uploads/2023/05/engine-technician-shop-800.jpg"
        items={[
          {
            title:
              language === "en"
                ? "Reliable Quality You Can Rely On"
                : "جودة موثوقة يعتمد عليها",
            desc:
              language === "en"
                ? "Unparalleled protection that not only meets but exceeds OEM standards in terms of quality and performance."
                : "حماية لا مثيل لها تلبي وتتجاوز المعايير الأصلية من حيث الجودة والأداء.",
          },
          {
            title:
              language === "en"
                ? "Maximize Cost Savings in the Long Run"
                : "أقصى توفير في التكاليف على المدى الطويل",
            desc:
              language === "en"
                ? "Optimize fuel consumption and reduce downtime to save millions in overall operating costs."
                : "تحسين استهلاك الوقود وتقليل التوقفات لتوفير تكاليف التشغيل على المدى الطويل.",
          },
          {
            title:
              language === "en"
                ? "Comprehensive Solutions Under One Roof"
                : "حلول شاملة متكاملة تحت سقف واحد",
            desc:
              language === "en"
                ? "Complete range of fuel, lube, air, hydraulic filters and premium coolants."
                : "مجموعة متكاملة من فلاتر الوقود والزيوت والهواء وسوائل التبريد المعتمدة.",
          },
        ]}
      />

      {/* 4. Section 3: 4 Pillar Advantages Grid */}
      <AdvantageCardsGrid
        subtitle={language === "en" ? "Filtration Technology" : "تكنولوجيا الترشيح"}
        title={language === "en" ? "The Reliable" : "الجودة"}
        accentWord={language === "en" ? "Quality" : "الموثوقة"}
        watermark="Fleetguard"
        cards={innovations}
      />

      {/* 5. Section 4: Request A Quote Banner with Stat Counters */}
      <CtaStatsBanner
        title={language === "en" ? "Request A Quote" : "طلب عرض أسعار فلاتر فليت جارد"}
        desc={
          language === "en"
            ? "As the leading provider in the heavy-duty industry, Fleetguard offers an extensive range of filters and coolants. Our commitment to being a one-stop shop ensures that we can support all your equipment maintenance needs, providing convenience and peace of mind."
            : "بصفتنا الموزع المعتمد، نوفر مجموعة شاملة من فلاتر فليت جارد وسوائل التبريد لجميع مولدات ومعدات كومنز في العراق بأعلى درجات الموثوقية."
        }
        buttonText={language === "en" ? "Request A Quote" : "طلب عرض أسعار"}
        bgImage="/uploads/2023/05/imc-slider-2.jpeg"
        stats={[
          {
            number: "99.9%",
            label:
              language === "en"
                ? "Efficiency in particulate removal with proprietary NanoNet synthetic media"
                : "كفاءة حجز الشوائب الدقيقة بفضل تقنية نانونت الحاصلة على براءة اختراع",
            icon: "shield",
          },
          {
            number: "100+",
            label:
              language === "en"
                ? "Years of Cummins filtration excellence trusted across global industries"
                : "عاماً من ريادة فلاتر كومنز في أقصى ظروف التشغيل الشاقة حول العالم",
            icon: "award",
          },
        ]}
      />
    </div>
  );
}
