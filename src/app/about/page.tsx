"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CircularFeatureBlock } from "@/components/subpage/CircularFeatureBlock";
import { VideoModal } from "@/components/subpage/VideoModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  ShieldCheck,
  Target,
  Eye,
  Award,
  Play,
  Users,
  Building2,
  Calendar,
  ThumbsUp,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  const { language } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const valuesList = [
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      desc: "Delivering exceptional responsiveness, personalized technical support, and reliable power solutions that build enduring client partnerships across Iraq.",
    },
    {
      icon: Award,
      title: "Quality",
      desc: "Providing uncompromised Cummins power generation systems, genuine OEM parts, and factory-trained engineering standards to ensure flawless operation.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      desc: "Holding ourselves to the highest ethical and corporate governance benchmarks, providing transparent advisory and reliable service you can depend on.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Subpage Hero */}
      <SubpageHero
        subtitle="IMC Iraq"
        title="About"
        accentWord="us"
        watermark="IMC Iraq"
        bgImage="/uploads/2023/05/engine-technician-shop-800.jpg"
      />

      {/* 2. Mission & Vision Circular Feature Block */}
      <CircularFeatureBlock
        subtitle="IMC Iraq"
        title="Our Mission &"
        accentWord="Vision"
        paragraphs={[
          "Our Mission: To provide the highest quality and most reliable Cummins engines and power solutions to our customers throughout Iraq.",
          "Our Vision: To be the top preferred dealer through exceptional customer service, technical expertise, and innovative solutions.",
        ]}
        image="/uploads/2023/03/slider-img-2.jpeg"
        badgeTitle="Cummins Authorized Distributor"
        badgeText="Only buy Genuine Cummins parts and accessories from Cummins distributors or Cummins authorized dealer locations"
      />

      {/* 3. Our Values Section */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden border-y border-neutral-200">
        {/* Subtle Watermark */}
        <div className="absolute top-8 inset-x-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
          <span className="text-[120px] sm:text-[180px] font-black uppercase text-neutral-900 tracking-widest font-heading">
            IMC
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
                Core Principles
              </span>
              <svg
                width="24"
                height="12"
                viewBox="0 0 24 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2H24"
                  stroke="#E2231B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6 6H24"
                  stroke="#E2231B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 10H24"
                  stroke="#E2231B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-heading uppercase">
              Our <span className="text-[#E2231B]">Values</span>
            </h2>
            <div className="w-16 h-1 bg-[#E2231B] mx-auto rounded-full mt-3" />
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {valuesList.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={idx}
                  className="w-full md:w-[calc(33.333%-22px)] max-w-md md:max-w-none bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-200 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E2231B] flex items-center justify-center border border-red-100">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 font-heading">
                    {val.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Cummins History & Cummins Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Image with Play Trigger */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-80 sm:h-96 md:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-neutral-100 bg-neutral-900">
                <Image
                  src="/uploads/2023/05/engine-closeup-banner.jpg"
                  alt="Cummins History"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating Play Video Badge */}
                <button
                  onClick={() => setActiveVideo("https://www.youtube.com/watch?v=B_zooNrioCA")}
                  className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-4 group text-left transition-all hover:bg-black/90"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E2231B] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-lg shadow-red-600/30">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                      Watch Video
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white uppercase font-heading">
                      Powering A World That&apos;s Always On
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
                  Since 1919
                </span>
                <div className="w-8 h-0.5 bg-[#E2231B]" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-heading uppercase">
                Cummins <span className="text-[#E2231B]">History</span> &amp; Values
              </h2>

              <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 font-heading mb-1">
                    Cummins History
                  </h3>
                  <p>
                    Since 1919, Cummins has turned challenges into opportunities, always looking for new solutions to power a more prosperous world. Discover a company founded on unwavering values and willing to solve problems for our customers, communities and environment, to make the world a better place.
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-100">
                  <h3 className="text-lg font-bold text-neutral-900 font-heading mb-1">
                    Cummins Values
                  </h3>
                  <p>
                    Cummins is synonymous with integrity, diversity and inclusion, teamwork, excellence and caring for others. These values are deeply rooted in our history, our culture and the people we employ around the world. Values are the backbone of our company. We stand tall because of them – even when standing for what is right comes at a cost.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveVideo("https://www.youtube.com/watch?v=B_zooNrioCA")}
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#E2231B] hover:bg-[#9E0202] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-600/20 group"
                >
                  <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                  <span>Watch Cummins Story</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Alkan Holding History */}
      <section className="py-20 bg-[#111111] text-white relative overflow-hidden border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
                  Our Group History
                </span>
                <div className="w-8 h-0.5 bg-[#E2231B]" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading uppercase">
                ALKAN HOLDING <span className="text-[#E2231B]">HISTORY</span>
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Alkan Holding Proudly Celebrated its 49th Anniversary in 2023 Under the Leadership of Khaled Nosseir. Alkan Group successfully operates a wide range of business lines, covering a variety of business activities, owns different companies, and runs through local subsidiaries and branches in 17 countries across the Middle East and Africa.
              </p>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                With more than 6000 professionals employed, Alkan Holding is actively engaged in multiple business fields, including Communication &amp; Information Technology, Real Estate, Manufacturing, Trade &amp; Distribution, Aviation, Travel &amp; Tourism, Textile &amp; Cotton Trade.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setActiveVideo("https://www.youtube.com/watch?v=QrZOzLDVVAs")}
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#E2231B] hover:bg-[#9E0202] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-600/30 group"
                >
                  <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                  <span>Watch Alkan Video</span>
                </button>
              </div>
            </div>

            {/* Right Visual Card with Logo */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/60 flex items-center justify-center p-8">
                <div className="relative w-48 h-20">
                  <Image
                    src="/uploads/2023/05/holding-White-1.png"
                    alt="Alkan Holding"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="relative h-48 sm:h-56 rounded-3xl overflow-hidden border border-neutral-800 shadow-xl">
                <Image
                  src="/uploads/2023/05/imc-iraq.jpg"
                  alt="IMC Iraq Facilities"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E2231B] block">
                    IMC Iraq
                  </span>
                  <span className="text-sm font-bold text-white uppercase font-heading">
                    Cummins Authorized Distributor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Authentic Counter Stats Section */}
      <section className="py-16 bg-black border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-[#111111] rounded-2xl p-8 border border-neutral-800 text-center space-y-2 hover:border-[#E2231B]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#E2231B]/10 text-[#E2231B] flex items-center justify-center mx-auto mb-4 border border-[#E2231B]/20">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-heading">
                49<span className="text-[#E2231B]">+</span>
              </div>
              <div className="text-neutral-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                Years of Experience
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-[#111111] rounded-2xl p-8 border border-neutral-800 text-center space-y-2 hover:border-[#E2231B]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#E2231B]/10 text-[#E2231B] flex items-center justify-center mx-auto mb-4 border border-[#E2231B]/20">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-heading">
                6000<span className="text-[#E2231B]">+</span>
              </div>
              <div className="text-neutral-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                Employees
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-[#111111] rounded-2xl p-8 border border-neutral-800 text-center space-y-2 hover:border-[#E2231B]/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#E2231B]/10 text-[#E2231B] flex items-center justify-center mx-auto mb-4 border border-[#E2231B]/20">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-heading">
                17<span className="text-[#E2231B]">+</span>
              </div>
              <div className="text-neutral-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                Subsidiaries &amp; Countries
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal
          isOpen={!!activeVideo}
          videoUrl={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </div>
  );
}
