import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "images");
const MAX = 1600;

// JPG photos: resize + re-encode in place, same filename.
const jpgs = [
    "purple_mountain.jpg",
    "profheadshot.jpg",
    "Hackathon.jpg",
    "cpi_pic.jpg",
    "ssrl_inaction.jpg",
    "rafb_high_shot.jpg",
];

// Photo/screenshot PNGs: convert to WebP (new file), delete original.
const pngToWebp = [
    "ympfaith.png",
    "knocklock.png",
    "biznizpic.png",
    "ssrlinterviewproj.png",
    "harvestathens.png",
    "cubesat.png",
];

const kb = (n) => `${Math.round(n / 1024)}KB`;

for (const f of jpgs) {
    const p = path.join(dir, f);
    const input = fs.readFileSync(p); // read fully so sharp holds no handle on p
    const before = input.length;
    const buf = await sharp(input)
        .rotate()
        .resize({ width: MAX, withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toBuffer();
    fs.writeFileSync(p, buf);
    console.log(`${f}: ${kb(before)} -> ${kb(buf.length)}`);
}

for (const f of pngToWebp) {
    const p = path.join(dir, f);
    const out = path.join(dir, f.replace(/\.png$/i, ".webp"));
    const input = fs.readFileSync(p);
    const before = input.length;
    const buf = await sharp(input)
        .rotate()
        .resize({ width: MAX, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toBuffer();
    fs.writeFileSync(out, buf);
    fs.unlinkSync(p);
    console.log(`${f} -> ${path.basename(out)}: ${kb(before)} -> ${kb(buf.length)}`);
}
