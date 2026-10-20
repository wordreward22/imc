"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AlertTriangle, ShieldCheck, CheckCircle2, ChevronRight, Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useQuote } from "@/context/QuoteContext";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CircularFeatureBlock } from "@/components/subpage/CircularFeatureBlock";
import { MediaFeatureList } from "@/components/subpage/MediaFeatureList";
import { AdvantageCardsGrid } from "@/components/subpage/AdvantageCardsGrid";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";
import { VideoModal } from "@/components/subpage/VideoModal";

export default function CumminsKitPage() {
  const { language } = useLanguage();
  const { openQuote } = useQuote();
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);

  const kits = [
    { num: 1, title: language === "en" ? "Preventive Maintenance Kit" : "طقم الصيانة الوقائية" },
    { num: 2, title: language === "en" ? "Top Overhauling Kit" : "طقم تعمير رأس المحرك" },
    { num: 3, title: language === "en" ? "Complete Engine Overhauling Kit" : "طقم التعمير الكامل للمحرك" },
    { num: 4, title: language === "en" ? "Gasket Kit" : "طقم الحشوات والجوانات" },
  ];

  const risks = [
    {
      num: 1,
      title: language === "en" ? "Engine Performance" : "أداء المحرك",
      desc:
        language === "en"
          ? "Non-genuine parts reduce horsepower, disrupt compression ratios, and increase fuel consumption."
          : "القطع غير الأصلية تضعف القدرة الحصانية للمحرك وتخل بنسب الانضغاط وتزيد استهلاك الوقود.",
    },
    {
      num: 2,
      title: language === "en" ? "Fuel Economy" : "كفاءة استهلاك الوقود",
      desc:
        language === "en"
          ? "Substandard machining tolerances lead to fuel leakage, inefficient combustion, and wasted operating budget."
          : "عدم دقة تصنيع الأجزاء المقلدة يتسبب في احتراق غير متكافئ وتسريب الوقود وزيادة المصاريف التشغيلية.",
    },
    {
      num: 3,
      title: language === "en" ? "Reliability" : "الموثوقية التشغيلية",
      desc:
        language === "en"
          ? "Inferior materials fail unexpectedly under extreme operating temperatures and mechanical loads."
          : "المعادن الرخيصة والمقلدة تفشل فجأة تحت درجات الحرارة والضغوط العالية أثناء الأحمال القصوى.",
    },
    {
      num: 4,
      title: language === "en" ? "Durability" : "عمر المحرك الافتراضي",
      desc:
        language === "en"
          ? "Accelerated cylinder, piston, and valvetrain wear sharply shortens engine service lifecycle."
          : "تآكل متسارع في الأسطوانات والمكابس والصمامات مما يقصر عمر المحرك بشكل حاد.",
    },
    {
      num: 5,
      title: language === "en" ? "Uptime" : "استمرارية التشغيل",
      desc:
        language === "en"
          ? "Unplanned breakdowns interrupt critical operations, causing expensive emergency shutdowns."
          : "توقفات مفاجئة تعطل الأعمال الحيوية وتكبدك خسائر تشغيلية باهظة.",
    },
    {
      num: 6,
      title: language === "en" ? "Warranty Protection" : "الضمان المعتمد",
      desc:
        language === "en"
          ? "Using unauthorized replica parts voids Cummins factory warranty coverage and authorized protection."
          : "استخدام الأجزاء المقلدة يلغي تغطية ضمان المصنع المعتمد من كومنز بالكامل.",
    },
  ];

  const articles = [
    {
      title:
        language === "en"
          ? "Why Buy Cummins QSK Engine Parts?"
          : "لماذا تشتري قطع غيار محركات كومنز QSK؟",
      content:
        language === "en"
          ? "For over 100 years, Cummins has been the industry's #1 choice for new diesel engines, as well as the parts used to keep them operating reliably and efficiently for decades. The Genuine Cummins parts that you buy from a Cummins distributor or authorized dealer are built to our exact standards, meeting or exceeding original specifications on your QSK engine."
          : "لأكثر من 100 عام، كانت كومنز الخيار الأول عالمياً لمحركات الديزل وقطع غيارها. قطع كومنز الأصلية التي تشتريها من الموزع المعتمد مصممة ومصنعة وفقاً لأعلى معايير الجودة لتلبي أو تتجاوز المواصفات القياسية لمحركك.",
    },
    {
      title:
        language === "en"
          ? "Non-Genuine Parts Fail to Measure Up"
          : "القطع غير الأصلية تفشل في القياسات الهندسية",
      content:
        language === "en"
          ? "Today non-genuine parts suppliers develop parts that they think will fit your Cummins engine. While the initial savings can be enticing, oftentimes there are differences compared to the Genuine Cummins part that you may or may not be able to see with the naked eye. Independent testing confirmed that every imitation part category failed in dimensional measurement or metallurgical inspection compared to Cummins engineering standards."
          : "تقوم جهات تصنيع مقلدة بإنتاج أجزاء تبدو مشابهة، ولكن الاختبارات المعملية المستقلة أكدت فشل جميع فئات القطع غير الأصلية في مطابقة أبعاد التصميم الهندسي أو جودة السبائك المعدنية لمعايير كومنز.",
    },
    {
      title:
        language === "en"
          ? "Saving a Little Upfront Could Ultimately Cost You"
          : "التوفير البسيط في البداية سيكلفك أضعافاً لاحقاً",
      content:
        language === "en"
          ? "Using non-genuine parts does more than compromise the performance of your high-horsepower engine. It jeopardizes your business and makes it hard to meet customer expectations. The miniscule amount you save upfront using non-genuine parts is likely to cost you big time down the road. When your profitability and reputation count on it, use Genuine Cummins Parts to assure continuous performance."
          : "إن استخدام الأجزاء غير الأصلية يعرض استثماراتك وسمعة أعمالك للخطر. ما توفره في سعر الشراء الأولي ستدفعه أضعافاً مضاعفة في تكاليف الأعطال الطارئة وتوقف العمليات.",
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-28">
      {/* 1. Page Hero Banner */}
      <SubpageHero
        subtitle={
          language === "en" ? "Alkan Authorized Kits" : "أطقم الصيانة المعتمدة"
        }
        title={language === "en" ? "Cummins" : "أطقم"}
        accentWord={language === "en" ? "Kits" : "كومنز"}
        watermark="Alkan"
        bgImage="/uploads/2023/05/engine-technician-shop-800.jpg"
      />

      {/* 2. Section 1: Cummins Kit + Watch Video + 4 Packaged Kits */}
      <section className="py-16 sm:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="space-y-6 lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
                  {language === "en" ? "Alkan Genuine Kits" : "أطقم ألكان الأصلية"}
                </span>
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                  <path d="M0 2H24" stroke="#E2231B" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M6 6H24" stroke="#E2231B" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M12 10H24" stroke="#E2231B" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-heading leading-tight uppercase">
                {language === "en" ? "Cummins" : "أطقم"}{" "}
                <span className="text-[#E2231B]">{language === "en" ? "Kit" : "كومنز"}</span>
              </h2>

              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                {language === "en"
                  ? "Genuine products packaged together to provide the best protection for your Cummins Engines at Excellent Value!"
                  : "منتجات وقطع غيار أصلية مجمعة معاً لتوفير أفضل حماية لمحركات كومنز بأعلى قيمة اقتصادية!"}
              </p>

              {/* 4 Packaged Kits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {kits.map((k) => (
                  <div
                    key={k.num}
                    className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 shadow-sm flex items-center gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#E2231B] text-white flex items-center justify-center font-black text-sm flex-shrink-0">
                      {k.num}
                    </div>
                    <span className="font-bold text-neutral-900 text-xs sm:text-sm font-heading">
                      {k.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Video Button */}
              <div className="pt-2">
                <button
                  onClick={() => setVideoOpen(true)}
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#E2231B] hover:bg-[#9E0202] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-600/20 group"
                >
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-current text-white translate-x-0.5" />
                  </span>
                  <span>
                    {language === "en"
                      ? "Why Buy Genuine Cummins Parts?"
                      : "لماذا تشتري قطع غيار كومنز الأصلية؟"}
                  </span>
                </button>
              </div>
            </div>

            {/* Right Circular Graphic */}
            <div className="flex justify-center lg:col-span-5 relative">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 rounded-full border-[12px] sm:border-[16px] border-[#E2231B] shadow-2xl overflow-hidden bg-neutral-100">
                  <Image
                    src="/uploads/2023/05/engine-technician-shop-800.jpg"
                    alt="Genuine Cummins Parts Kit"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-neutral-100 max-w-[260px] sm:max-w-xs z-20 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#E2231B]">
                    <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                    <span className="font-extrabold text-xs text-neutral-900 font-heading">
                      {language === "en" ? "Cummins Authorized Distributor" : "الوكيل المعتمد لكومنز"}
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">
                    {language === "en"
                      ? "Only buy Genuine Cummins parts and accessories from Cummins distributors or Cummins authorized dealer locations"
                      : "اشترِ دائماً قطع الغيار الأصلية من موزعي كومنز المعتمدين فقط"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section 2: There is a Difference (Media Feature Block) */}
      <MediaFeatureList
        title={language === "en" ? "There is a" : "هناك"}
        accentWord={language === "en" ? "Difference" : "فارق حقيقي"}
        intro={
          language === "en"
            ? "Many competitive parts manufacturers try to reverse engineer Cummins parts and build something reasonably close at a cheaper price. The problem is, these non-genuine parts usually don’t meet critical specifications either dimensionally or from a materials standpoint."
            : "يحاول العديد من مصنعي الأجزاء المنافسين إجراء هندسة عكسية لقطع غيار كومنز وبناء شيء قريب بسعر أرخص. المشكلة هي أن هذه الأجزاء غير الأصلية عادة لا تلبي المواصفات الهندسية الحرجة سواء من حيث الأبعاد أو جودة السبائك."
        }
        image="/uploads/2023/05/genuine-parts-box-800x400-1.jpg"
        items={[
          {
            title:
              language === "en"
                ? "Dimensional Precision"
                : "دقة الأبعاد الهندسية القياسية",
            desc:
              language === "en"
                ? "Genuine Cummins components are machined to micron-level tolerances that imitation parts simply cannot replicate."
                : "تصنيع دقيق بمستوى الميكرون يضمن التطابق التام مع مواصفات المحرك الأصلية.",
          },
          {
            title:
              language === "en"
                ? "Advanced Metallurgy & Heat Treatment"
                : "سبائك معدنية ومعالجة حرارية متطورة",
            desc:
              language === "en"
                ? "Patented metallurgy engineered to withstand extreme pressures and thermal cycles without cracking."
                : "معادن معالجة حرارياً لتحمل أقصى درجات الضغط والحرارة دون تشقق أو فشل ميكانيكي.",
          },
          {
            title:
              language === "en"
                ? "Full Factory Warranty Protection"
                : "حماية الضمان المعتمد الكامل",
            desc:
              language === "en"
                ? "Every genuine kit is backed by official Cummins factory warranty coverage worldwide."
                : "تغطية ضمان المصنع الكاملة في جميع أنحاء العالم.",
          },
        ]}
      />

      {/* 4. Section 3: The Risk of using Non-Genuine Parts (6 Cards Grid) */}
      <AdvantageCardsGrid
        subtitle={
          language === "en" ? "Why buy Genuine Cummins Parts?" : "لماذا تشتري القطع الأصلية؟"
        }
        title={language === "en" ? "The Risk Of" : "مخاطر استخدام"}
        accentWord={language === "en" ? "Non-Genuine Parts" : "القطع المقلدة"}
        watermark="Genuine"
        cards={risks}
      />

      {/* 5. Section 4: The Genuine Difference CTA Banner with 3 Stat Cards */}
      <CtaStatsBanner
        title={language === "en" ? "The Genuine Difference" : "الفارق الأصلي الحقيقي"}
        desc={
          language === "en"
            ? "The Genuine Cummins parts that you buy from a Cummins distributor or authorized dealer are built to our exact standards, meeting or exceeding original specifications on your QSK engine."
            : "قطع غيار كومنز الأصلية التي تشتريها من الموزع المعتمد مصممة ومصنعة وفقاً لأعلى معايير الجودة لتلبي أو تتجاوز المواصفات القياسية لمحركك."
        }
        buttonText={language === "en" ? "Request Parts Quote" : "طلب عرض سعر قطع الغيار"}
        bgImage="/uploads/2023/05/imc-slider-2.jpeg"
        stats={[
          {
            number: "300+",
            label:
              language === "en"
                ? "Genuine overhaul kit components tested through lab analysis"
                : "قطعة غيار تم فحصها معملياً لأعلى درجات الاعتمادية",
            icon: "pin",
          },
          {
            number: "0%",
            label:
              language === "en"
                ? "Non-genuine parts met all Cummins design specifications in tests"
                : "نسبة مطابقة القطع المقلدة لمواصفات التصميم في الاختبارات",
            icon: "shield",
          },
          {
            number: "100+",
            label:
              language === "en"
                ? "Years of perfecting the design and manufacturing of Genuine Cummins parts"
                : "عاماً من التميز في تصنيع وتطوير قطع غيار كومنز الأصلية",
            icon: "globe",
          },
        ]}
      />

      {/* 6. Section 5: Technical Articles & Details Tabs */}
      <section className="py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
              {language === "en" ? "Technical Insights" : "معلومات فنية متخصصة"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 font-heading">
              {language === "en" ? "Deep Dive" : "تفاصيل علمية"}{" "}
              <span className="text-[#E2231B]">{language === "en" ? "Analysis" : "وتحليلية"}</span>
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 border-b border-neutral-200 pb-4">
            {articles.map((art, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === idx
                    ? "bg-[#E2231B] text-white shadow-md"
                    : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                {art.title}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-sm space-y-4 animate-fadeIn">
            <h3 className="text-2xl font-bold text-neutral-900 font-heading">
              {articles[activeTab].title}
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              {articles[activeTab].content}
            </p>
            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-neutral-400">
                Cummins Engineering Standard QSK Series
              </span>
              <button
                onClick={() => openQuote()}
                className="text-xs font-bold text-[#E2231B] hover:text-[#9E0202] uppercase tracking-wider flex items-center gap-1"
              >
                <span>{language === "en" ? "Inquire About Kits" : "استفسر عن الأطقم"}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=Pd1LYnbpP1k"
      />
    </div>
  );
}
