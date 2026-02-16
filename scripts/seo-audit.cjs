const fs = require('fs');
const path = require('path');

// Target directory paths
const APP_DIR = path.join(process.cwd(), 'src/app');
const COMPONENTS_DIR = path.join(process.cwd(), 'src/components');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

console.log('\n🔍 Running Complete SEO Audit for Next.js (Adapted)\n');

const results = {
    pass: 0,
    warning: 0,
    error: 0,
    checks: []
};

// Helper functions
function checkFile(filePath) {
    return fs.existsSync(path.join(process.cwd(), filePath));
}

function readFile(filePath) {
    try {
        return fs.readFileSync(path.join(process.cwd(), filePath), 'utf-8');
    } catch {
        return null;
    }
}

function addCheck(name, status, message) {
    results.checks.push({ name, status, message });
    results[status]++;

    const icon = status === 'pass' ? '✅' : status === 'warning' ? '⚠️' : '❌';
    console.log(`${icon} ${name}: ${message}`);
}

// 1. Check 404 Page (src/app/not-found.tsx)
console.log('📄 Checking 404 Page...\n');
if (checkFile('src/app/not-found.tsx')) {
    const content = readFile('src/app/not-found.tsx');
    const hasNoIndex = /robots:\s*\{[^}]*index:\s*false/i.test(content);
    const hasLinks = /Link|href/.test(content);

    if (hasNoIndex && hasLinks) {
        addCheck('404 Page', 'pass', 'Properly configured with noindex and navigation');
    } else if (!hasNoIndex) {
        addCheck('404 Page', 'warning', 'Missing noindex in metadata');
    } else {
        addCheck('404 Page', 'warning', 'Missing navigation links');
    }
} else {
    addCheck('404 Page', 'warning', 'not-found.tsx recommended (using Next.js default)');
}

// 2. Check External CSS (src/app/layout.tsx)
console.log('\n🎨 Checking External CSS...\n');
const layoutContent = readFile('src/app/layout.tsx');
if (layoutContent) {
    const hasGoogleFonts = /fonts\.googleapis\.com/i.test(layoutContent);
    const hasChinaCDN = /fonts\.(font\.im|loli\.net|geekzu\.org)/i.test(layoutContent);

    if (hasGoogleFonts) {
        addCheck('External CSS', 'warning', 'Using Google Fonts (slow in China, consider fonts.font.im)');
    } else if (hasChinaCDN) {
        addCheck('External CSS', 'pass', 'Using China-friendly CDN for fonts');
    } else {
        addCheck('External CSS', 'pass', 'No external CSS dependencies');
    }
} else {
    addCheck('External CSS', 'error', 'Could not read src/app/layout.tsx');
}

// 3. Check External Images
console.log('\n🖼️  Checking External Images...\n');
const externalImages = [];

function scanForExternalImages(filePath) {
    const content = readFile(filePath);
    if (!content) return [];

    const findings = [];
    const patterns = [
        /src=["']https?:\/\/[^"']+\.(jpg|jpeg|png|gif|webp|svg|ico)[^"']*["']/gi,
        /https?:\/\/(picsum\.photos|unsplash\.com|placeholder\.com|via\.placeholder\.com|placehold\.it)[^\s"'`<>]*/gi,
    ];

    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim().startsWith('//') || line.trim().startsWith('/*')) continue;

        patterns.forEach(pattern => {
            const matches = [...line.matchAll(pattern)];
            matches.forEach(match => {
                let url = match[0];
                if (url.includes('src=')) {
                    url = url.match(/https?:\/\/[^\s"'`]+/)?.[0] || url;
                }
                findings.push({
                    file: path.basename(filePath),
                    line: i + 1,
                    url: url
                });
            });
        });
    }

    return findings;
}

// Scan all application files recursively
function scanDir(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;

    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.next') {
                scanDir(filePath, fileList);
            }
        } else if (/\.(tsx|ts|js|jsx)$/.test(file)) {
            fileList.push(filePath);
        }
    });
    return fileList;
}

const allFiles = [...scanDir(APP_DIR), ...scanDir(COMPONENTS_DIR)];

allFiles.forEach(absolutePath => {
    const relativePath = path.relative(process.cwd(), absolutePath);
    externalImages.push(...scanForExternalImages(relativePath));
});


if (externalImages.length === 0) {
    addCheck('External Images', 'pass', 'No external image dependencies');
} else {
    const domains = [...new Set(externalImages.map(img => {
        try {
            return new URL(img.url.replace(/["']/g, '')).hostname;
        } catch {
            return 'unknown';
        }
    }))];

    // Check if only legitimate domains (e.g. coinmarketcap for ticker) are used
    const allowedDomains = ['s2.coinmarketcap.com'];
    const unknownDomains = domains.filter(d => !allowedDomains.includes(d));

    if (unknownDomains.length === 0) {
        addCheck('External Images', 'pass', `Using allowed external image sources only (${allowedDomains.join(', ')})`);
    } else {
        addCheck('External Images', 'warning', `Found ${externalImages.length} external image(s) from ${domains.length} domain(s)`);
        console.log('   Domains:', domains.join(', '));
        console.log('   💡 Consider downloading to /public/ for better performance');
    }
}

// 4. Check Hardcoded Dates
console.log('\n📅 Checking Hardcoded Dates...\n');
const hardcodedDates = [];

function scanForHardcodedDates(filePath) {
    const content = readFile(filePath);
    if (!content) return [];

    const findings = [];
    const patterns = [
        /©\s*20\d{2}/g,
        /copyright\s+20\d{2}/gi,
        /\b(19|20)\d{2}\s*-\s*(19|20)\d{2}\b/g,
    ];

    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim().startsWith('//') || line.trim().startsWith('/*')) continue;

        patterns.forEach(pattern => {
            const matches = [...line.matchAll(pattern)];
            matches.forEach(match => {
                findings.push({
                    file: path.basename(filePath),
                    line: i + 1,
                    value: match[0]
                });
            });
        });
    }

    return findings;
}

allFiles.forEach(file => {
    const relativePath = path.relative(process.cwd(), file);
    hardcodedDates.push(...scanForHardcodedDates(relativePath));
});

if (hardcodedDates.length === 0) {
    addCheck('Hardcoded Dates', 'pass', 'No hardcoded dates found');
} else {
    // Check if it's dynamic
    const isDynamic = hardcodedDates.every(d => d.value.includes('${') || d.value.includes('Date'));
    if (!isDynamic) {
        addCheck('Hardcoded Dates', 'warning', `Found ${hardcodedDates.length} potentially hardcoded date(s)`);
        hardcodedDates.forEach(date => {
            console.log(`   - ${date.file}:${date.line} → "${date.value}"`);
        });
    } else {
        addCheck('Hardcoded Dates', 'pass', 'Dates appear to be dynamic');
    }
}

// 5. Check Meta Tags
console.log('\n🏷️  Checking Meta Tags...\n');
if (layoutContent) {
    const checks = {
        title: /title:/i.test(layoutContent),
        description: /description:/i.test(layoutContent),
        // keywords: /keywords:/i.test(layoutContent), // keywords are less critical now
        // openGraph: /openGraph:/i.test(layoutContent),
    };

    const missing = Object.entries(checks).filter(([, found]) => !found).map(([tag]) => tag);

    if (missing.length === 0) {
        addCheck('Meta Tags (Root)', 'pass', 'Title and Description configured in Root Layout');
    } else {
        addCheck('Meta Tags (Root)', 'warning', `Missing in Root Layout: ${missing.join(', ')}`);
    }
}

// 5.5. Check Canonical URLs and Metadata in Pages
console.log('\n🔗 Checking Page Metadata & Canonicals...\n');
const pageFiles = allFiles.filter(f => path.basename(f) === 'page.tsx');

let metadataCount = 0;
let canonicalCount = 0;

pageFiles.forEach(file => {
    const relativePath = path.relative(process.cwd(), file);
    const content = readFile(relativePath);
    if (!content) return;

    if (/export const metadata/i.test(content) || /generateMetadata/i.test(content)) {
        metadataCount++;
    }

    if (/canonical:/i.test(content) || /alternates:\s*\{[^}]*canonical/i.test(content)) {
        canonicalCount++;
    }
});

addCheck('Page Metadata', metadataCount === pageFiles.length ? 'pass' : 'warning', `${metadataCount}/${pageFiles.length} pages have explicit metadata`);
// addCheck('Canonical URLs', canonicalCount > 0 ? 'pass' : 'warning', `${canonicalCount}/${pageFiles.length} pages have canonical URLs`);


// 6. Check Robots & Sitemap
console.log('\n🤖 Checking Robots & Sitemap...\n');
if (checkFile('src/app/robots.ts') || checkFile('public/robots.txt')) {
    addCheck('Robots.txt', 'pass', 'robots.txt configured');
} else {
    // Check if next-sitemap is used (process usually generates it)
    addCheck('Robots.txt', 'warning', 'No robots.ts/txt found (ensure it is generated)');
}

if (checkFile('src/app/sitemap.ts') || checkFile('public/sitemap.xml')) {
    addCheck('Sitemap', 'pass', 'sitemap configured');
} else {
    addCheck('Sitemap', 'warning', 'No sitemap found');
}

// 7. Check Schema.org
console.log('\n📋 Checking Schema.org...\n');
let schemaCount = 0;
pageFiles.forEach(file => {
    const relativePath = path.relative(process.cwd(), file);
    const content = readFile(relativePath);
    if (content && (/@context.*schema\.org/i.test(content) || /application\/ld\+json/i.test(content))) {
        schemaCount++;
    }
});

if (schemaCount > 0) {
    addCheck('Schema.org', 'pass', `Structured data found in ${schemaCount} page(s)`);
} else {
    addCheck('Schema.org', 'warning', 'No Schema.org markup found');
}

// 8. Check Image Optimization
console.log('\n🖼️  Checking Image Optimization...\n');
let imgTagCount = 0;
let nextImageCount = 0;

function countImageUsage(filePath) {
    const relativePath = path.relative(process.cwd(), filePath);
    const content = readFile(relativePath);
    if (!content) return;

    if (content.includes('next/image')) nextImageCount++;
    // Regex for checking <img> tags but NOT inside comments or strings potentially
    // Simple check: <img ...
    // Exclude next/image import lines or usage if any

    // We already check for next/image above.
    // Now look for actual <img> usage
    const imgMatches = content.match(/<img[^>]+src=/gi);
    if (imgMatches) {
        // Filter out Lucide icons or other known good usages if applicable
        if (!content.includes('lucide-react') && !relativePath.includes('MarketTicker')) {
            imgTagCount += imgMatches.length;
            console.log(`   🔸 Found <img> in: ${relativePath}`);
        } else if (relativePath.includes('MarketTicker')) {
            // Even in MarketTicker we switched to next/image, so if we still find <img> it's an issue
            // Check if we really switched
            if (content.indexOf('<Image') === -1) {
                imgTagCount += imgMatches.length;
                console.log(`   🔸 Found <img> in: ${relativePath} (Should use next/image)`);
            }
        }
    }
}

allFiles.forEach(file => countImageUsage(file));

if (imgTagCount === 0) {
    addCheck('Image Optimization', 'pass', `Using Next.js Image or Allowed Native Img (${nextImageCount} usages)`);
} else {
    addCheck('Image Optimization', 'warning', `Found ${imgTagCount} <img> tag(s) that might need optimization`);
}

// Summary
console.log('\n' + '='.repeat(60));
console.log('📊 SEO Audit Summary\n');
console.log(`Total Checks: ${results.checks.length}`);
console.log(`✅ Pass: ${results.pass}`);
console.log(`⚠️  Warnings: ${results.warning}`);
console.log(`❌ Errors: ${results.error}`);

const score = Math.round((results.pass / results.checks.length) * 100);
console.log(`\n📈 SEO Score: ${score}/100\n`);
