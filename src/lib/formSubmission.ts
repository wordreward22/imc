import type { Language } from "@/context/LanguageContext";

export type SubmissionType = "quote" | "contact" | "careers" | "repairs" | "training";

export async function submitForm(type: SubmissionType, language: Language, fields: Record<string, string>, cv?: File | null) {
  const body = new FormData();
  body.set("type", type);
  body.set("language", language);
  body.set("website", "");
  for (const [key, value] of Object.entries(fields)) body.set(key, value);
  if (cv) body.set("cv", cv);

  const response = await fetch("/api/submit", { method: "POST", body });
  if (!response.ok) {
    const result = await response.json().catch(() => null);
    throw new Error(typeof result?.error === "string" ? result.error : "SUBMISSION_FAILED");
  }
}

export const submissionNotice: Record<Language, { title: string; description: string; careerDescription: string; error: string; notConfigured: string; invalidCv: string; largeCv: string }> = {
  en: {
    title: "Request sent",
    description: "Your request has been sent to IMC Iraq. We will contact you using the details you provided.",
    careerDescription: "Your application and CV have been sent to IMC Iraq.",
    error: "Your request could not be sent. Please try again or email info@imc.iq.",
    notConfigured: "Online submissions are not configured yet. Please email info@imc.iq.",
    invalidCv: "Please upload a valid PDF, DOC, or DOCX CV.",
    largeCv: "The CV must be 10 MB or smaller.",
  },
  ar: {
    title: "تم إرسال الطلب",
    description: "تم إرسال طلبك إلى شركة المعدات العالمية. سنتواصل معك عبر البيانات التي قدمتها.",
    careerDescription: "تم إرسال طلب التوظيف وسيرتك الذاتية إلى شركة المعدات العالمية.",
    error: "تعذر إرسال طلبك. يرجى المحاولة مجددًا أو مراسلة info@imc.iq.",
    notConfigured: "الإرسال عبر الموقع غير مهيأ بعد. يرجى مراسلة info@imc.iq.",
    invalidCv: "يرجى تحميل سيرة ذاتية صالحة بصيغة PDF أو DOC أو DOCX.",
    largeCv: "يجب ألا يتجاوز حجم السيرة الذاتية 10 ميجابايت.",
  },
  ku: {
    title: "داواکارییەکەت نێردرا",
    description: "داواکارییەکەت بۆ IMC عێراق نێردرا. لە ڕێگەی زانیارییەکانی پێشکەشتکردووە پەیوەندیت پێوە دەکەین.",
    careerDescription: "داواکاری کار و سیڤییەکەت بۆ IMC عێراق نێردران.",
    error: "داواکارییەکەت نەنێردرا. تکایە دووبارە هەوڵ بدە یان نامە بۆ info@imc.iq بنێرە.",
    notConfigured: "ناردنی داواکاری لە ڕێگەی ماڵپەڕەوە هێشتا ئامادە نەکراوە. تکایە نامە بۆ info@imc.iq بنێرە.",
    invalidCv: "تکایە سیڤییەکی دروست بە فۆرماتی PDF یان DOC یان DOCX بار بکە.",
    largeCv: "قەبارەی سیڤی نابێت لە 10 مێگابایت زیاتر بێت.",
  },
};

export function submissionError(error: unknown, language: Language) {
  if (error instanceof Error) {
    if (error.message === "MAIL_NOT_CONFIGURED") return submissionNotice[language].notConfigured;
    if (error.message === "INVALID_CV" || error.message === "CV_REQUIRED") return submissionNotice[language].invalidCv;
    if (error.message === "CV_TOO_LARGE" || error.message === "TOO_LARGE") return submissionNotice[language].largeCv;
  }
  return submissionNotice[language].error;
}
