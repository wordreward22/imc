import fs from 'node:fs';

const pageIds = { en: 8957, ar: 10909 };
const keys = {
  en: ['fieldService', 'serviceContracts', 'workshopRepairs', 'training'],
  ar: ['training', 'workshopRepairs', 'serviceContracts', 'fieldService'],
};
const decode = (value) => value
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&(?:nbsp|amp|quot|apos|rsquo|lsquo|ndash|mdash);/gi, (entity) => ({
    '&nbsp;': ' ', '&amp;': '&', '&quot;': '"', '&apos;': "'", '&rsquo;': '’', '&lsquo;': '‘', '&ndash;': '–', '&mdash;': '—',
  })[entity.toLowerCase()] || entity);
const clean = (value) => decode(value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()).replace(/\s+/g, ' ').trim();
const result = {};

for (const [language, id] of Object.entries(pageIds)) {
  const pages = JSON.parse(fs.readFileSync(new URL(`../src/data/pages_${language}.json`, import.meta.url), 'utf8'));
  const html = pages.find((page) => page.id === id)?.content;
  if (!html) throw new Error(`Missing source homepage ${language} ${id}`);
  const paragraphs = [...html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map((match) => clean(match[1])).filter(Boolean);
  if (paragraphs.length !== 4) throw new Error(`Unexpected homepage paragraph count for ${language}`);
  const questions = [...html.matchAll(/class="ct-ac-title-text"[^>]*>([\s\S]*?)<\/a>/gi)].map((match) => clean(match[1]));
  const answers = [...html.matchAll(/class="ct-ac-content"[^>]*>([\s\S]*?)<\/div>/gi)].map((match) => clean(match[1]));
  if (questions.length !== 4 || answers.length !== 4) throw new Error(`Unexpected FAQ count for ${language}`);
  const services = [...html.matchAll(/<h3 class="item--title">([\s\S]*?)<\/h3>[\s\S]*?<div class="item--description">([\s\S]*?)<\/div>/gi)]
    .map((match) => ({ title: clean(match[1]), description: clean(match[2]) }));
  if (services.length !== 4) throw new Error(`Unexpected service count for ${language}`);
  result[language] = {
    overview: paragraphs[0], mission: paragraphs[1], vision: paragraphs[2], values: paragraphs[3],
    faq: questions.map((question, index) => ({ question, answer: answers[index] })),
    services: Object.fromEntries(services.map((service, index) => [keys[language][index], service])),
  };
}

fs.writeFileSync(new URL('../src/data/homeSource.json', import.meta.url), JSON.stringify(result, null, 2) + '\n');
