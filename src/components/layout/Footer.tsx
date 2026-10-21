"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ChevronRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export const Footer: React.FC = () => {
  const { language, isRtl } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[#0c0c0c] text-neutral-300 pt-16 pb-8 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1f1f1f]">
          {/* Col 1: About Brand */}
          <div className="space-y-4">
            <div className="relative h-16 w-48 rounded-lg bg-white p-2 shadow-sm">
              <Image
                src="/uploads/2023/02/imc-logo-3d.png"
                alt="IMC Iraq - Authorized Cummins Seller"
                fill
                className="object-contain p-2"
              />
            </div>
            <p className="text-white text-sm font-semibold font-heading">
              {language === "en"
                ? "IMC Iraq – Authorized Cummins Seller."
                : language === "ar"
                ? "شركة IMC العراق – الوكيل المعتمد لكومنز."
                : "ئای ئێم سی عێراق – بریکاری ڕێگەپێدراوی کۆمنز."}
            </p>
            <p className="text-neutral-400 text-xs leading-relaxed">
              {t.footerDesc}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://web.facebook.com/CumminsIMCIRAQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white text-black hover:bg-[#E2231B] hover:text-white transition-colors flex items-center justify-center shadow-sm"
              >
                <Facebook className="w-4 h-4 fill-current stroke-none" />
              </a>
              <a
                href="https://www.instagram.com/imc_iraq/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white text-black hover:bg-[#E2231B] hover:text-white transition-colors flex items-center justify-center shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/cummins-iraq/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white text-black hover:bg-[#E2231B] hover:text-white transition-colors flex items-center justify-center shadow-sm"
              >
                <Linkedin className="w-4 h-4 fill-current stroke-none" />
              </a>
            </div>
          </div>

          {/* Col 2: Site Map Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cummins-red"></span>
              <span>{t.siteMap}</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/about" className="hover:text-cummins-red transition-colors flex items-center gap-1.5">
                  <ChevronRight className={`w-3 h-3 text-neutral-600 ${isRtl ? "rotate-180" : ""}`} />
                  <span>{t.aboutUs}</span>
                </Link>
              </li>
              <li>
                <Link href="/power-generation" className="hover:text-cummins-red transition-colors flex items-center gap-1.5">
                  <ChevronRight className={`w-3 h-3 text-neutral-600 ${isRtl ? "rotate-180" : ""}`} />
                  <span>{t.generators}</span>
                </Link>
              </li>
              <li>
                <Link href="/cummins-kit" className="hover:text-cummins-red transition-colors flex items-center gap-1.5">
                  <ChevronRight className={`w-3 h-3 text-neutral-600 ${isRtl ? "rotate-180" : ""}`} />
                  <span>{t.spareParts}</span>
                </Link>
              </li>
              <li>
                <Link href="/engines" className="hover:text-cummins-red transition-colors flex items-center gap-1.5">
                  <ChevronRight className={`w-3 h-3 text-neutral-600 ${isRtl ? "rotate-180" : ""}`} />
                  <span>{t.engines}</span>
                </Link>
              </li>
              <li>
                <Link href="/imc-services" className="hover:text-cummins-red transition-colors flex items-center gap-1.5">
                  <ChevronRight className={`w-3 h-3 text-neutral-600 ${isRtl ? "rotate-180" : ""}`} />
                  <span>{t.service}</span>
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-cummins-red transition-colors flex items-center gap-1.5">
                  <ChevronRight className={`w-3 h-3 text-neutral-600 ${isRtl ? "rotate-180" : ""}`} />
                  <span>{t.training}</span>
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-cummins-red transition-colors flex items-center gap-1.5">
                  <ChevronRight className={`w-3 h-3 text-neutral-600 ${isRtl ? "rotate-180" : ""}`} />
                  <span>{t.careers}</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cummins-red transition-colors flex items-center gap-1.5">
                  <ChevronRight className={`w-3 h-3 text-neutral-600 ${isRtl ? "rotate-180" : ""}`} />
                  <span>{t.contactUs}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Solutions */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cummins-red"></span>
              <span>{t.powerSystem}</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <Link href="/power-generation" className="hover:text-cummins-red transition-colors">
                  • {t.generators}
                </Link>
              </li>
              <li>
                <Link href="/renewable-power" className="hover:text-cummins-red transition-colors">
                  • {t.renewablePower}
                </Link>
              </li>
              <li>
                <Link href="/fleet-guard" className="hover:text-cummins-red transition-colors">
                  • {t.fleetGuard}
                </Link>
              </li>
              <li>
                <Link href="/oils" className="hover:text-cummins-red transition-colors">
                  • {t.oils}
                </Link>
              </li>
              <li>
                <Link href="/master-rebuild" className="hover:text-cummins-red transition-colors">
                  • {t.workshopRepairs}
                </Link>
              </li>
              <li>
                <Link href="/preventative-maintenance" className="hover:text-cummins-red transition-colors">
                  • {t.serviceContracts}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Contact */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cummins-red"></span>
              <span>{t.officialInfo}</span>
            </h4>
            <div className="space-y-3.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cummins-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{t.baghdadOffice}</p>
                  <p className="text-neutral-500 mt-0.5">{t.basraOffice}</p>
                  <p className="text-neutral-500 mt-0.5">{t.erbilOffice}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cummins-red flex-shrink-0" />
                <a href="tel:+9647842000220" dir="ltr" className="hover:text-white transition-colors">
                  {t.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cummins-red flex-shrink-0" />
                <a href="mailto:info@imc.iq" className="hover:text-white transition-colors">
                  {t.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>{t.rightsReserved}</p>
          
        </div>
      </div>
    </footer>
  );
};
