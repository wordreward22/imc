import fs from 'node:fs';
import ts from 'typescript';

const source = fs.readFileSync(new URL('../src/data/subpageTranslations.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const module = { exports: {} };
new Function('module', 'exports', 'require', compiled)(module, module.exports, () => ({}));
const translations = module.exports.subpageTranslations;

const map = {
  en: { 9870: 'masterRebuild', 10254: 'repairs', 9804: 'about', 9867: 'training',
    9785: 'careers', 41: 'contact', 13034: 'engines', 33: 'cumminsKit',
    12747: 'fleetGuard', 12806: 'oils', 12883: 'renewablePower', 9869: 'preventativeMaintenance' },
  ar: { 10485: 'masterRebuild', 10511: 'repairs', 10452: 'about', 11671: 'training',
    10513: 'careers', 10496: 'contact', 13036: 'engines', 10499: 'cumminsKit',
    12772: 'fleetGuard', 12808: 'oils', 12904: 'renewablePower', 10520: 'preventativeMaintenance' },
  ku: { 11364: 'masterRebuild', 11512: 'repairs', 11291: 'about', 11506: 'training',
    11407: 'careers', 11365: 'contact', 11315: 'cumminsKit', 11448: 'preventativeMaintenance' },
};
const decode = (text) => text
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
  .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
  .replace(/&(?:nbsp|amp|quot|apos|lt|gt|hellip|rsquo|lsquo|ndash|mdash);/g, (entity) => ({
    '&nbsp;': ' ', '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>',
    '&hellip;': '…', '&rsquo;': '’', '&lsquo;': '‘', '&ndash;': '–', '&mdash;': '—',
  })[entity] || entity);
const normalize = (value) => decode(value.replace(/<[^>]*>/g, ' '))
  .toLocaleLowerCase().replace(/[\p{P}\p{S}]/gu, ' ').replace(/\s+/g, ' ').trim();
const flatten = (value) => typeof value === 'string' ? [value] :
  Array.isArray(value) ? value.flatMap(flatten) :
  value && typeof value === 'object' ? Object.values(value).flatMap(flatten) : [];
const lang = process.argv.find((arg) => ['en', 'ar', 'ku'].includes(arg)) || 'en';
const pages = JSON.parse(fs.readFileSync(new URL(`../src/data/pages_${lang}.json`, import.meta.url), 'utf8'));
const showAll = process.argv.includes('--all');

for (const page of pages) {
  const key = map[lang][page.id];
  if (!key) continue;
  const values = flatten(translations[lang][key]).map(normalize);
  const content = page.content.replace(/<(svg|style|script)\b[^>]*>[\s\S]*?<\/\1>/gi, '');
  const sourceParagraphs = [...content.matchAll(/<(?:p|h[1-6])\b[^>]*>([\s\S]*?)<\/(?:p|h[1-6])>/gi)]
    .map((match) => normalize(match[1])).filter((value) => value.length >= 80);
  const unique = [...new Set(sourceParagraphs)];
  const unmatched = unique.filter((value) => !values.some((candidate) => candidate.includes(value) || value.includes(candidate) && candidate.length >= 80));
  console.log(`${page.slug}: ${unique.length - unmatched.length}/${unique.length} source paragraphs present`);
  for (const value of unmatched.slice(0, showAll ? undefined : 3)) console.log(`  MISSING/CHANGED: ${value.slice(0, 220)}`);
}
