"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, AlertTriangle, Package } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

export default function CumminsKitPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  const kits = [
    { num: "1", title: language === "en" ? "Preventive Maintenance Kit" : "طقم الصيانة الوقائية" },
    { num: "2", title: language === "en" ? "Top Overhauling Kit" : "طقم تعمير رأس المحرك" },
    { num: "3", title: language === "en" ? "Complete Engine Overhauling Kit" : "طقم التعمير الكامل للمحرك" },
    { num: "4", title: language === "en" ? "Gasket Kit" : "طقم الحشوات والجوانات" },
  ];

  const risks = [
    { title: language === "en" ? "Engine Performance" : "أداء المحرك" },
    { title: language === "en" ? "Fuel Economy" : "اقتصادية استهلاك الوقود" },
    { title: language === "en" ? "Reliability" : "الموثوقية التشغيلية" },
    { title: language === "en" ? "Durability" : "المتانة وعمر المحرك" },
    { title: language === "en" ? "Uptime" : "استمرارية العمل دون توقف" },
    { title: language === "en" ? "Warranty" : "سريان الضمان المصنعي" },
  ];

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/uploads/2023/05/genuine-parts-box-800x400-1.jpg"
            alt="Cummins Kits"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E2231B]/20 border border-[#E2231B]/40 text-[#E2231B] text-xs font-bold uppercase tracking-wider">
              {language === "en" ? "Cummins Authorized Distributer" : "الموزع المعتمد لكومنز"}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {language === "en" ? "Cummins Kits" : "أطقم ومجموعات كومنز الأصلية"}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "Genuine products packaged together to provide the best protection for your Cummins Engines at Excellent Value!"
                : "منتجات أصلية مجمعة معاً لتوفير أفضل حماية لمحركات كومنز الخاصة بك وبقيمة ممتازة!"}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        {/* The 4 Kits */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
              {language === "en" ? "Packaged Kits" : "مجموعات الصيانة"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading">
              {language === "en" ? "Genuine Cummins Overhaul & Maintenance Kits" : "أطقم الصيانة والتعمير الأصلية من كومنز"}
            </h2>
            <div className="w-12 h-1 bg-[#E2231B] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kits.map((k) => (
              <div key={k.num} className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#E2231B] text-white flex items-center justify-center font-extrabold text-lg flex-shrink-0">
                  {k.num}
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-sm font-heading">{k.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Buy Genuine Cummins Parts? */}
        <div className="bg-neutral-50 rounded-2xl p-8 sm:p-12 border border-neutral-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
                {language === "en" ? "There is a Difference" : "هناك فرق حقيقي"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading">
                {language === "en" ? "Why Buy Genuine Cummins Parts?" : "لماذا تشتري قطع غيار كومنز الأصلية؟"}
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {language === "en"
                  ? "Many competitive parts manufacturers try to reverse engineer Cummins parts and build something reasonably close at a cheaper price. The problem is, these non-genuine parts usually don’t meet critical specifications either dimensionally or from a materials standpoint."
                  : "يحاول العديد من مصنعي الأجزاء المنافسين إجراء هندسة عكسية لقطع غيار كومنز وبناء شيء قريب بسعر أرخص. المشكلة هي أن هذه الأجزاء غير الأصلية عادة لا تلبي المواصفات الهامة سواء من الناحية البعدية أو من حيث المواد."}
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {language === "en"
                  ? "Only buy Genuine Cummins parts and accessories from Cummins distributors or Cummins authorized dealer locations."
                  : "اشترِ دائمًا قطع غيار وإكسسوارات كومنز الأصلية من موزعي كومنز المعتمدين."}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => openQuote()}
                  className="px-6 py-3 bg-[#E2231B] hover:bg-[#9E0202] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-md"
                >
                  {language === "en" ? "Request Parts Quote" : "طلب عرض سعر قطع الغيار"}
                </button>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
              <Image
                src="/uploads/2023/05/genuine-parts-box-800x400-1.jpg"
                alt="Genuine Cummins Parts Box"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* The Risk of Using Non-Genuine Parts */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-neutral-200 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
              {language === "en" ? "Engineering Tolerances" : "المواصفات الهندسية"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading">
              {language === "en" ? "The Risk of using Non-Genuine Parts" : "مخاطر استخدام قطع الغيار غير الأصلية"}
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {language === "en"
                ? "Competitive part manufacturers may try to reverse engineer Cummins parts and build something that will fit like an original part at a cheaper price. Using non-genuine parts which don't meet critical engineering design specifications can impact:"
                : "استخدام الأجزاء المقلدة أو غير الأصلية التي لا تلبي مواصفات التصميم الهندسي الدقيق يمكن أن يؤثر سلباً على:"}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-2">
            {risks.map((r, idx) => (
              <div key={idx} className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 text-center space-y-2">
                <AlertTriangle className="w-5 h-5 text-[#E2231B] mx-auto" />
                <p className="font-bold text-neutral-900 text-xs font-heading">{r.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Genuine Difference Narrative */}
        <div className="bg-[#111111] text-white rounded-2xl p-8 sm:p-12 border border-neutral-800 space-y-6">
          <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider">
            {language === "en" ? "The Genuine Difference" : "الفارق الأصلي الحقيقي"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            {language === "en" ? "Why Buy Cummins QSK Engine Parts?" : "لماذا تختار قطع غيار محركات كومنز QSK؟"}
          </h2>
          <div className="space-y-4 text-neutral-300 text-sm leading-relaxed max-w-4xl">
            <p>
              {language === "en"
                ? "For over 100 years, Cummins has been the industry’s #1 choice for new diesel engines, as well as the parts used to keep them operating reliably and efficiently for decades. The Genuine Cummins parts that you buy from a Cummins distributor or authorized dealer are built to our exact standards, meeting or exceeding original specifications on your QSK engine."
                : "لأكثر من 100 عام، كانت كومنز الخيار الأول في الصناعة لمحركات الديزل الجديدة، وكذلك الأجزاء المستخدمة للحفاظ على تشغيلها بموثوقية وكفاءة لعقود من الزمن."}
            </p>
            <p>
              {language === "en"
                ? "Today non-genuine parts suppliers develop parts that they think will fit your Cummins engine. While the initial savings can be enticing, oftentimes there are differences compared to the Genuine Cummins part that you may or may not be able to see with the naked eye. Your genuine part will perform the same or better than the original."
                : "اليوم يطور موردو الأجزاء غير الأصلية أجزاء يعتقدون أنها ستلائم محرك كومنز الخاص بك. في حين أن التوفير المالي الأولي قد يبدو مغرياً، إلا أن هناك دائماً فروقاً هندسية لا تراها بالعين المجردة تؤدي إلى أضرار بالغة."}
            </p>
            <p>
              {language === "en"
                ? "Using non-genuine parts does more than compromise the performance of your high-horsepower engine. It jeopardizes your business and makes it hard to meet customer expectations. The miniscule amount you save upfront using non-genuine parts is likely to cost you big time down the road. When your profitability and reputation count on it, use Genuine Cummins Parts to assure continuous performance."
                : "إن استخدام الأجزاء غير الأصلية يعرض عملك للخطر ويكلفك مبالغ طائلة لاحقاً عند تعطل المعدات. عندما تكون إنتاجيتك وسمعتك على المحك، استخدم دائمًا قطع غيار كومنز الأصلية لضمان الأداء المستمر."}
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={() => openQuote()}
              className="px-6 py-3 bg-[#E2231B] hover:bg-[#9E0202] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-md"
            >
              {t.getQuote}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
