import fs from 'node:fs';

const [language = 'en', slug = 'about'] = process.argv.slice(2);
const pages = JSON.parse(fs.readFileSync(new URL(`../src/data/pages_${language}.json`, import.meta.url), 'utf8'));
const page = pages.find((entry) => entry.slug === slug || String(entry.id) === slug);
if (!page) {
  console.error(`Page ${slug} not found for ${language}`);
  process.exit(1);
}
const decode = (text) => text
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
  .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
  .replace(/&(?:nbsp|amp|quot|apos|lt|gt|hellip|rsquo|lsquo|ndash|mdash);/g, (entity) => ({
    '&nbsp;': ' ', '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>',
    '&hellip;': '…', '&rsquo;': '’', '&lsquo;': '‘', '&ndash;': '–', '&mdash;': '—',
  })[entity] || entity);
const clean = (value) => decode(value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim());
const content = page.content.replace(/<(svg|style|script)\b[^>]*>[\s\S]*?<\/\1>/gi, '');
const seen = new Set();
console.log(`${language} ${page.slug} (${page.id}) ${decode(page.title)}`);
for (const match of content.matchAll(/<(h[1-6]|p|span|a)\b[^>]*>([\s\S]*?)<\/\1>/gi)) {
  const value = clean(match[2]);
  if (value.length < 12 || seen.has(value) || /^\s*(?:Read More|Learn More|Click Here)\s*$/i.test(value)) continue;
  seen.add(value);
  console.log(value);
}
