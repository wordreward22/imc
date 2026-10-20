import fs from 'node:fs';

const sqlPath = process.argv[2];
if (!sqlPath) throw new Error('Pass the path to the local WordPress SQL export');
const sql = fs.readFileSync(sqlPath, 'utf8');

function sqlString(row, start) {
  let cursor = start;
  let value = '';
  for (; cursor < row.length; cursor++) {
    const character = row[cursor];
    if (character === '\\') value += row[++cursor] ?? '';
    else if (character === "'") return { value, end: cursor };
    else value += character;
  }
  throw new Error('Unterminated slide data');
}

for (const match of sql.matchAll(/INSERT INTO `wp_revslider_slides`[^\n]*/g)) {
  const row = match[0];
  const [, id, sliderId, order] = row.match(/VALUES \((\d+),(\d+),(\d+)/) ?? [];
  const firstStart = row.indexOf(",'", row.indexOf('VALUES (')) + 2;
  const first = sqlString(row, firstStart);
  const secondStart = row.indexOf(",'", first.end) + 2;
  const second = sqlString(row, secondStart);
  const layers = JSON.parse(second.value);
  const textLayers = Object.values(layers)
    .filter((layer) => layer && typeof layer === 'object' && ['Sub-title', 'Copy sub-title', 'Title', 'Description', 'Button'].includes(layer.alias))
    .map((layer) => ({ role: layer.alias, text: String(layer.text ?? '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() }));
  console.log(JSON.stringify({ id, sliderId, order, textLayers }));
}
