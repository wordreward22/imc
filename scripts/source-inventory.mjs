import fs from 'node:fs';

const ids = {
  en: { home: 8957, about: 9804, careers: 9785, training: 9867, services: 9745, preventativeMaintenance: 9869, repairs: 10254, cumminsKit: 33, contact: 41, masterRebuild: 9870, engines: 13034, renewablePower: 12883, oils: 12806, fleetGuard: 12747, powerGeneration: 12694 },
  ar: { home: 10909, about: 10452, careers: 10513, training: 11671, services: 10525, preventativeMaintenance: 10520, repairs: 10511, cumminsKit: 10499, contact: 10496, masterRebuild: 10485, engines: 13036, renewablePower: 12904, oils: 12808, fleetGuard: 12772, powerGeneration: 10518 },
  ku: { home: 11520, about: 11291, careers: 11407, training: 11506, services: 11478, preventativeMaintenance: 11448, repairs: 11512, cumminsKit: 11315, contact: 11365, masterRebuild: 11364 },
};
const entities = { nbsp: ' ', amp: '&', quot: '"', apos: "'", rsquo: '’', lsquo: '‘', ndash: '–', mdash: '—', hellip: '…' };
const clean = (value) => value.replace(/<[^>]*>/g, ' ').replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&([a-z]+);/gi, (m, n) => entities[n] ?? m).replace(/\s+/g, ' ').trim();

for (const [language, routes] of Object.entries(ids)) {
  const pages = JSON.parse(fs.readFileSync(new URL(`../src/data/pages_${language}.json`, import.meta.url)));
  for (const [route, id] of Object.entries(routes)) {
    const page = pages.find((candidate) => candidate.id === id);
    const html = page.content;
    const media = [...new Set([...html.matchAll(/(?:https?:)?\/\/imc\.local\/wp-content\/uploads\/([^\s'"<>),]+)|\/wp-content\/uploads\/([^\s'"<>),]+)/gi)].map((match) => decodeURIComponent((match[1] || match[2]).split('?')[0])))];
    const videos = [...new Set([...html.matchAll(/https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be|vimeo\.com)[^\s'"<>]+/gi)].map((match) => match[0]))];
    const links = [...new Set([...html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)].map((match) => `${clean(match[2])} => ${match[1]}`).filter((link) => !link.includes('=> #') && !link.includes('=> javascript:')))];
    const short = [...new Set([...html.matchAll(/<(h[1-6]|p|li)\b[^>]*>([\s\S]*?)<\/\1>/gi)].map((match) => ({ kind: match[1], text: clean(match[2]) })).filter(({kind, text}) => text && text.length < (kind.startsWith('h') ? 10 : 35)).map(({text}) => text))];
    console.log(JSON.stringify({ language, route, id, media, videos, short, links }));
  }
}
