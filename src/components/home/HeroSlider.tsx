"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const HeroSlider: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const t = translations[language];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/uploads/2023/05/imc-bg-slider.jpeg",
      subtitle: t.slider1Subtitle,
      title: t.slider1Title,
      description: t.slider1Desc,
      cta1Text: t.aboutUs,
      cta1Href: "/about",
      cta2Text: t.contactUs,
      cta2Href: "/contact",
    },
    {
      id: 2,
      image: "/uploads/2023/05/imc-slider-1.jpeg",
      subtitle: t.slider2Subtitle,
      title: t.slider2Title,
      description: t.slider2Desc,
      cta1Text: t.imcServicesTitle,
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
    <div className="relative w-full h-[580px] sm:h-[640px] md:h-[700px] overflow-hidden bg-black">
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />

            {/* Content Container */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center">
              <div className="max-w-2xl space-y-6 text-white">
                {/* Authentic Subtitle Pill */}
                <div>
                  <span className="inline-block px-5 py-1.5 rounded-full bg-white text-[#E2231B] text-sm sm:text-base font-bold shadow-md">
                    {slide.subtitle}
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight uppercase font-heading text-white">
                  {slide.title}
                </h1>

                {/* Narrative Description */}
                <p className="text-sm sm:text-base md:text-lg text-neutral-200 leading-relaxed font-normal">
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  {slide.cta1Href && (
                    <Link
                      href={slide.cta1Href}
                      className="px-7 py-3.5 bg-[#E2231B] hover:bg-[#9E0202] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center gap-2 transition-colors duration-200"
                    >
                      <span>{slide.cta1Text}</span>
                      <ArrowRight className={`w-4 h-4 ${isRtl ? "rotate-180" : ""}`} />
                    </Link>
                  )}

                  {slide.cta2Href && (
                    <Link
                      href={slide.cta2Href}
                      className="px-7 py-3.5 bg-black/50 hover:bg-black/70 text-white border border-white/30 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors duration-200"
                    >
                      <span>{slide.cta2Text}</span>
                    </Link>
                  )}
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
          className="w-11 h-11 rounded-full bg-black/70 hover:bg-[#E2231B] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-11 h-11 rounded-full bg-black/70 hover:bg-[#E2231B] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
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
                ? "w-8 bg-[#E2231B]"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
