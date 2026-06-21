const fs = require('fs');
const path = require('path');
const https = require('https');

const DATA_DIR = path.join(__dirname, 'data');
const PUBLIC_DIR = path.join(__dirname, 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

// Ensure images directory exists
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

// Find all image URLs in markdown files
const imageRegex = /!\[.*?\]\((https:\/\/www\.jhtenergyservices\.com\/wp-content\/uploads\/[^\)]+)\)/g;
const imageUrls = new Set();

fs.readdirSync(DATA_DIR).forEach(file => {
  if (file.endsWith('.md')) {
    const content = fs.readFileSync(path.join(DATA_DIR, file), 'utf-8');
    let match;
    while ((match = imageRegex.exec(content)) !== null) {
      imageUrls.add(match[1]);
    }
  }
});

console.log(`Found ${imageUrls.size} unique image URLs to download.`);

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const options = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname + parsedUrl.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.jhtenergyservices.com/'
      }
    };

    const file = fs.createWriteStream(dest);
    https.get(options, (response) => {
      if (response.statusCode !== 200) {
        fs.unlink(dest, () => {});
        reject(new Error(`Failed to download ${url}: Status Code ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function downloadAll() {
  const mapping = {};
  const urlsArray = Array.from(imageUrls);
  
  for (let i = 0; i < urlsArray.length; i++) {
    const url = urlsArray[i];
    const filename = path.basename(new URL(url).pathname);
    const dest = path.join(IMAGES_DIR, filename);
    const localPath = `/images/${filename}`;
    
    console.log(`[${i + 1}/${urlsArray.length}] Downloading ${url} -> ${localPath}`);
    try {
      await download(url, dest);
      mapping[url] = localPath;
    } catch (err) {
      console.error(`Failed to download ${url}: ${err.message}`);
    }
  }
  
  // Write the mapping to a file for reference
  fs.writeFileSync(path.join(__dirname, 'image_mapping.json'), JSON.stringify(mapping, null, 2));
  console.log('Finished downloading all images. Mapping saved to image_mapping.json');
}

downloadAll();
