import fs from 'node:fs';

const pageIds = {
  en: { engines: 13034, renewablePower: 12883, oils: 12806, fleetGuard: 12747, preventativeMaintenance: 9869, cumminsKit: 33, masterRebuild: 9870, careers: 9785, training: 9867, repairs: 10254, contact: 41, services: 9745 },
  ar: { engines: 13036, renewablePower: 12904, oils: 12808, fleetGuard: 12772, preventativeMaintenance: 10520, cumminsKit: 10499, masterRebuild: 10485, careers: 10513, training: 11671, repairs: 10511, contact: 10496, about: 10452, services: 10525 },
  ku: { preventativeMaintenance: 11448, cumminsKit: 11315, masterRebuild: 11364, careers: 11407, training: 11506, repairs: 11512, contact: 11365, services: 11478 },
};
const entities = {
  nbsp: ' ', amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', hellip: '…',
  rsquo: '’', lsquo: '‘', ndash: '–', mdash: '—', reg: '®', trade: '™', bull: '•',
};
const decode = (value) => value
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
  .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
  .replace(/&([a-z]+);/gi, (entity, name) => entities[name] ?? entity);
const clean = (value) => decode(value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim());
const result = {};

for (const [language, routes] of Object.entries(pageIds)) {
  const pages = JSON.parse(fs.readFileSync(new URL(`../src/data/pages_${language}.json`, import.meta.url), 'utf8'));
  result[language] = {};
  for (const [route, id] of Object.entries(routes)) {
    const page = pages.find((entry) => entry.id === id);
    if (!page) throw new Error(`Missing ${language} WordPress page ${id}`);
    const html = page.content.replace(/<(svg|style|script)\b[^>]*>[\s\S]*?<\/\1>/gi, '');
    const candidates = [];
    for (const match of html.matchAll(/<(h[1-6]|p|li)\b[^>]*>([\s\S]*?)<\/\1>/gi)) {
      const text = clean(match[2]);
      const tag = match[1].toLowerCase();
      const kind = tag.startsWith('h') ? 'heading' : tag === 'li' ? 'listItem' : 'paragraph';
      if (!text) continue;
      candidates.push({ index: match.index, kind, text });
    }
    const baseText = candidates.map(({ text }) => text.toLocaleLowerCase());
    for (const match of html.matchAll(/<([a-z][a-z0-9]*)\b[^>]*>([^<>]+)<\/\1>/gi)) {
      const tag = match[1].toLowerCase();
      if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'script', 'style', 'svg'].includes(tag)) continue;
      const text = clean(match[2]);
      if (text.length < 3 || baseText.some((paragraph) => paragraph.includes(text.toLocaleLowerCase()))) continue;
      const before = html.slice(0, match.index).toLowerCase();
      if (before.lastIndexOf('<a ') > before.lastIndexOf('</a>') || before.lastIndexOf('<button') > before.lastIndexOf('</button>')) continue;
      candidates.push({ index: match.index, kind: 'label', text });
    }
    const seen = new Set();
    const blocks = candidates.sort((a, b) => a.index - b.index).filter(({ text }) => {
      const key = text.toLocaleLowerCase().replace(/\s+/g, ' ');
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    }).map(({ kind, text }) => ({ kind, text }));
    const media = [...new Set([...html.matchAll(/(?:https?:)?\/\/imc\.local\/wp-content\/uploads\/([^\s'"<>),]+)|\/wp-content\/uploads\/([^\s'"<>),]+)/gi)]
      .map((match) => `/uploads/${decodeURIComponent((match[1] || match[2]).split('?')[0])}`))];
    const videos = [...new Set([...html.matchAll(/https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be|vimeo\.com)[^\s'"<>]+/gi)]
      .map((match) => match[0].replace(/&amp;/g, '&')))];
    const contactCtas = [...new Set([...html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)]
      .filter((match) => /\/contact\/?(?:$|[?#])/i.test(match[1]))
      .map((match) => clean(match[2]))
      .filter(Boolean))];
    result[language][route] = { title: decode(page.title), blocks, media, videos, contactCtas };
  }
}
fs.writeFileSync(new URL('../src/data/sourceCopy.json', import.meta.url), JSON.stringify(result, null, 2) + '\n');
