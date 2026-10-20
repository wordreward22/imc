"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CircularFeatureBlock } from "@/components/subpage/CircularFeatureBlock";
import { MediaFeatureList } from "@/components/subpage/MediaFeatureList";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";

export default function EnginesPage() {
  const { language } = useLanguage();
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen pb-28">
      {/* 1. Page Hero Banner */}
      <SubpageHero
        subtitle={
          language === "en"
            ? "genuine innovation. genuine expertise."
            : "ابتكار أصيل وخبرة هندسية معتمدة"
        }
        title={language === "en" ? "Cummins" : "محركات"}
        accentWord={language === "en" ? "Engines" : "كومنز"}
        watermark="Cummins"
        bgImage="/uploads/2023/05/engine-closeup-banner.jpg"
      />

      {/* 2. Section 1: Count on us / Cummins Engines (Circular Graphic) */}
      <CircularFeatureBlock
        subtitle={language === "en" ? "Count on us" : "اعتمد علينا"}
        title={language === "en" ? "Cummins" : "محركات"}
        accentWord={language === "en" ? "Engines" : "كومنز"}
        paragraphs={[
          language === "en"
            ? "Cummins Inc. is a global leader in the design, manufacturing, and distribution of diesel and natural gas engines, power generation systems, and related technologies."
            : "تعد شركة كومنز العالمية رائدة التصميم والتصنيع والتوزيع لمحركات الديزل والغاز الطبيعي وأنظمة توليد الطاقة والتقنيات الهندسية المرتبطة بها.",
          language === "en"
            ? "Cummins is renowned for its commitment to innovation, quality, and reliability in the engine industry. The company's engines power a wide range of applications, including heavy-duty trucks, buses, construction equipment, marine vessels, agricultural machinery, and power generation systems. Cummins engines are known for their performance, fuel efficiency, and durability, making them a trusted choice for customers worldwide."
            : "تشتهر كومنز بالتزامها بالابتكار والجودة والموثوقية، حيث تدعم محركاتها الشاحنات الثقيلة والمعدات الإنشائية والسفن البحرية والمعدات الزراعية ومحطات توليد الطاقة. وتتميز بأدائها العالي وكفاءة استهلاك الوقود وقوة التحمل الاستثنائية.",
        ]}
        image="/uploads/2023/05/engine-closeup-banner.jpg"
        badgeTitle={
          language === "en" ? "Cummins Authorized Distributor" : "الوكيل المعتمد لكومنز"
        }
        badgeText={
          language === "en"
            ? "Only buy Genuine Cummins parts from Cummins authorized dealer"
            : "اشترِ دائماً قطع الغيار الأصلية من موزعي كومنز المعتمدين فقط"
        }
      />

      {/* 3. Section 2: Core Strengths (Media Feature with Numbered Points) */}
      <MediaFeatureList
        title={language === "en" ? "Core" : "نقاط القوة"}
        accentWord={language === "en" ? "Strengths" : "الجوهرية"}
        intro={
          language === "en"
            ? "One of Cummins' core strengths lies in its extensive engineering expertise and technological advancements."
            : "تكمن إحدى نقاط القوة الرئيسية لكومنز في خبرتها الهندسية العريضة وتطورها التكنولوجي المستمر."
        }
        image="/uploads/2023/05/engine-technician-shop-800.jpg"
        items={[
          {
            title:
              language === "en"
                ? "Extensive Engineering Expertise"
                : "خبرة هندسية واسعة وتطور تقني",
            desc:
              language === "en"
                ? "One of Cummins' core strengths lies in its extensive engineering expertise and technological advancements."
                : "تاريخ عريق من الريادة الهندسية وتطوير المحركات الأقوى في العالم.",
          },
          {
            title:
              language === "en"
                ? "Continuous Research & Development"
                : "أبحاث وتطوير مستمر للحد من الانبعاثات",
            desc:
              language === "en"
                ? "Cummins invests heavily in research and development to continually enhance its engine designs, reduce emissions, and improve overall efficiency."
                : "استثمار مستمر في الأبحاث والتطوير لتحسين كفاءة استهلاك الوقود وتقليل الانبعاثات وزيادة الكفاءة الكلية.",
          },
          {
            title:
              language === "en"
                ? "Environmental Compliance"
                : "مطابقة لأعلى المعايير البيئية العالمية",
            desc:
              language === "en"
                ? "Cummins engines comply with stringent environmental regulations, such as EPA and Euro emissions standards, demonstrating its dedication to sustainable solutions."
                : "تتوافق محركات كومنز مع أحدث معايير الانبعاثات العالمية مثل EPA و Euro، مما يبرهن على التزامنا بالحلول المستدامة.",
          },
        ]}
      />

      {/* 4. Section 3: After Sales Support (Circular Graphic Block) */}
      <CircularFeatureBlock
        subtitle={language === "en" ? "Cummins Engines" : "محركات كومنز"}
        title={language === "en" ? "After" : "خدمات ما بعد"}
        accentWord={language === "en" ? "Sales" : "البيع"}
        paragraphs={[
          language === "en"
            ? "In addition to engines, Cummins offers a comprehensive range of services and aftermarket support. This includes maintenance, repair, and overhaul services, genuine parts supply, technical support, and training programs to ensure optimal performance and longevity of its engines throughout their lifecycle."
            : "بالإضافة إلى تزويد المحركات، نوفر باقة شاملة من خدمات الدعم الفني بعد البيع تشمل الصيانة والإصلاح والتعمير الكامل وتوريد قطع الغيار الأصلية والبرامج التدريبية المتخصصة لضمان أطول عمر تشغيلي للمحرك.",
          language === "en"
            ? "Cummins' global presence is extensive, with a network of manufacturing facilities, sales offices, and service centers spanning over 190 countries."
            : "يمتد انتشار كومنز عالمياً عبر شبكة واسعة من المصانع ومكاتب المبيعات ومراكز الخدمة المعتمدة في أكثر من 190 دولة حول العالم.",
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
        reverse
      />

      {/* 5. Section 4: Best Engines in the Field (CTA Banner with Stat Counters) */}
      <CtaStatsBanner
        title={language === "en" ? "Best Engines in the Field" : "أفضل المحركات أداءً في الميدان"}
        desc={
          language === "en"
            ? "Cummins Inc. is a global leader in the design, manufacturing, and distribution of diesel and natural gas engines, power generation systems, and related technologies."
            : "شركة كومنز العالمية هي الرائدة في تصميم وتصنيع وتوزيع محركات الديزل وأنظمة الطاقة وحلول التشغيل الشاقة."
        }
        buttonText={language === "en" ? "Contact us" : "تواصل معنا"}
        bgImage="/uploads/2023/05/imc-bg-slider.jpeg"
        onButtonClick={() => router.push("/contact")}
        stats={[
          {
            number: "190+",
            label:
              language === "en"
                ? "Countries and territories where Cummins provides certified engine solutions"
                : "دولة حول العالم تغطيها خدمات ودعم كومنز المعتمدة",
            icon: "globe",
          },
          {
            number: "100+",
            label:
              language === "en"
                ? "Years of global engineering leadership in diesel technology"
                : "عاماً من الريادة الهندسية في تكنولوجيا الديزل والطاقة",
            icon: "award",
          },
        ]}
      />
    </div>
  );
}
