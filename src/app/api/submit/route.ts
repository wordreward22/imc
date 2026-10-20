export const runtime = "nodejs";

type RequestType = "quote" | "contact" | "careers" | "repairs" | "training";

const subjects: Record<RequestType, string> = {
  quote: "IMC Iraq quote request",
  contact: "IMC Iraq contact request",
  careers: "IMC Iraq careers application",
  repairs: "IMC Iraq field service request",
  training: "IMC Iraq training request",
};

const allowedFields: Record<RequestType, string[]> = {
  quote: ["product", "name", "company", "email", "phone", "city", "powerRequired", "message"],
  contact: ["name", "email", "phone", "service", "message"],
  careers: ["name", "email", "education", "phone"],
  repairs: ["name", "company", "email", "phone", "city", "country"],
  training: ["name", "email", "phone", "company", "notes"],
};

const maxFileBytes = 10 * 1024 * 1024;
const maxRequestBytes = 14 * 1024 * 1024;

function error(status: number, code: string) {
  return Response.json({ error: code }, { status });
}

function validCv(file: File, bytes: Buffer) {
  const extension = file.name.toLowerCase().split(".").pop();
  if (!extension || !["pdf", "doc", "docx"].includes(extension)) return false;
  if (extension === "pdf") return bytes.subarray(0, 5).toString() === "%PDF-";
  if (extension === "doc") return bytes.subarray(0, 8).equals(Buffer.from("d0cf11e0a1b11ae1", "hex"));
  return bytes.subarray(0, 4).equals(Buffer.from("504b0304", "hex"));
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > maxRequestBytes) return error(413, "TOO_LARGE");

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return error(400, "INVALID_FORM");
  }

  // A hidden field rejects basic automated submissions without bothering visitors.
  if (form.get("website")) return Response.json({ ok: true });

  const type = form.get("type");
  const language = form.get("language");
  if (typeof type !== "string" || !(type in subjects)) return error(400, "INVALID_TYPE");
  if (typeof language !== "string" || !["en", "ar", "ku"].includes(language)) return error(400, "INVALID_LANGUAGE");
  const requestType = type as RequestType;

  const fields: Record<string, string> = {};
  for (const key of allowedFields[requestType]) {
    const value = form.get(key);
    if (value instanceof File) return error(400, "INVALID_FORM");
    fields[key] = String(value ?? "").trim();
    if (fields[key].length > (key === "message" || key === "notes" ? 4000 : 250)) return error(400, "FIELD_TOO_LONG");
  }
  if (!fields.name || !fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) return error(400, "INVALID_CONTACT");

  const cv = form.get("cv");
  let attachment: { filename: string; content: string } | undefined;
  if (requestType === "careers") {
    if (!(cv instanceof File) || cv.size === 0) return error(400, "CV_REQUIRED");
    if (cv.size > maxFileBytes) return error(413, "CV_TOO_LARGE");
    const bytes = Buffer.from(await cv.arrayBuffer());
    if (!validCv(cv, bytes)) return error(400, "INVALID_CV");
    attachment = { filename: cv.name.replace(/[^\p{L}\p{N}_.-]/gu, "_").slice(0, 100), content: bytes.toString("base64") };
  } else if (cv instanceof File && cv.size > 0) {
    return error(400, "UNEXPECTED_FILE");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.IMC_FROM_EMAIL;
  const to = process.env.IMC_TO_EMAIL || "info@imc.iq";
  if (!apiKey || !from) return error(503, "MAIL_NOT_CONFIGURED");

  const text = [
    `Submission type: ${requestType}`,
    `Language: ${language}`,
    ...allowedFields[requestType].map((key) => `${key}: ${fields[key] || "—"}`),
  ].join("\n");

  try {
    const resend = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: fields.email,
        subject: subjects[requestType],
        text,
        ...(attachment ? { attachments: [attachment] } : {}),
      }),
      signal: AbortSignal.timeout(15000),
    });
    if (!resend.ok) {
      console.error("Resend rejected IMC form submission", resend.status, await resend.text());
      return error(502, "MAIL_REJECTED");
    }
    return Response.json({ ok: true }, { status: 201 });
  } catch (cause) {
    console.error("IMC form delivery failed", cause);
    return error(502, "MAIL_UNAVAILABLE");
  }
}
