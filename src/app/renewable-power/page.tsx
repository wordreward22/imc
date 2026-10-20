"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CircularFeatureBlock } from "@/components/subpage/CircularFeatureBlock";
import { MediaFeatureList } from "@/components/subpage/MediaFeatureList";
import { AdvantageCardsGrid } from "@/components/subpage/AdvantageCardsGrid";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";

export default function RenewablePowerPage() {
  const { language } = useLanguage();
  const router = useRouter();

  const solutions = [
    {
      num: 1,
      title:
        language === "en"
          ? "Customized Energy Solutions"
          : "حلول طاقة مخصصة حسب الطلب",
      desc:
        language === "en"
          ? "Customized Energy Solutions provides a comprehensive approach to meet customer's electricity needs. We provide turnkey projects with cutting-edge solar energy technology and products."
          : "توفر حلول الطاقة المخصصة نهجاً شاملاً لتلبية احتياجات العملاء من الكهرباء من خلال مشاريع تسليم مفتاح بتقنيات شمسية متطورة.",
    },
    {
      num: 2,
      title:
        language === "en"
          ? "For Accurate Solutions"
          : "حلول دقيقة واستشارات متخصصة",
      desc:
        language === "en"
          ? "For Accurate Solutions, we provide consulting, energy auditing service, and renewable energy production with various solutions, supported with energy management systems and battery storage."
          : "للحصول على حلول دقيقة، نقدم خدمات الاستشارات وتدقيق الطاقة وإنتاج الطاقة المتجددة بحلول متنوعة مدعومة بأنظمة إدارة الطاقة والتخزين بالبطاريات.",
    },
    {
      num: 3,
      title:
        language === "en"
          ? "Best Tailor-made Energy"
          : "أفضل أنظمة طاقة هجينة متكاملة",
      desc:
        language === "en"
          ? "Our Group Energy's commitment to customized solutions ensures tailored, optimal energy systems that align with each customer's specific requirements, maximizing efficiency and promoting sustainability."
          : "يضمن التزام مجموعة الطاقة لدينا تصميم أنظمة مثالية مخصصة تتوافق مع متطلبات كل عميل لرفع الكفاءة وتعزيز الاستدامة وخفض تكاليف الوقود.",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-28">
      {/* 1. Page Hero Banner */}
      <SubpageHero
        subtitle={
          language === "en"
            ? "Solar, Battery & Hybrid Power"
            : "حلول الطاقة الشمسية والبطاريات والأنظمة الهجينة"
        }
        title={language === "en" ? "Renewable" : "الطاقة"}
        accentWord={language === "en" ? "Power" : "المتجددة"}
        watermark="Alkan"
        bgImage="/uploads/2023/06/solar-farm-rocky-mount_hero.jpg"
      />

      {/* 2. Section 1: Renewable Energy Circular Feature */}
      <CircularFeatureBlock
        subtitle={language === "en" ? "Count on us" : "اعتمد علينا"}
        title={language === "en" ? "Renewable" : "الطاقة"}
        accentWord={language === "en" ? "Energy" : "المتجددة"}
        paragraphs={[
          language === "en"
            ? "Our Group Energy provides turnkey projects with cutting-edge solar energy technology & products, providing consulting, energy auditing service, and renewable energy production with various solutions."
            : "تقدم مجموعة الطاقة لدينا مشاريع متكاملة تسليم مفتاح بأحدث تكنولوجيا ومنتجات الطاقة الشمسية، موفرة خدمات الاستشارات والتدقيق الفني للطاقة وحلول الإنتاج المتجدد المتنوعة.",
          language === "en"
            ? "Supported with energy management systems and battery energy storage systems (BESS), we seamlessly integrate solar PV arrays with Cummins diesel generators for reliable 24/7 hybrid microgrids."
            : "مدعومة بأنظمة إدارة الطاقة المتقدمة وحلول تخزين الطاقة بالبطاريات (BESS)، نقوم بدمج منظومات الطاقة الشمسية مع مولدات كومنز لتأمين شبكات هجينة فائقة الاعتمادية على مدار الساعة.",
        ]}
        image="/uploads/2023/06/imc_renewable_power.webp"
        badgeTitle={
          language === "en" ? "Cummins Authorized Distributor" : "الوكيل المعتمد لكومنز"
        }
        badgeText={
          language === "en"
            ? "Only buy Genuine Cummins parts and accessories from Cummins distributors or Cummins authorized dealer locations"
            : "اشترِ دائماً قطع الغيار الأصلية من موزعي كومنز المعتمدين فقط"
        }
      />

      {/* 3. Section 2: Customized Energy Solutions (Media Feature List) */}
      <MediaFeatureList
        title={language === "en" ? "Customized" : "حلول طاقة"}
        accentWord={language === "en" ? "Energy Solutions" : "مخصصة ومبتكرة"}
        intro={
          language === "en"
            ? "Turnkey engineering solutions tailored to industrial facilities, telecommunication towers, commercial complexes, and off-grid remote operations."
            : "حلول هندسية تسليم مفتاح مصممة خصيصاً للمنشآت الصناعية وأبراج الاتصالات والمجمعات التجارية والمواقع النائية خارج الشبكة الكهربائية."
        }
        image="/uploads/2023/06/solar-farm-rocky-mount_hero.jpg"
        items={[
          {
            title:
              language === "en"
                ? "Turnkey Solar Engineering (EPC)"
                : "هندسة وتوريد وتنفيذ مشاريع الطاقة الشمسية (EPC)",
            desc:
              language === "en"
                ? "End-to-end design, procurement, civil installation, commissioning, and grid synchronization."
                : "تصميم شامل وتوريد وتركيب وتشغيل وربط مع الشبكة بأعلى المعايير العالمية.",
          },
          {
            title:
              language === "en"
                ? "Hybrid Generator & Solar Integration"
                : "دمج هجين بين المولدات والطاقة الشمسية",
            desc:
              language === "en"
                ? "Intelligent controllers synchronize Cummins diesel generators with PV inverters to slash fuel consumption by up to 60%."
                : "لوحات تحكم ذكية تدمج مولدات كومنز مع الطاقة الشمسية لتقليل استهلاك الديزل بنسبة تصل إلى 60%.",
          },
          {
            title:
              language === "en"
                ? "Industrial Battery Energy Storage (BESS)"
                : "تخزين الطاقة بالبطاريات الصناعية (BESS)",
            desc:
              language === "en"
                ? "Lithium iron phosphate (LFP) energy storage ensures smooth peak-shaving and silent night-time power."
                : "بطاريات فوسفات حديد الليثيوم المتقدمة لتأمين الطاقة وتخفيض فترات تشغيل المولد في أوقات الذروة.",
          },
        ]}
      />

      {/* 4. Section 3: 3 Pillar Solutions Grid (Centered) */}
      <AdvantageCardsGrid
        subtitle={language === "en" ? "Sustainable Power" : "طاقة مستدامة"}
        title={language === "en" ? "Accurate" : "حلول"}
        accentWord={language === "en" ? "Solutions" : "دقيقة وموثوقة"}
        watermark="Solar"
        cards={solutions}
      />

      {/* 5. Section 4: Best Tailor-made Energy CTA Banner with Stat Counters */}
      <CtaStatsBanner
        title={language === "en" ? "Best Tailor-made Energy" : "أفضل أنظمة طاقة هجينة مفصلة حسب الطلب"}
        desc={
          language === "en"
            ? "Our Group Energy's commitment to customized solutions ensures tailored, optimal energy systems that align with each customer's specific requirements, maximizing efficiency and promoting sustainability."
            : "يضمن التزام مجموعتنا تقديم أنظمة طاقة هجينة مثالية ومفصلة خصيصاً لتناسب احتياجاتكم التشغيلية وتضمن أعلى توفير في التكاليف التشغيلية."
        }
        buttonText={language === "en" ? "Contact us" : "تواصل معنا"}
        bgImage="/uploads/2023/06/solar-farm-rocky-mount_hero.jpg"
        onButtonClick={() => router.push("/contact")}
        stats={[
          {
            number: "100%",
            label:
              language === "en"
                ? "Turnkey EPC project delivery and warranty execution in Iraq"
                : "تنفيذ هندسي متكامل ومضمون تسليم مفتاح في العراق",
            icon: "award",
          },
          {
            number: "60%",
            label:
              language === "en"
                ? "Fuel consumption reduction achieved with hybrid solar microgrid controls"
                : "توفير في استهلاك وقود الديزل مع أنظمة التحكم الهجينة الذكية",
            icon: "shield",
          },
        ]}
      />
    </div>
  );
}
