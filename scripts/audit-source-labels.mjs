import fs from 'node:fs';
import sourceCopy from '../src/data/sourceCopy.json' with { type: 'json' };

const ids = {
  en: { engines: 13034, renewablePower: 12883, oils: 12806, fleetGuard: 12747, preventativeMaintenance: 9869, cumminsKit: 33, masterRebuild: 9870 },
  ar: { engines: 13036, renewablePower: 12904, oils: 12808, fleetGuard: 12772, preventativeMaintenance: 10520, cumminsKit: 10499, masterRebuild: 10485 },
  ku: { preventativeMaintenance: 11448, cumminsKit: 11315, masterRebuild: 11364 },
};
const entities = { nbsp: ' ', amp: '&', quot: '"', apos: "'", rsquo: '’', lsquo: '‘', ndash: '–', mdash: '—', hellip: '…' };
const clean = (value) => value.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&([a-z]+);/gi, (m, n) => entities[n] ?? m).replace(/\s+/g, ' ').trim();

for (const [language, routes] of Object.entries(ids)) {
  const pages = JSON.parse(fs.readFileSync(new URL(`../src/data/pages_${language}.json`, import.meta.url)));
  for (const [route, id] of Object.entries(routes)) {
    const html = pages.find((page) => page.id === id).content.replace(/<(svg|style|script)\b[^>]*>[\s\S]*?<\/\1>/gi, '');
    const used = sourceCopy[language][route].blocks.map(({text}) => text.toLocaleLowerCase());
    const candidates = [...new Set([...html.matchAll(/<([a-z][a-z0-9]*)\b[^>]*>([^<>]+)<\/\1>/gi)]
      .filter((match) => !['h1','h2','h3','h4','h5','h6','p','li'].includes(match[1].toLowerCase()))
      .map((match) => clean(match[2]))
      .filter((text) => text.length >= 3 && text.length <= 160 && !used.some((paragraph) => paragraph.includes(text.toLocaleLowerCase()))))];
    console.log(language, route, candidates.join(' | '));
  }
}
