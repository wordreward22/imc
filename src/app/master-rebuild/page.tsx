"use client";

import React from "react";
import Image from "next/image";
import { Settings, ShieldCheck, CheckCircle2, Clock, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

export default function MasterRebuildPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  const advantages = [
    {
      num: "1",
      title: language === "en" ? "Expert Diagnosis for Accurate Solutions" : "تشخيص دقيق من قبل خبراء معتمدين",
      desc: language === "en"
        ? "Our experienced technicians possess in-depth knowledge and expertise in Cummins generators. At our specialized workshop, they conduct thorough assessments and employ advanced diagnostic techniques to accurately identify the root cause of the issue. This precision allows them to provide efficient and effective solutions tailored to your generator's specific needs."
        : "يمتلك فنيونا ذوو الخبرة معرفة عميقة في مولدات كومنز. في ورشتنا المتخصصة، يجرون تقييمات شاملة ويستخدمون تقنيات تشخيص متقدمة لتحديد السبب الجذري للعطل بدقة، مما يتيح تقديم حلول مخصصة وفعالة.",
    },
    {
      num: "2",
      title: language === "en" ? "Comprehensive Repairs with Genuine Parts" : "إصلاحات شاملة باستخدام قطع الغيار الأصلية",
      desc: language === "en"
        ? "We are committed to delivering repairs of the highest quality. Our workshop technicians utilize genuine Cummins parts, ensuring compatibility and reliability. With meticulous attention to detail, they carry out comprehensive repairs that adhere to Cummins' stringent standards, guaranteeing the optimal functionality of your generator."
        : "نحن ملتزمون بتقديم إصلاحات بأعلى مستويات الجودة. يستخدم فنيو ورشتنا قطع غيار كومنز الأصلية، مما يضمن التوافق والموثوقية وفقًا لأعلى معايير كومنز الصارمة.",
    },
    {
      num: "3",
      title: language === "en" ? "Efficient Turnaround Time for Minimal Disruption" : "وقت إنجاز قياسي لتقليل فترات التوقف",
      desc: language === "en"
        ? "We understand the urgency of getting your generator back in operation. Our specialized workshop is equipped with state-of-the-art facilities and tools, enabling our technicians to perform repairs swiftly and efficiently. Our aim is to minimize your downtime, ensuring a seamless continuation of your operations."
        : "نحن نتفهم أهمية إعادة تشغيل المولد الخاص بك بأسرع وقت. ورشتنا المتخصصة مجهزة بأحدث المعدات والأدوات التي تمكن فنيينا من تنفيذ الإصلاحات بسرعة وكفاءة لتقليل وقت التوقف عن العمل.",
    },
    {
      num: "4",
      title: language === "en" ? "Stringent Quality Assurance" : "ضمان الجودة والاختبار الصارم",
      desc: language === "en"
        ? "We stand behind the quality of our repairs. After completing the necessary repairs, our technicians conduct rigorous testing and quality checks to ensure that your generator is functioning optimally. This commitment to quality assurance ensures that your generator meets the highest standards of performance and reliability."
        : "نحن نضمن جودة إصلاحاتنا؛ بعد الانتهاء من الأعمال اللازمة، يخضع المولد لاختبارات دقيقة للتأكد من تشغيله بأقصى كفاءة ومطابقته لأعلى معايير الأداء والموثوقية.",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/engine-technician-shop-800.jpg"
            alt="Workshop Repairs"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E2231B]/20 border border-[#E2231B]/40 text-[#E2231B] text-xs font-bold uppercase tracking-wider">
              {language === "en" ? "Repair you can count on" : "إصلاحات يمكنك الاعتماد عليها"}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {language === "en" ? "Workshop Repairs" : "إصلاحات الورشة المعتمدة"}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "At IMC, we understand the inconvenience and disruption caused by generator breakdowns. That's why we are delighted to offer our reliable Workshop Repair services for Cummins generators, providing you with a dedicated facility and a team of skilled technicians to swiftly restore your generator to optimal performance."
                : "نحن نتفهم الإزعاج والتعطيل الناجم عن أعطال المولدات. لهذا يسعدنا تقديم خدمات إصلاحات الورشة الموثوقة لمولدات كومنز مع فريق من الفنيين المهرة وورشة متطورة."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* Benefit from a Range of Advantages */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
              {language === "en" ? "Workshop Excellence" : "تميز ورشة الإصلاح"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading">
              {language === "en" ? "Benefit from a Range of Advantages" : "استفد من مجموعة المزايا الاستثنائية"}
            </h2>
            <div className="w-12 h-1 bg-[#E2231B] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((adv) => (
              <div key={adv.num} className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E2231B] text-white flex items-center justify-center font-extrabold text-sm flex-shrink-0">
                    {adv.num}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 font-heading">{adv.title}</h3>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Narrative & Quote Box */}
        <div className="bg-[#111111] text-white rounded-2xl p-8 sm:p-12 border border-neutral-800 space-y-5">
          <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
            {language === "en" ? "The Genuine Difference" : "الفارق الأصلي"}
          </span>
          <h3 className="text-2xl font-bold font-heading text-white">
            {language === "en" ? "Experience the Difference of Professionalism and Excellence" : "اختبر فارق الاحترافية والتميز"}
          </h3>
          <p className="text-neutral-300 text-sm leading-relaxed max-w-3xl">
            {language === "en"
              ? "Trust our dedicated technicians, access to specialized tools, and commitment to delivering exceptional repairs that restore your Cummins generator to optimal performance."
              : "ثق بفنيينا المتخصصين والأدوات الدقيقة المعتمدة والالتزام بتقديم إصلاحات استثنائية تعيد مولد كومنز الخاص بك إلى الأداء الأمثل."}
          </p>
          <div className="pt-2">
            <button
              onClick={() => openQuote()}
              className="px-6 py-3 bg-[#E2231B] hover:bg-[#9E0202] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-md"
            >
              {language === "en" ? "Request A Quote" : "طلب عرض سعر"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
