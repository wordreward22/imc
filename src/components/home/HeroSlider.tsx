"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Zap, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

export const HeroSlider: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/uploads/2023/05/imc-bg-slider.jpeg",
      subtitle: t.slider1Subtitle,
      title: t.slider1Title,
      description: t.slider1Desc,
      cta1Text: t.exploreProducts,
      cta1Href: "/power-generation",
      cta2Text: t.getQuote,
      cta2Action: () => openQuote(),
    },
    {
      id: 2,
      image: "/uploads/2023/05/imc-slider-1.jpeg",
      subtitle: t.slider2Subtitle,
      title: t.slider2Title,
      description: t.slider2Desc,
      cta1Text: t.service,
      cta1Href: "/imc-services",
      cta2Text: t.contactUs,
      cta2Href: "/contact",
    },
  ];

  // Auto advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[580px] sm:h-[640px] md:h-[700px] overflow-hidden bg-slate-950">
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Zoom Effect */}
            <div className={`absolute inset-0 transition-transform duration-7000 ease-out ${
              isActive ? "scale-105" : "scale-100"
            }`}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center"
              />
            </div>

            {/* Dark & Brand Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

            {/* Content Container */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
              <div className="max-w-2xl space-y-5 text-white">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cummins-red/20 border border-cummins-red/40 backdrop-blur-md text-cummins-red text-xs sm:text-sm font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{slide.subtitle}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight uppercase font-heading text-white">
                  {slide.title}
                </h1>

                {/* Narrative Description */}
                <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-light">
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  {slide.cta1Href && (
                    <Link
                      href={slide.cta1Href}
                      className="px-6 py-3.5 bg-cummins-red hover:bg-cummins-red-dark text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/30 hover:shadow-red-600/40 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                    >
                      <span>{slide.cta1Text}</span>
                      <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
                    </Link>
                  )}

                  {slide.cta2Action ? (
                    <button
                      onClick={slide.cta2Action}
                      className="px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                    >
                      <Zap className="w-4 h-4 text-cummins-red" />
                      <span>{slide.cta2Text}</span>
                    </button>
                  ) : slide.cta2Href ? (
                    <Link
                      href={slide.cta2Href}
                      className="px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                    >
                      <span>{slide.cta2Text}</span>
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 right-4 sm:right-8 z-20 flex flex-col justify-center gap-3">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-11 h-11 rounded-full bg-slate-900/60 hover:bg-cummins-red text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-11 h-11 rounded-full bg-slate-900/60 hover:bg-cummins-red text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? "w-8 bg-cummins-red"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
