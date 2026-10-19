"use client";

import React from "react";
import Image from "next/image";
import { FileText, ShieldCheck, CheckCircle2, AlertOctagon, Wrench } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

export default function PreventativeMaintenancePage() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  const packages = [
    {
      title: language === "en" ? "Mobile Van On-Site Service" : "خدمة متنقلة في الموقع عبر أسطول الفانات",
      desc: language === "en"
        ? "On-site service available through our fleet of mobile vans operated by fully certified technicians and equipped with the latest tools service and electronic tools"
        : "خدمة في الموقع عبر أسطول سيارات متنقلة يقودها فنيون معتمدون ومجهزة بأحدث أدوات الخدمة والفحص الإلكتروني.",
    },
    {
      title: language === "en" ? "Flexible Contract Options" : "عقود مرنة قصيرة وطويلة الأجل",
      desc: language === "en"
        ? "Short and long term contracts, for parts, labor and consumables to meet the requirements of all fleet, power providers, commercial and residential customers"
        : "عقود قصيرة وطويلة الأجل تشمل قطع الغيار وأجور اليد العاملة والمستهلكات لتلبية متطلبات جميع محطات التوليد والشركات.",
    },
    {
      title: language === "en" ? "Scheduled & Unscheduled Maintenance" : "صيانة مجدولة وطارئة",
      desc: language === "en"
        ? "Comprehensive preventive routine maintenance alongside rapid response to unscheduled breakdowns."
        : "صيانة دورية وقائية منتظمة مع استجابة سريعة للأعطال غير المجدولة لضمان استمرارية التشغيل.",
    },
    {
      title: language === "en" ? "24/7 Answering & Support" : "دعم فني واستجابة على مدار الساعة",
      desc: language === "en"
        ? "24/7 answering service and service support as per customers’ needs to maximize their uptime."
        : "خدمة اتصال ودعم فني على مدار 24/7 وفقاً لاحتياجات العملاء لتحقيق أقصى قدر من جاهزية التشغيل.",
    },
    {
      title: language === "en" ? "Product Improvement Programs" : "برامج تحسين وتطوير المعدات",
      desc: language === "en"
        ? "Continuous updates, technical field campaigns, and factory upgrades recommended by Cummins."
        : "تحديثات مستمرة وحملات تطوير فنية وترقيات مصنعية موصى بها من كومنز للمحركات.",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/service-contracts-1.jpeg"
            alt="Service Contracts"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E2231B]/20 border border-[#E2231B]/40 text-[#E2231B] text-xs font-bold uppercase tracking-wider">
              {language === "en" ? "Service Contracts" : "عقود الصيانة"}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {language === "en" ? "Maintenance is One Key to Reliability" : "الصيانة الوقائية هي مفتاح الموثوقية"}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "At IMC, we know that every business is different, with different challenges and operational requirements. So, we build flexibility into our first-class operation and maintenance contracts by custom-designing our contract packages to meet your specific needs."
                : "في IMC، نعلم أن لكل منشأة احتياجاتها الخاصة. لذلك نوفر مرونة كاملة في عقود التشغيل والصيانة من خلال تصميم باقات مخصصة تناسب متطلباتك التشغيلية."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* Bundled Flexibility Narrative */}
        <div className="bg-neutral-50 rounded-2xl p-8 sm:p-12 border border-neutral-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
                {language === "en" ? "Custom Designed" : "مصممة خصيصاً لك"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading">
                {language === "en" ? "Tailored Maintenance Contracts" : "عقود صيانة مفصلة حسب الطلب"}
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {language === "en"
                  ? "We create our contracts by bundling together different service options exactly as you want. Cover can range from something as simple as parts only to full operational support over a variety of time periods. Whatever your operation and maintenance needs, we build our solutions around you."
                  : "نقوم بإنشاء عقودنا من خلال تجميع خيارات خدمة مختلفة تمامًا كما تريد. يمكن أن تتراوح التغطية من قطع الغيار فقط إلى الدعم التشغيلي الكامل على مدى فترات زمنية متنوعة."}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => openQuote()}
                  className="px-6 py-3 bg-[#E2231B] hover:bg-[#9E0202] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-md"
                >
                  {t.getQuote}
                </button>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
              <Image
                src="/uploads/2023/05/service-contracts-1.jpeg"
                alt="Service Contracts"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Preventative Maintenance Contracts (The 5 Value Packages) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
              {language === "en" ? "Total Cost of Ownership" : "تقليل التكلفة الإجمالية"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading">
              {language === "en" ? "Preventative Maintenance Contracts" : "باقات عقود الصيانة الوقائية (PMC)"}
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed mt-2">
              {language === "en"
                ? "The engine is subjected to extreme heat, pressure, airborne contaminates, dust and sand. In order to upkeep with the reliability of Cummins engines, preventive, or scheduled service strategy is the key. Ultra-reliable systems are key to your business performance, protecting you from costly downtime."
                : "يخضع المحرك لظروف قاسية من الحرارة والغبار والضغط. للحفاظ على موثوقية محركات كومنز، فإن استراتيجية الخدمة الوقائية المجدولة هي الأساس لحماية أعمالك من التوقف المكلف."}
            </p>
            <div className="w-12 h-1 bg-[#E2231B] mx-auto rounded-full mt-3" />
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-neutral-50 rounded-2xl p-6 border border-neutral-200 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E2231B] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 font-heading">{pkg.title}</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">{pkg.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Unplanned Maintenance Cost Comparison Box */}
        <div className="bg-[#111111] text-white rounded-2xl p-8 sm:p-12 border border-neutral-800 space-y-5">
          <div className="flex items-center gap-2 text-[#E2231B] font-bold text-xs uppercase tracking-wider">
            <AlertOctagon className="w-4 h-4" />
            <span>{language === "en" ? "Cost Efficiency Analysis" : "تحليل التكلفة الاقتصادية"}</span>
          </div>
          <h3 className="text-2xl font-bold font-heading text-white">
            {language === "en" ? "Unplanned vs Planned Maintenance" : "الصيانة المخططة مقابل الأعطال المفاجئة"}
          </h3>
          <p className="text-neutral-300 text-sm leading-relaxed max-w-3xl">
            {language === "en"
              ? "Through Preventive Maintenance Contracts, IMC strives to help customers avoid unplanned maintenance which includes lost production, higher costs for parts and shipping, as well as time lost responding to emergencies and diagnosing faults while equipment is not working. Unplanned maintenance typically costs three to nine times more than planned maintenance."
              : "من خلال عقود الصيانة الوقائية، نسعى لمساعدة العملاء على تجنب التوقفات غير المخططة وتكاليف الشحن المستعجل وخسائر الإنتاج، حيث تكلف الصيانة غير المخططة من 3 إلى 9 أضعاف تكلفة الصيانة الوقائية المنتظمة."}
          </p>
          <p className="text-neutral-400 text-xs leading-relaxed">
            {language === "en"
              ? "For further information on Preventive Maintenance and benefits, please contact us."
              : "للمزيد من المعلومات حول الصيانة الوقائية وعقود الخدمة، يرجى التواصل معنا."}
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
