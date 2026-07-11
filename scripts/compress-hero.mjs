import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";

const SRC = "Hero";
const OUT = "public/hero";
await mkdir(OUT, { recursive: true });

const kb = (b) => `${(b / 1024).toFixed(0)}KB`;

// Genera un WebP; se supera `limit` (byte), riduce la qualità di 5 e riprova.
async function gen(src, out, width, quality, limit) {
  let q = quality;
  let size = Infinity;
  for (; q >= 30; q -= 5) {
    const info = await sharp(src)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: q })
      .toFile(out);
    size = info.size;
    if (!limit || size <= limit) break;
  }
  return { size, q };
}

// base64 di un blur minuscolo (~24px) per il placeholder blur-up inline.
async function tinyBase64(src, width) {
  const buf = await sharp(src).resize({ width }).webp({ quality: 45 }).toBuffer();
  return `data:image/webp;base64,${buf.toString("base64")}`;
}

const desktop = [["Hero-1.png", 1], ["hero-2.png", 2], ["hero-3.png", 3], ["hero-4.png", 4]];
const mobile = [["hero-1-mob.png", 1], ["hero-2-mob.png", 2], ["hero-3-mob.png", 3], ["hero-4-mob.png", 4]];

const blur = {};
for (const [file, n] of desktop) {
  const a = await gen(`${SRC}/${file}`, `${OUT}/hero-desktop-${n}-2400.webp`, 2400, 82, 400 * 1024);
  const b = await gen(`${SRC}/${file}`, `${OUT}/hero-desktop-${n}-1600.webp`, 1600, 85, 250 * 1024);
  const c = await gen(`${SRC}/${file}`, `${OUT}/hero-desktop-${n}-blur.webp`, 800, 40, 30 * 1024);
  blur[`d${n}`] = await tinyBase64(`${SRC}/${file}`, 24);
  console.log(`desktop ${n}: 2400=${kb(a.size)}(q${a.q}) 1600=${kb(b.size)}(q${b.q}) blur=${kb(c.size)}`);
}
for (const [file, n] of mobile) {
  const a = await gen(`${SRC}/${file}`, `${OUT}/hero-mobile-${n}-1080.webp`, 1080, 85, 250 * 1024);
  const b = await gen(`${SRC}/${file}`, `${OUT}/hero-mobile-${n}-720.webp`, 720, 85, 150 * 1024);
  const c = await gen(`${SRC}/${file}`, `${OUT}/hero-mobile-${n}-blur.webp`, 360, 40, 30 * 1024);
  blur[`m${n}`] = await tinyBase64(`${SRC}/${file}`, 16);
  console.log(`mobile  ${n}: 1080=${kb(a.size)}(q${a.q}) 720=${kb(b.size)}(q${b.q}) blur=${kb(c.size)}`);
}

await writeFile(
  "/private/tmp/claude-501/-Users-sarang-Websites-cannabilla-preview/e2f439e3-c8b7-4d3f-80e3-e9afd6f8aeb7/scratchpad/hero-blur.json",
  JSON.stringify(blur, null, 2),
);
console.log("blur base64 lengths:", Object.fromEntries(Object.entries(blur).map(([k, v]) => [k, `${v.length}ch`])));
