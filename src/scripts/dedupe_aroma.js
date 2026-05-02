import fs from 'fs';
const path = 'src/data/aromaBulkCatalog.json';
const raw = fs.readFileSync(path, 'utf8');
const arr = JSON.parse(raw);
const seen = new Set();
const out = [];
for (const item of arr) {
  if (!item || !item.name) { out.push(item); continue; }
  if (seen.has(item.name)) continue;
  seen.add(item.name);
  out.push(item);
}
fs.writeFileSync(path, JSON.stringify(out, null, 2) + '\n');
console.log('Wrote', out.length, 'unique products to', path);
