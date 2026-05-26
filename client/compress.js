import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Resolve current directory in ES Modules environment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define directory targets
const imagesDir = path.join(__dirname, 'public', 'Images');
const backupDir = path.join(__dirname, 'public', 'Images_backup');

/**
 * Premium Image Optimizer and Compressor Script
 * 
 * LEARNING TIP (Node.js Scripting & Asynchronous File Workflows):
 * 1. fs (File System) is used to perform sync directory actions like fs.readdirSync() and fs.mkdirSync().
 * 2. sharp relies on internal C++ queues (libvips) to optimize images asynchronously.
 * 3. We use a sequential 'for...of' loop containing 'await' rather than 'Promise.all' to process images.
 *    Why? Processing heavy images simultaneously can crash a low-powered server or local machine 
 *    due to high CPU/memory spikes. A sequential pipeline runs perfectly and safely.
 */
async function compressImages() {
  console.log('⚡ Starting Premium Image Optimization Pipeline...');

  // 1. Ensure the Images directory exists
  if (!fs.existsSync(imagesDir)) {
    console.error(`❌ Source folder not found: ${imagesDir}`);
    return;
  }

  // 2. Create a secure backup directory to preserve original assets
  if (!fs.existsSync(backupDir)) {
    console.log('📦 Creating a secure backup directory at "public/Images_backup/"...');
    fs.mkdirSync(backupDir, { recursive: true });
  }

  // 3. Scan the image directory
  const files = fs.readdirSync(imagesDir);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.webp', '.png', '.jpg', '.jpeg'].includes(ext);
  });

  console.log(`🔍 Discovered ${imageFiles.length} image files to process.\n`);

  let optimizedCount = 0;
  let totalSavedBytes = 0;

  for (const file of imageFiles) {
    const sourceFilePath = path.join(imagesDir, file);
    const backupFilePath = path.join(backupDir, file);

    try {
      const stats = fs.statSync(sourceFilePath);
      const originalSizeBytes = stats.size;
      const originalSizeKB = (originalSizeBytes / 1024).toFixed(1);

      // Skip files that are already highly optimized to conserve process runtimes
      if (originalSizeBytes < 40 * 1024 && path.extname(file).toLowerCase() === '.webp') {
        console.log(`⏭️ Skipping "${file}" (Already highly optimized at ${originalSizeKB} KB)`);
        continue;
      }

      // Back up original file if not backed up already
      if (!fs.existsSync(backupFilePath)) {
        fs.copyFileSync(sourceFilePath, backupFilePath);
      }

      console.log(`⚙️ Optimizing "${file}" (${originalSizeKB} KB)...`);

      // Initialize sharp instance
      const imagePipeline = sharp(backupFilePath);
      const metadata = await imagePipeline.metadata();

      // Setup resize logic: scale down to 1200px max width if it is a desktop card/header image
      if (metadata.width && metadata.width > 1200) {
        imagePipeline.resize(1200);
      }

      // Compress to highly optimized lossy webp
      const tempOutput = sourceFilePath + '.temp.webp';
      await imagePipeline
        .webp({ quality: 78, effort: 6 }) // High effort for maximum compression efficiency
        .toFile(tempOutput);

      // Verify the optimized file is indeed smaller
      const compressedStats = fs.statSync(tempOutput);
      const compressedSizeBytes = compressedStats.size;
      const compressedSizeKB = (compressedSizeBytes / 1024).toFixed(1);

      if (compressedSizeBytes < originalSizeBytes) {
        // Replace original with optimized version
        fs.unlinkSync(sourceFilePath);
        fs.renameSync(tempOutput, sourceFilePath);
        
        const savedBytes = originalSizeBytes - compressedSizeBytes;
        totalSavedBytes += savedBytes;
        optimizedCount++;
        
        const percentSaved = ((savedBytes / originalSizeBytes) * 100).toFixed(0);
        console.log(`✅ Optimized "${file}": ${originalSizeKB} KB ➡️ ${compressedSizeKB} KB (Saved ${percentSaved}%)`);
      } else {
        // Discard optimized if original was already smaller/more compressed
        fs.unlinkSync(tempOutput);
        console.log(`ℹ️ Retained original "${file}" (Optimized version was not smaller)`);
      }

    } catch (err) {
      console.error(`❌ Failed to compress file "${file}":`, err.message);
    }
  }

  const finalSavedMB = (totalSavedBytes / (1024 * 1024)).toFixed(2);
  console.log('\n--- 🎉 OPTIMIZATION REPORT ---');
  console.log(`🔹 Total Images Optimized: ${optimizedCount}`);
  console.log(`🔹 Total Bandwidth Saved: ${finalSavedMB} MB`);
  console.log('🔹 Backups preserved inside "public/Images_backup/"');
  console.log('------------------------------\n');
}

compressImages();
