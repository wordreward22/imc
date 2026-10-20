"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  Headphones,
} from "lucide-react";

export default function ContactPage() {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Power Generation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Subpage Hero */}
      <SubpageHero
        subtitle="IMC Iraq"
        title="Contact"
        accentWord="us"
        watermark="IMC Iraq"
        bgImage="/uploads/2023/05/engine-technician-shop-800.jpg"
      />

      {/* 2. Main Contact Section (Grow Your Business With Our Expertise) */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle Watermark */}
        <div className="absolute top-10 inset-x-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
          <span className="text-[120px] sm:text-[180px] font-black uppercase text-neutral-900 tracking-widest font-heading">
            CONNECT
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Narrative & Fancy Contact Detail Boxes */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
                    Contact us
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

                <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight font-heading uppercase">
                  Grow Your Business With{" "}
                  <span className="text-[#E2231B]">Our Expertise</span>
                </h2>

                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Thank you for your interest in IMC&apos;s products &amp; services. We are excited to hear from you and provide the exceptional services and support you need. Whether you have questions, require assistance, or are interested in joining our team, we are here to help.
                </p>
              </div>

              {/* 4 Fancy Contact Cards */}
              <div className="space-y-4">
                {/* Baghdad Office */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 shadow-sm hover:border-[#E2231B]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E2231B] flex items-center justify-center flex-shrink-0 border border-red-100">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Office Address
                    </h3>
                    <p className="text-sm font-bold text-neutral-900 mt-0.5">
                      Baghdad Branch - Ewairij Industrial Zone
                    </p>
                  </div>
                </div>

                {/* Basra Office */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 shadow-sm hover:border-[#E2231B]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#111111] text-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Office Address
                    </h3>
                    <p className="text-sm font-bold text-neutral-900 mt-0.5">
                      Basra Branch - Hamdan Street
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 shadow-sm hover:border-[#E2231B]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E2231B] flex items-center justify-center flex-shrink-0 border border-red-100">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Phone Number
                    </h3>
                    <a
                      href="tel:+9647842000220"
                      className="text-sm font-bold text-neutral-900 mt-0.5 block hover:text-[#E2231B] transition-colors"
                    >
                      +964 7842 000 220
                    </a>
                  </div>
                </div>

                {/* Mail */}
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/90 shadow-sm hover:border-[#E2231B]/40 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#111111] text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Mail address
                    </h3>
                    <a
                      href="mailto:info@imc.iq"
                      className="text-sm font-bold text-neutral-900 mt-0.5 block hover:text-[#E2231B] transition-colors"
                    >
                      info@imc.iq
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form matching 1:1 */}
            <div className="lg:col-span-7">
              <div className="bg-[#111111] text-white p-8 sm:p-12 rounded-3xl border border-neutral-800 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-white">
                      Message Sent Successfully
                    </h3>
                    <p className="text-neutral-400 text-sm max-w-md mx-auto">
                      Thank you, <span className="text-white font-medium">{formData.name}</span>. Your inquiry has been routed to our specialized Cummins engineering department. We will respond promptly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", service: "Power Generation", message: "" });
                      }}
                      className="px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#E2231B] block mb-1">
                        Send An Inquiry
                      </span>
                      <h3 className="text-2xl font-bold font-heading text-white uppercase">
                        Get In Touch With Our Engineers
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                          Your Name <span className="text-[#E2231B]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name*"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                          Mail <span className="text-[#E2231B]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Mail*"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                          Your Phone
                        </label>
                        <input
                          type="tel"
                          placeholder="Your Phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                          Select Service <span className="text-[#E2231B]">*</span>
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-[#E2231B] transition-colors"
                        >
                          <option value="Power Generation">Power Generation</option>
                          <option value="Parts">Parts</option>
                          <option value="Service">Service</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                        Your Message <span className="text-[#E2231B]">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Your Message*"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2 border-t border-neutral-800">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#E2231B] hover:bg-[#9E0202] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-600/30 disabled:opacity-50"
                      >
                        {submitting ? "Sending..." : "Submit Now"}
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Facilities / Map Section */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
              Our Locations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-heading uppercase">
              Authorized Service Centers &amp; Workshops
            </h2>
            <div className="w-12 h-1 bg-[#E2231B] mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Baghdad Main Facility */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E2231B] block">
                    Headquarters &amp; Master Workshop
                  </span>
                  <h3 className="text-xl font-bold font-heading text-neutral-900 mt-1">
                    Baghdad - Ewairij Industrial Zone
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E2231B] flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3 text-sm text-neutral-600">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#E2231B] flex-shrink-0" />
                  <span>Ewairij Industrial Area, Expressway, Baghdad, Iraq</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#E2231B] flex-shrink-0" />
                  <span>+964 7842 000 220</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#E2231B] flex-shrink-0" />
                  <span>Sunday – Thursday: 8:00 AM – 5:00 PM (24/7 Emergency Dispatch)</span>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-neutral-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Full Engine Overhaul Facility &amp; Central Spare Parts Depot</span>
              </div>
            </div>

            {/* Basra Regional Facility */}
            <div className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E2231B] block">
                    Southern Regional Facility
                  </span>
                  <h3 className="text-xl font-bold font-heading text-neutral-900 mt-1">
                    Basra - Hamdan Street
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3 text-sm text-neutral-600">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#E2231B] flex-shrink-0" />
                  <span>Hamdan Industrial District, Basra, Southern Iraq</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#E2231B] flex-shrink-0" />
                  <span>+964 7842 000 220</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#E2231B] flex-shrink-0" />
                  <span>Sunday – Thursday: 8:00 AM – 5:00 PM (24/7 Oil &amp; Gas Dispatch)</span>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-neutral-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Oilfield Specialized Support &amp; Mobile Service Units</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA Stats Banner */}
      <CtaStatsBanner
        title="The Genuine Difference"
        desc="Thank you for your interest in IMC's products & services. We are excited to hear from you and provide the exceptional services and support you need."
        buttonText="Request A Quote"
        bgImage="/uploads/2023/05/engine-technician-shop-800.jpg"
        stats={[
          {
            number: "24/7",
            label: "Emergency technical dispatch and support available across Iraq",
            icon: "shield",
          },
          {
            number: "100%",
            label: "Official Cummins distributor warranty and authentic parts backing",
            icon: "award",
          },
          {
            number: "2+",
            label: "Full-scale authorized service centers in Baghdad & Basra",
            icon: "pin",
          },
        ]}
      />
    </div>
  );
}
