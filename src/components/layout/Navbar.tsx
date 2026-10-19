"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useQuote } from "@/context/QuoteContext";

export const Navbar: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const t = translations[language];
  const { openQuote } = useQuote();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      title: t.home,
      href: "/",
    },
    {
      title: t.aboutUs,
      href: "/about",
      children: [
        { title: t.aboutUs, href: "/about" },
        { title: t.missionVision, href: "/about#mission" },
        { title: t.cumminsHistory, href: "/about#cummins-history" },
        { title: t.alkanHistory, href: "/about#alkan-history" },
        { title: t.careers, href: "/careers" },
      ],
    },
    {
      title: t.powerSystem,
      href: "/power-generation",
      children: [
        { title: t.generators, href: "/power-generation" },
        { title: t.renewablePower, href: "/renewable-power" },
      ],
    },
    {
      title: t.productSupport,
      href: "/imc-services",
      children: [
        { title: t.spareParts, href: "/cummins-kit" },
        { title: t.service, href: "/imc-services" },
        { title: t.fieldService, href: "/repairs" },
        { title: t.workshopRepairs, href: "/master-rebuild" },
        { title: t.serviceContracts, href: "/preventative-maintenance" },
        { title: t.training, href: "/training" },
        { title: t.cumminsFiltration, href: "/fleet-guard" },
        { title: t.oils, href: "/oils" },
        { title: t.engines, href: "/engines" },
      ],
    },
    {
      title: t.contactUs,
      href: "/contact",
    },
  ];

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white py-4 border-b border-neutral-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-36 sm:w-44 transition-transform group-hover:scale-[1.02]">
            <Image
              src="/uploads/2023/02/imc-logo-3d.png"
              alt="IMC Iraq - Authorized Cummins Seller"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <div
              key={link.title}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-neutral-800 hover:text-[#E2231B] transition-colors rounded-lg group-hover:bg-neutral-50"
              >
                <span>{link.title}</span>
                {link.children && (
                  <ChevronDown className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#E2231B] transition-transform group-hover:rotate-180" />
                )}
              </Link>

              {/* Dropdown Menu */}
              {link.children && (
                <div
                  className={`absolute top-full ${
                    isRtl ? "right-0" : "left-0"
                  } w-64 bg-white rounded-xl shadow-xl border border-neutral-100 py-2 transition-all duration-200 z-50 ${
                    activeDropdown === link.title
                      ? "opacity-100 tranneutral-y-0 pointer-events-auto"
                      : "opacity-0 tranneutral-y-2 pointer-events-none"
                  }`}
                >
                  {link.children.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.href}
                      className="flex items-center justify-between px-4 py-2.5 text-xs font-medium text-neutral-700 hover:bg-red-50/70 hover:text-[#E2231B] transition-colors"
                    >
                      <span>{sub.title}</span>
                      <ArrowRight className={`w-3 h-3 text-neutral-300 ${isRtl ? "rotate-180" : ""}`} />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => openQuote()}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-[#E2231B] hover:bg-[#9E0202] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors duration-200 shadow-sm"
          >
            <span>{t.getQuote}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-neutral-700 hover:text-[#E2231B] hover:bg-neutral-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-neutral-200 shadow-2xl max-h-[85vh] overflow-y-auto p-4 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <div key={link.title} className="border-b border-neutral-100 pb-2">
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-sm font-bold text-neutral-900 hover:text-[#E2231B]"
                >
                  {link.title}
                </Link>
                {link.children && (
                  <div className={`mt-1 space-y-1 ${isRtl ? "pr-4" : "pl-4"}`}>
                    {link.children.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-1.5 text-xs text-neutral-600 hover:text-[#E2231B]"
                      >
                        • {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  openQuote();
                }}
                className="w-full py-3 bg-[#E2231B] hover:bg-[#9E0202] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center transition-colors"
              >
                <span>{t.getQuote}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
