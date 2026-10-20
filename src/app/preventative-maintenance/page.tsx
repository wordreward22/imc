"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CircularFeatureBlock } from "@/components/subpage/CircularFeatureBlock";
import { MediaFeatureList } from "@/components/subpage/MediaFeatureList";
import { AdvantageCardsGrid } from "@/components/subpage/AdvantageCardsGrid";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";

export default function PreventativeMaintenancePage() {
  const { language } = useLanguage();

  const packages = [
    {
      num: 1,
      title:
        language === "en"
          ? "Mobile Van On-Site Service"
          : "خدمة متنقلة عبر سيارات الخدمة المجهزة",
      desc:
        language === "en"
          ? "On-site service available through our fleet of mobile vans operated by fully certified technicians and equipped with the latest service tools and electronic diagnostics."
          : "خدمة ميدانية فورية عبر أسطول سيارات مجهزة بالكامل يقودها فنيون معتمدون ومزودة بأحدث أدوات الصيانة والفحص الإلكتروني المعتمدة من كومنز.",
    },
    {
      num: 2,
      title:
        language === "en"
          ? "Flexible Contract Options"
          : "خيارات عقود مرنة ومتنوعة",
      desc:
        language === "en"
          ? "Short and long term contracts, for parts, labor and consumables to meet the requirements of all fleet, power providers, commercial and residential customers."
          : "عقود قصيرة وطويلة الأجل تشمل قطع الغيار وأجور اليد العاملة والمستهلكات لتلبية متطلبات أصحاب المولدات والمشاريع التجارية والصناعية.",
    },
    {
      num: 3,
      title:
        language === "en"
          ? "Scheduled & Unscheduled Maintenance"
          : "صيانة مجدولة واستجابة طارئة",
      desc:
        language === "en"
          ? "Comprehensive preventive routine maintenance alongside rapid response to unscheduled breakdowns, protecting your critical installations from costly downtime."
          : "صيانة وقائية دورية مجدولة بالإضافة إلى استجابة فائقة السرعة للأعطال الطارئة لحماية منشآتك من الانقطاعات المفاجئة.",
    },
    {
      num: 4,
      title:
        language === "en"
          ? "24/7 Answering & Support"
          : "دعم فني واستجابة على مدار الساعة 24/7",
      desc:
        language === "en"
          ? "24/7 answering service and service support as per customers' needs to maximize their uptime and ensure total peace of mind."
          : "خدمة اتصال ودعم فني متواصل 24/7 على مدار الساعة لضمان أقصى موثوقية واستمرارية لأعمالكم.",
    },
    {
      num: 5,
      title:
        language === "en"
          ? "Product Improvement Programs"
          : "برامج ترقية وتطوير كفاءة المعدات",
      desc:
        language === "en"
          ? "Continuous updates, technical field campaigns, and factory upgrades recommended by Cummins to ensure your generator stays at peak performance."
          : "تحديثات مستمرة وحملات ترقية تقنية مباشرة من مصنع كومنز للحفاظ على أعلى مستويات الكفاءة لمولداتكم طوال فترة خدمتها.",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-28">
      {/* 1. Page Hero Banner */}
      <SubpageHero
        subtitle={
          language === "en" ? "Service Contracts" : "عقود الصيانة والتشغيل"
        }
        title={language === "en" ? "Preventative" : "الصيانة"}
        accentWord={language === "en" ? "Maintenance" : "الوقائية"}
        watermark="Service"
        bgImage="/uploads/2023/05/service-contracts-2.jpeg"
      />

      {/* 2. Section 1: Maintenance is One Key to Reliability (Circular Feature Block) */}
      <CircularFeatureBlock
        subtitle={
          language === "en"
            ? "Preventative Maintenance"
            : "الصيانة الوقائية الدورية"
        }
        title={language === "en" ? "Maintenance is One Key to" : "الصيانة الوقائية هي أساس"}
        accentWord={language === "en" ? "Reliability" : "الموثوقية"}
        paragraphs={[
          language === "en"
            ? "At Alkan, we know that every business is different, with different challenges and operational requirements. So, we build flexibility into our first-class operation and maintenance contracts by custom-designing our contract packages to meet your specific needs."
            : "في ألكان، نعلم أن لكل منشأة احتياجاتها وتحدياتها الخاصة. لذلك نوفر مرونة كاملة في عقود التشغيل والصيانة الفاخرة من خلال تصميم باقات مخصصة تماماً لتناسب متطلباتكم المحددة.",
          language === "en"
            ? "We create our contracts by bundling together different service options exactly as you want. Cover can range from something as simple as parts only to full operational support over a variety of time periods. Whatever your operation and maintenance needs, we build our solutions around you."
            : "نقوم بإنشاء عقودنا من خلال تجميع خيارات خدمة مختلفة تمامًا كما تريد. يمكن أن تتراوح التغطية من قطع الغيار فقط إلى الدعم التشغيلي الكامل على مدى فترات زمنية متنوعة.",
        ]}
        image="/uploads/2023/05/service-contracts-2.jpeg"
        badgeTitle={
          language === "en" ? "Cummins Authorized Distributor" : "الوكيل المعتمد لكومنز"
        }
        badgeText={
          language === "en"
            ? "Only buy Genuine Cummins parts and accessories from Cummins distributors or Cummins authorized dealer locations"
            : "اشترِ دائماً قطع الغيار الأصلية من موزعي كومنز المعتمدين فقط"
        }
      />

      {/* 3. Section 2: Bundled Flexibility Media Feature List */}
      <MediaFeatureList
        title={language === "en" ? "Custom Designed" : "عقود مصممة"}
        accentWord={language === "en" ? "Service Packages" : "خصيصاً لعملائنا"}
        intro={
          language === "en"
            ? "The engine is subjected to extreme heat, pressure, airborne contaminants, dust and sand. In order to upkeep the reliability of Cummins engines, a preventive scheduled service strategy is key."
            : "يخضع محرك الديزل لظروف قاسية من الحرارة الشديدة والضغط والرمال والغبار المحمول جواً. للمحافظة على موثوقية محركات كومنز، فإن استراتيجية الخدمة الوقائية المجدولة هي الأساس."
        }
        image="/uploads/2023/05/service-contracts-1.jpeg"
        items={[
          {
            title:
              language === "en"
                ? "Custom Bundled Scope of Work"
                : "نطاق عمل مخصص بالكامل",
            desc:
              language === "en"
                ? "Combine routine fluid analysis, filter replacements, valve lash adjustments, and load testing as desired."
                : "دمج تحليلات الزيت الدورية وتبديل الفلاتر وضبط الصمامات واختبارات الأحمال حسب الحاجة.",
          },
          {
            title:
              language === "en"
                ? "Priority Response Guarantee"
                : "أولوية الاستجابة في حالات الطوارئ",
            desc:
              language === "en"
                ? "Contract customers receive priority dispatch for certified field service technicians 24/7/365."
                : "يحصل عملاء العقود على أولوية الاستجابة الفورية من فرق الخدمة الميدانية المعتمدة على مدار الساعة.",
          },
          {
            title:
              language === "en"
                ? "100% Genuine Cummins Parts Guarantee"
                : "قطع غيار كومنز الأصلية 100%",
            desc:
              language === "en"
                ? "All maintenance is performed using factory-approved Cummins filters, Valvoline fluids, and genuine kits."
                : "تتم جميع أعمال الصيانة حصرياً بقطع كومنز الأصلية وسوائل فالفولين المعتمدة.",
          },
        ]}
      />

      {/* 4. Section 3: 5 Value Packages Grid (Centered Trailing Items) */}
      <AdvantageCardsGrid
        subtitle={
          language === "en" ? "Preventative Maintenance Contracts" : "باقات عقود الصيانة الوقائية"
        }
        title={language === "en" ? "Total Cost Of" : "تقليل التكلفة"}
        accentWord={language === "en" ? "Ownership" : "الإجمالية"}
        watermark="Contracts"
        cards={packages}
      />

      {/* 5. Section 4: Unplanned vs Planned Maintenance CTA Banner with Stat Counters */}
      <CtaStatsBanner
        title={
          language === "en"
            ? "Unplanned vs Planned Maintenance"
            : "الصيانة المخططة مقابل الأعطال المفاجئة"
        }
        desc={
          language === "en"
            ? "Through Preventive Maintenance Contracts, IMC strives to help customers avoid unplanned maintenance which includes lost production, higher costs for parts and shipping, as well as time lost responding to emergencies. Unplanned maintenance typically costs three to nine times more than planned maintenance."
            : "من خلال عقود الصيانة الوقائية، نسعى لمساعدة العملاء على تجنب التوقفات غير المخططة وتكاليف الشحن المستعجل وخسائر الإنتاج، حيث تكلف الصيانة غير المخططة من 3 إلى 9 أضعاف تكلفة الصيانة الوقائية المنتظمة."
        }
        buttonText={language === "en" ? "Request A Quote" : "طلب عرض أسعار عقود الصيانة"}
        bgImage="/uploads/2023/05/imc-slider-2.jpeg"
        stats={[
          {
            number: "3x – 9x",
            label:
              language === "en"
                ? "Cost reduction achieved compared to emergency breakdown repairs"
                : "توفير في التكاليف مقارنة بإصلاحات الأعطال الطارئة غير المخططة",
            icon: "award",
          },
          {
            number: "24/7",
            label:
              language === "en"
                ? "Dedicated dispatch and hotline support across Baghdad, Basra, and all Iraq"
                : "دعم فني واستجابة طارئة متواصلة في بغداد والبصرة وكافة المحافظات",
            icon: "shield",
          },
        ]}
      />
    </div>
  );
}
