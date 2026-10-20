import type { Language } from "@/context/LanguageContext";

/** The site has no mail API. Hand the request to the visitor's email client. */
export function openEmailDraft(subject: string, fields: Record<string, string>) {
  const body = Object.entries(fields)
    .filter(([, value]) => value.trim())
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
  window.location.href = `mailto:info@imc.iq?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const emailDraftNotice: Record<Language, { title: string; description: string; careerDescription: string }> = {
  en: {
    title: "Finish sending your email",
    description: "Your email app should open with a draft. Please send it there to deliver your request. If it did not open, email info@imc.iq directly.",
    careerDescription: "Your email app should open with a draft. Attach your CV and send it there to apply. If it did not open, email info@imc.iq directly.",
  },
  ar: {
    title: "أكمل إرسال البريد الإلكتروني",
    description: "سيُفتح تطبيق البريد الإلكتروني مع مسودة جاهزة. أرسلها من التطبيق لإيصال طلبك. إذا لم تُفتح، راسل info@imc.iq مباشرة.",
    careerDescription: "سيُفتح تطبيق البريد الإلكتروني مع مسودة جاهزة. أرفق سيرتك الذاتية وأرسلها للتقديم. إذا لم تُفتح، راسل info@imc.iq مباشرة.",
  },
  ku: {
    title: "ناردنی ئیمەیڵەکەت تەواو بکە",
    description: "بەرنامەی ئیمەیڵەکەت دەبێت ڕەشنووسێک بکاتەوە. تکایە لەوێوە بینێرە. ئەگەر نەکرایەوە، ڕاستەوخۆ بۆ info@imc.iq بنێرە.",
    careerDescription: "بەرنامەی ئیمەیڵەکەت دەبێت ڕەشنووسێک بکاتەوە. سیڤییەکەت هاوپێچ بکە و بینێرە. ئەگەر نەکرایەوە، ڕاستەوخۆ بۆ info@imc.iq بنێرە.",
  },
};
