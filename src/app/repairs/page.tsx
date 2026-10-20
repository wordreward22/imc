"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SubpageHero } from "@/components/subpage/SubpageHero";
import { CircularFeatureBlock } from "@/components/subpage/CircularFeatureBlock";
import { MediaFeatureList } from "@/components/subpage/MediaFeatureList";
import { CtaStatsBanner } from "@/components/subpage/CtaStatsBanner";
import { useLanguage } from "@/context/LanguageContext";
import { useQuote } from "@/context/QuoteContext";
import { CheckCircle2, Send, Wrench, ShieldCheck, Clock, MapPin } from "lucide-react";

export default function RepairsPage() {
  const { language } = useLanguage();
  const { openQuote } = useQuote();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    country: "",
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

  const featureItems = [
    {
      title: "1. Prompt Response, Anytime",
      desc: "Our team of highly skilled technicians is available around the clock, ready to respond promptly to your service requests.",
    },
    {
      title: "2. Expert Diagnosis for Swift Solutions",
      desc: "Our technicians are certified by Cummins and possess in-depth knowledge and expertise in generator systems.",
    },
    {
      title: "3. On-Site Repairs for Minimum Disruption",
      desc: "When it comes to generator repairs, time is of the essence.. Our mobile workshops perform swift troubleshooting and overhauls on-site.",
    },
    {
      title: "4. Technical Support and Peace of Mind",
      desc: "Our Field Service Option comes with comprehensive technical support, providing you with guidance, advice, and answers to your questions regarding generator operation, maintenance, and troubleshooting.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Subpage Hero */}
      <SubpageHero
        subtitle="Alkan"
        title="Field"
        accentWord="Service"
        watermark="Alkan"
        bgImage="/uploads/2023/05/field-service.jpg"
      />

      {/* 2. Circular Feature Block */}
      <CircularFeatureBlock
        subtitle="Field Service"
        title="Responding to Customer's Needs"
        accentWord="On Site"
        paragraphs={[
          "At Alkan, we understand the critical importance of uninterrupted power supply for your business. That's why we are thrilled to offer our comprehensive Field Service Option for Cummins generators, bringing exceptional service and expertise right to your doorstep.",
          "With Alkan's Field Service Option, you can enjoy a range of benefits that are designed to maximize the performance and reliability of your Cummins generator, while minimizing downtime and optimizing your operations.",
        ]}
        image="/uploads/2023/05/field-service-e1685022126314.jpg"
        badgeTitle="Cummins Authorized Distributor"
        badgeText="Only buy Genuine Cummins parts and accessories from Cummins distributors or Cummins authorized dealer locations"
      />

      {/* 3. Media Feature List */}
      <MediaFeatureList
        title="Responding to Customer's Needs"
        accentWord="On Site"
        intro="By choosing Alkan's Field Service Option, you can benefit from a range of advantages that are designed to minimize downtime, deliver meticulous repairs, and ensure the reliable operation of your Cummins generator:"
        image="/uploads/2023/04/2m6wwkx.jpg"
        items={featureItems}
      />

      {/* 4. Interactive Field Service Request Form */}
      <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
        {/* Subtle Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
          <span className="text-[140px] sm:text-[200px] font-black uppercase text-white tracking-widest font-heading">
            ALKAN
          </span>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="flex items-center justify-center gap-3">
              <span className="text-[#E2231B] font-bold text-xs uppercase tracking-wider font-heading">
                Contact us today
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
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-heading uppercase">
              Fill the below fields to request{" "}
              <span className="text-[#E2231B]">Field Service Visit</span>
            </h2>
            <div className="w-16 h-1 bg-[#E2231B] mx-auto rounded-full mt-3" />
          </div>

          <div className="bg-[#111111] p-8 sm:p-12 rounded-3xl border border-neutral-800 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">
                  Field Service Request Received
                </h3>
                <p className="text-neutral-400 text-sm max-w-md mx-auto">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Our technical dispatch team will contact you shortly to coordinate the visit.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", company: "", email: "", phone: "", city: "", country: "" });
                  }}
                  className="px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Name <span className="text-[#E2231B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Name*"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Company Name <span className="text-[#E2231B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Company Name*"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      E-Mail <span className="text-[#E2231B]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="E-Mail*"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      placeholder="Country"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[#E2231B] transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#E2231B] hover:bg-[#9E0202] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-600/30 disabled:opacity-50"
                  >
                    {submitting ? "Sending..." : "Apply Now"}
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. CTA Stats Banner */}
      <CtaStatsBanner
        title="The Genuine Difference"
        desc="Our workshop technicians and field engineers utilize genuine Cummins parts, ensuring compatibility and reliability. With meticulous attention to detail, they carry out comprehensive repairs that adhere to Cummins' stringent standards, guaranteeing the optimal functionality of your generator."
        buttonText="Request A Service Visit"
        bgImage="/uploads/2023/05/field-service.jpg"
        stats={[
          {
            number: "24/7",
            label: "Emergency on-site response dispatch available across Iraq",
            icon: "shield",
          },
          {
            number: "100%",
            label: "Cummins certified field technicians with specialized diagnostic computers",
            icon: "award",
          },
          {
            number: "15+",
            label: "Fully equipped mobile service fleet stationed regionally",
            icon: "pin",
          },
        ]}
      />
    </div>
  );
}
