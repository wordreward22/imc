import fs from 'node:fs';

const pageIds = {
  en: { engines: 13034, renewablePower: 12883, oils: 12806, fleetGuard: 12747, preventativeMaintenance: 9869, cumminsKit: 33, masterRebuild: 9870, careers: 9785, training: 9867, repairs: 10254, contact: 41 },
  ar: { engines: 13036, renewablePower: 12904, oils: 12808, fleetGuard: 12772, preventativeMaintenance: 10520, cumminsKit: 10499, masterRebuild: 10485, careers: 10513, training: 11671, repairs: 10511, contact: 10496, about: 10452 },
  ku: { preventativeMaintenance: 11448, cumminsKit: 11315, masterRebuild: 11364, careers: 11407, training: 11506, repairs: 11512, contact: 11365 },
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
    const seen = new Set();
    const blocks = [];
    for (const match of html.matchAll(/<(h[1-6]|p|li)\b[^>]*>([\s\S]*?)<\/\1>/gi)) {
      const text = clean(match[2]);
      const kind = match[1].toLowerCase().startsWith('h') ? 'heading' : 'paragraph';
      if (text.length < (kind === 'heading' ? 10 : 35)) continue;
      const key = text.toLocaleLowerCase().replace(/\s+/g, ' ');
      if (seen.has(key)) continue;
      seen.add(key);
      blocks.push({ kind, text });
    }
    result[language][route] = { title: decode(page.title), blocks };
  }
}
fs.writeFileSync(new URL('../src/data/sourceCopy.json', import.meta.url), JSON.stringify(result, null, 2) + '\n');
