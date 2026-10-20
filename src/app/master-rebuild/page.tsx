"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CircularFeatureBlock } from "@/components/subpage/CircularFeatureBlock";
import { MediaFeatureList } from "@/components/subpage/MediaFeatureList";
import { AdvantageCardsGrid } from "@/components/subpage/AdvantageCardsGrid";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";

export default function MasterRebuildPage() {
  const { language } = useLanguage();

  const advantages = [
    {
      num: 1,
      title:
        language === "en"
          ? "Expert Diagnosis for Accurate Solutions"
          : "تشخيص دقيق لحلول مثالية",
      desc:
        language === "en"
          ? "Our experienced technicians possess in-depth knowledge and expertise in Cummins generators. At our specialized workshop, they conduct thorough assessments and employ advanced diagnostic techniques to accurately identify the root cause of the issue. This precision allows them to provide efficient and effective solutions tailored to your generator's specific needs."
          : "يمتلك فنيونا خبرة عميقة في مولدات كومنز، حيث يقومون بإجراء تقييمات شاملة واستخدام تقنيات تشخيص متقدمة في ورشتنا المتخصصة لتحديد السبب الجذري بدقة وتقديم حلول مخصصة.",
    },
    {
      num: 2,
      title:
        language === "en"
          ? "Comprehensive Repairs with Genuine Parts"
          : "إصلاحات شاملة بقطع غيار أصلية",
      desc:
        language === "en"
          ? "Alkan is committed to delivering repairs of the highest quality. Our workshop technicians utilize genuine Cummins parts, ensuring compatibility and reliability. With meticulous attention to detail, they carry out comprehensive repairs that adhere to Cummins' stringent standards, guaranteeing the optimal functionality of your generator."
          : "تلتزم ألكان بتقديم إصلاحات بأعلى معايير الجودة باستخدام قطع غيار كومنز الأصلية 100%، مما يضمن التوافق والموثوقية التامة والأداء المثالي لمولدك.",
    },
    {
      num: 3,
      title:
        language === "en"
          ? "Efficient Turnaround Time for Minimal Disruption"
          : "سرعة في الإنجاز لتقليل فترات التوقف",
      desc:
        language === "en"
          ? "We understand the urgency of getting your generator back in operation. Our specialized workshop is equipped with state-of-the-art facilities and tools, enabling our technicians to perform repairs swiftly and efficiently. Our aim is to minimize your downtime, ensuring a seamless continuation of your operations."
          : "ندرك أهمية إعادة تشغيل مولدك بأسرع وقت. ورشتنا مجهزة بأحدث المعدات والأدوات التي تمكننا من إجراء الإصلاحات بسرعة وكفاءة لضمان استمرارية أعمالك.",
    },
    {
      num: 4,
      title:
        language === "en"
          ? "Stringent Quality Assurance"
          : "ضمان جودة صارم وموثوق",
      desc:
        language === "en"
          ? "At Alkan, we stand behind the quality of our repairs. After completing the necessary repairs, our technicians conduct rigorous testing and quality checks to ensure that your generator is functioning optimally. This commitment to quality assurance ensures that your generator meets the highest standards of performance and reliability.\n\nTransparent Communication for Peace of Mind: Throughout the repair process, we maintain open and transparent communication with you. Our team will keep you informed about the progress of the repairs, providing updates and insights along the way."
          : "نضمن جودة جميع إصلاحاتنا من خلال اختبارات فحص تشغيلية صارمة للتأكد من وصول المولد إلى كفاءة المصنع القياسية، مع تواصل شفاف ومستمر طوال مراحل الإصلاح.",
    },
    {
      num: 5,
      title:
        language === "en"
          ? "Choose Alkan Workshop Repairs"
          : "اختر إصلاحات ورشة ألكان",
      desc:
        language === "en"
          ? "Experience the Difference of Professionalism and Excellence. Trust our dedicated technicians, access to specialized tools, and commitment to delivering exceptional repairs that restore your Cummins generator to optimal performance."
          : "اكتشف فارق الاحترافية والتميز مع فنيينا المعتمدين وأحدث أدوات الصيانة الدقيقة لضمان إعادة مولدك إلى أعلى مستويات الأداء الموثوق.",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-28">
      {/* 1. Page Hero Banner */}
      <SubpageHero
        subtitle={
          language === "en"
            ? "genuine innovation. genuine expertise."
            : "ابتكار أصيل وخبرة هندسية معتمدة"
        }
        title={language === "en" ? "Workshop" : "إصلاحات"}
        accentWord={language === "en" ? "Repairs" : "الورشة"}
        watermark="Alkan"
        bgImage="/uploads/2023/05/engine-technician-shop-800.jpg"
      />

      {/* 2. Section 1: Repair you can count on (Circular Graphic + Watch Video) */}
      <CircularFeatureBlock
        subtitle={language === "en" ? "repair you can count on" : "إصلاحات يعتمد عليها"}
        title={language === "en" ? "Workshop" : "إصلاحات"}
        accentWord={language === "en" ? "Repairs" : "الورشة"}
        paragraphs={[
          language === "en"
            ? "At Alkan, we understand the inconvenience and disruption caused by generator breakdowns. That's why we are delighted to offer our reliable Workshop Repair services for Cummins generators, providing you with a dedicated facility and a team of skilled technicians to swiftly restore your generator to optimal performance."
            : "في ألكان، نتفهم حجم التعطيل الناتج عن أعطال المولدات، لذا يسعدنا تقديم خدمات إصلاح الورشة المتطورة لمولدات كومنز مع منشأة مخصصة وفريق فني معتمد لإعادة مولدك إلى قمة أدائه التشغيلي.",
        ]}
        image="/uploads/2023/04/2pj92mb.jpg"
        badgeTitle={
          language === "en" ? "Cummins Authorized Distributor" : "الوكيل المعتمد لكومنز"
        }
        badgeText={
          language === "en"
            ? "Only buy Genuine Cummins parts and accessories from Cummins distributors or Cummins authorized dealer locations"
            : "اشترِ دائماً قطع الغيار الأصلية من موزعي كومنز المعتمدين فقط"
        }
        buttonText={language === "en" ? "Watch Video" : "مشاهدة الفيديو"}
        videoUrl="https://www.youtube.com/watch?v=omZbcRGNX3I"
      />

      {/* 3. Section 2: Benefit from a Range of Advantages (Photo on Left + 4 Points on Right) */}
      <MediaFeatureList
        title={language === "en" ? "Benefit From A" : "استفد من مجموعة"}
        accentWord={language === "en" ? "Range Of Advantages" : "المزايا الحصرية"}
        intro={
          language === "en"
            ? "By choosing Alkan's Workshop Repair services, you can benefit from a range of advantages that are designed to minimize downtime, deliver meticulous repairs, and ensure the reliable operation of your Cummins generator"
            : "عند اختيارك لخدمات ورشة ألكان، تستفيد من مجموعة واسعة من المزايا المصممة لتقليل فترات التوقف وضمان دقة الإصلاحات والموثوقية الدائمة لمولدك"
        }
        image="/uploads/2023/05/cummins.jpeg"
        items={[
          {
            title:
              language === "en"
                ? "Expert Diagnosis for Accurate Solutions"
                : "تشخيص دقيق لحلول مثالية",
          },
          {
            title:
              language === "en"
                ? "Comprehensive Repairs with Genuine Parts"
                : "إصلاحات شاملة بقطع غيار أصلية",
          },
          {
            title:
              language === "en"
                ? "Efficient Turnaround Time for Minimal Disruption"
                : "سرعة في الإنجاز لتقليل فترات التوقف",
          },
          {
            title:
              language === "en"
                ? "Stringent Quality Assurance"
                : "ضمان جودة صارم وموثوق",
          },
        ]}
      />

      {/* 4. Section 3: For Accurate Solutions (Circular Graphic Block) */}
      <CircularFeatureBlock
        subtitle={language === "en" ? "expert diagnosis" : "تشخيص هندسي معتمد"}
        title={language === "en" ? "For Accurate" : "لحلول فنية"}
        accentWord={language === "en" ? "Solutions" : "دقيقة"}
        paragraphs={[
          language === "en"
            ? "Our experienced technicians possess in-depth knowledge and expertise in Cummins generators. At our specialized workshop, they conduct thorough assessments and employ advanced diagnostic techniques to accurately identify the root cause of the issue. This precision allows them to provide efficient and effective solutions tailored to your generator's specific needs."
            : "يمتلك فنيونا خبرة عميقة في مولدات كومنز، حيث يجرون تقييمات دقيقة وفحوصات تشخيصية بأحدث الأجهزة للكشف عن أصل المشكلة بدقة متناهية وتوفير أنسب الحلول الهندسية لمولدك.",
        ]}
        image="/uploads/2023/02/SLIDER1.jpg"
        badgeTitle={
          language === "en" ? "Cummins Authorized Distributor" : "الوكيل المعتمد لكومنز"
        }
        badgeText={
          language === "en"
            ? "Only buy Genuine Cummins parts and accessories from Cummins distributors or Cummins authorized dealer locations"
            : "اشترِ دائماً قطع الغيار الأصلية من موزعي كومنز المعتمدين فقط"
        }
      />

      {/* 5. Section 4: Range Of Advantages Grid (5 Cards with Centered Odd Cards) */}
      <AdvantageCardsGrid
        subtitle={language === "en" ? "Benefit from" : "استفد من"}
        title={language === "en" ? "Range" : "باقة"}
        accentWord={language === "en" ? "Of Advantages" : "المزايا"}
        watermark="Alkan"
        cards={advantages}
      />

      {/* 6. Section 5: The Genuine Difference CTA Banner with Stat Counters */}
      <CtaStatsBanner
        title={language === "en" ? "The Genuine Difference" : "الفارق الأصلي الحقيقي"}
        desc={
          language === "en"
            ? "Our workshop technicians utilize genuine Cummins parts, ensuring compatibility and reliability. With meticulous attention to detail, they carry out comprehensive repairs that adhere to Cummins' stringent standards, guaranteeing the optimal functionality of your generator."
            : "يستخدم مهندسونا وفنيونا قطع غيار كومنز الأصلية المعتمدة فقط لضمان التوافق والموثوقية، مع تطبيق أدق معايير الفحص والاختبار لضمان الأداء الأقصى لمولدك."
        }
        buttonText={language === "en" ? "Request A Quote" : "طلب عرض أسعار"}
        bgImage="/uploads/2023/05/imc-slider-2.jpeg"
        stats={[
          {
            number: "300+",
            label:
              language === "en"
                ? "Genuine overhaul kit components tested through lab analysis"
                : "قطعة غيار أصلية تم اختبارها معملياً لأعلى درجات الاعتمادية",
            icon: "pin",
          },
          {
            number: "100+",
            label:
              language === "en"
                ? "Years of perfecting the design and manufacturing of Genuine Cummins parts"
                : "عاماً من التميز في تصنيع وتطوير محركات وأنظمة كومنز",
            icon: "globe",
          },
        ]}
      />
    </div>
  );
}
