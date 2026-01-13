
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Source: Artifact Directory (hardcoded based on list_dir output)
const sourceDir = "C:\\Users\\srkel\\.gemini\\antigravity\\brain\\f6d1f05c-6104-41d1-901b-3d58bfa30ef9";
// Target: Repo Public Images
const targetDir = "c:\\Users\\srkel\\Downloads\\Website-builder-antigravity-at-scale\\public\\images";

// Map Artifact Filename -> Target Basename (no extension)
const imageMap = {
    "hero_handyman_decking_1768302656773.png": "hero",
    "deck_repairs_screws_1768302673435.png": "decks",
    "handyman_toolbelt_1768302690902.png": "handyman",
    "holiday_home_interior_1768302736537.png": "rental",
    "pressure_washing_1768302754368.png": "presale"
};

async function processImages() {
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    for (const [sourceFile, targetName] of Object.entries(imageMap)) {
        const inputPath = path.join(sourceDir, sourceFile);
        const outputPath = path.join(targetDir, `${targetName}.webp`);

        if (fs.existsSync(inputPath)) {
            console.log(`Processing: ${sourceFile} -> ${targetName}.webp`);
            try {
                await sharp(inputPath)
                    .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
                    .webp({ quality: 80 })
                    .toFile(outputPath);
                console.log("Success.");
            } catch (err) {
                console.error(`Error processing ${sourceFile}:`, err);
            }
        } else {
            console.warn(`Source file not found: ${inputPath}`);
        }
    }
}

processImages();
