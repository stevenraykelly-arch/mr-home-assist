
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');

async function optimizeImages() {
    try {
        const files = fs.readdirSync(imagesDir);

        for (const file of files) {
            if (file.match(/\.(png|jpg|jpeg)$/i)) {
                const filePath = path.join(imagesDir, file);
                const filename = path.parse(file).name;
                const targetPath = path.join(imagesDir, `${filename}.webp`);

                console.log(`Optimizing: ${file} -> ${filename}.webp`);

                await sharp(filePath)
                    .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
                    .webp({ quality: 80 })
                    .toFile(targetPath);

                // Optional: Delete original? Safe for now to keep until verified, 
                // but for "Overload" fix we should probably replace used references and delete.
                // For this script, we just create. I will separate the delete step.
            }
        }
        console.log("Optimization Complete.");
    } catch (e) {
        console.error("Error processing images:", e);
    }
}

optimizeImages();
