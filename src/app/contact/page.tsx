"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ContactPage() {
  const { language, isRtl } = useLanguage();
  const t = translations[language];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Power Generation",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 700);
  };

  return (
    <div className="bg-neutral-50 min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative bg-black text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/uploads/2023/05/engine-technician-shop-800.jpg"
            alt="Contact IMC Iraq"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cummins-red/20 border border-cummins-red/40 text-cummins-red text-xs font-bold uppercase tracking-wider">
              {t.contactUs}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
              {language === "en"
                ? "Grow Your Business With Our Expertise"
                : language === "ar"
                ? "طور أعمالك مع خبرة مهندسينا"
                : "پەرە بە کارەکانت بدە بە هاوکاری ئێمە"}
            </h1>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {language === "en"
                ? "Thank you for your interest in IMC's products & services. We are excited to hear from you and provide the exceptional services and support you need."
                : language === "ar"
                ? "شكراً لاهتمامكم بمنتجات وخدمات IMC. يسعدنا تواصلكم وتقديم أعلى مستويات الدعم الفني المعتمد."
                : "سوپاس بۆ پەیوەندیکردنت بە ئای ئێم سی. ئێمە ئامادەین بۆ پێشکەشکردنی باشترین خزمەتگوزاری."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Branch Offices & Contact Cards */}
          <div className="lg:col-span-1 space-y-4">
            {/* Baghdad Branch */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-cummins-red flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-neutral-900 font-heading">
                {language === "en" ? "Baghdad Main Branch" : "فرع بغداد الرئيسي"}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {language === "en"
                  ? "Ewairij Industrial Area, Baghdad, Iraq"
                  : "المنطقة الصناعية - عويريج، بغداد، العراق"}
              </p>
              <div className="pt-2 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-neutral-800">
                <Clock className="w-3.5 h-3.5 text-cummins-red" />
                <span>{t.workingHours}</span>
              </div>
            </div>

            {/* Basra Branch */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-md space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-neutral-900 font-heading">
                {language === "en" ? "Basra Branch" : "فرع البصرة"}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {language === "en"
                  ? "Hamdan Street, Basra, Iraq"
                  : "شارع حمدان، البصرة، العراق"}
              </p>
              <div className="pt-2 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-neutral-800">
                <Clock className="w-3.5 h-3.5 text-cummins-red" />
                <span>{t.workingHours}</span>
              </div>
            </div>

            {/* Direct Phone & Email */}
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cummins-red flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400">Direct Telephone</p>
                  <a href="tel:+9647842000220" dir="ltr" className="font-bold text-sm hover:text-cummins-red transition-colors">
                    {t.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-neutral-700/60">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400">Official Inquiries</p>
                  <a href="mailto:info@imc.iq" className="font-bold text-sm hover:text-cummins-red transition-colors">
                    {t.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 border border-neutral-200/80 shadow-md">
            {sent ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  {language === "en" ? "Message Sent Successfully!" : "تم إرسال رسالتكم بنجاح!"}
                </h3>
                <p className="text-neutral-600 text-sm max-w-md mx-auto">
                  {language === "en"
                    ? "Thank you for contacting IMC Iraq. One of our engineers will follow up with you within 24 hours."
                    : "شكراً لتواصلك مع IMC العراق. سيقوم أحد مهندسينا بالتواصل معك خلال 24 ساعة."}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2.5 bg-cummins-red text-white text-xs font-bold uppercase rounded-xl"
                >
                  {language === "en" ? "Send Another Message" : "إرسال رسالة أخرى"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 font-heading">
                    {language === "en" ? "Send an Inquiry" : "أرسل استفسارك الفني"}
                  </h3>
                  <p className="text-neutral-500 text-xs mt-1">
                    {language === "en"
                      ? "Fill in the form below and our team in Iraq will get back to you promptly."
                      : "املأ النموذج أدناه وسيتواصل معك فريقنا في العراق في أقرب وقت."}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      {language === "en" ? "Your Name *" : "الاسم الكامل *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-cummins-red/20 focus:border-cummins-red outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      {language === "en" ? "Email Address *" : "البريد الإلكتروني *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-cummins-red/20 focus:border-cummins-red outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      {language === "en" ? "Phone Number *" : "رقم الهاتف *"}
                    </label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-cummins-red/20 focus:border-cummins-red outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      {language === "en" ? "Select Service Area *" : "اختر الخدمة المطلوبة *"}
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-cummins-red/20 focus:border-cummins-red outline-none"
                    >
                      <option value="Power Generation">Power Generation / مولدات الطاقة</option>
                      <option value="Parts">Genuine Cummins Parts / قطع الغيار</option>
                      <option value="Service">Field & Workshop Service / الصيانة</option>
                      <option value="Training">Technical Training / التدريب الفني</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    {language === "en" ? "Message / Inquiry Details *" : "تفاصيل الرسالة أو الطلب *"}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-cummins-red/20 focus:border-cummins-red outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="px-8 py-3 bg-cummins-red hover:bg-cummins-red-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-600/20 transition-all flex items-center justify-center gap-2"
                >
                  {sending ? (
                    <span>...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{language === "en" ? "Submit Now" : "إرسال الآن"}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
