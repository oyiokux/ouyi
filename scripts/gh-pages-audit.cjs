const fs = require('fs');
const path = require('path');
const https = require('https');

const NEXT_CONFIG_PATH = path.join(process.cwd(), 'next.config.ts');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const WORKFLOW_DIR = path.join(process.cwd(), '.github/workflows');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

// === Config ===
const SITE_BASE = 'https://oyiokux.github.io/ouyi';

console.log('\n🚀 GitHub Pages Deployment Audit (V2)\n');
console.log('='.repeat(60));

let pass = 0;
let warn = 0;
let fail = 0;

function log(status, message, detail) {
    const icons = { pass: '✅', warn: '⚠️ ', fail: '❌' };
    console.log(`${icons[status]} [${status.toUpperCase()}] ${message}`);
    if (detail) console.log(`   └─ ${detail}`);
    if (status === 'pass') pass++;
    else if (status === 'warn') warn++;
    else fail++;
}

// ========== PART 1: Local Config Checks ==========
console.log('\n📦 Part 1: Local Configuration Checks\n');

if (!fs.existsSync(NEXT_CONFIG_PATH)) {
    log('fail', 'next.config.ts not found!');
} else {
    const config = fs.readFileSync(NEXT_CONFIG_PATH, 'utf-8');

    // output: 'export'
    if (/output:\s*['"]export['"]/.test(config)) {
        log('pass', 'Static export enabled (output: "export")');
    } else {
        log('fail', 'Missing output: "export"', 'GitHub Pages only serves static files.');
    }

    // trailingSlash: true
    if (/trailingSlash:\s*true/.test(config)) {
        log('pass', 'Trailing slash enabled (trailingSlash: true)');
    } else {
        log('fail', 'Missing trailingSlash: true',
            'Without this, /ouyi-app/ returns 404 because Next.js generates ouyi-app.html instead of ouyi-app/index.html');
    }

    // images.unoptimized
    if (/unoptimized:\s*true/.test(config)) {
        log('pass', 'Image optimization disabled for static export');
    } else {
        log('fail', 'images.unoptimized must be true', 'GitHub Pages cannot run Next.js image optimization server.');
    }

    // basePath
    const basePathMatch = config.match(/basePath:\s*.*['"]\/([\w-]+)['"]/);
    if (/basePath:/.test(config)) {
        log('pass', 'basePath configured', basePathMatch ? `Detected: /${basePathMatch[1]}` : '');
    } else {
        log('warn', 'No basePath found', 'Required if deploying to username.github.io/repo-name/');
    }
}

// .nojekyll
if (fs.existsSync(path.join(PUBLIC_DIR, '.nojekyll'))) {
    log('pass', '.nojekyll file exists in public/', 'Prevents GitHub from ignoring _next/ directory');
} else {
    log('fail', 'Missing public/.nojekyll',
        'GitHub Pages uses Jekyll by default, which ignores _next/ → all CSS/JS will 404!');
}

// GitHub Actions Workflow
if (fs.existsSync(WORKFLOW_DIR)) {
    const files = fs.readdirSync(WORKFLOW_DIR).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
    if (files.length > 0) {
        log('pass', `GitHub Actions workflow found: ${files.join(', ')}`);
    } else {
        log('warn', 'No .yml workflow files in .github/workflows/');
    }
} else {
    log('warn', 'No .github/workflows/ directory found');
}

// sitemap.xml exists locally
if (fs.existsSync(SITEMAP_PATH)) {
    log('pass', 'Static sitemap.xml found in public/');
} else if (fs.existsSync(path.join(process.cwd(), 'src/app/sitemap.ts'))) {
    log('warn', 'Dynamic sitemap.ts found (may fail with output: "export")',
        'Consider using a static public/sitemap.xml instead');
} else {
    log('warn', 'No sitemap found');
}

// robots.txt exists locally
if (fs.existsSync(path.join(PUBLIC_DIR, 'robots.txt'))) {
    log('pass', 'Static robots.txt found in public/');
} else {
    log('warn', 'No public/robots.txt found');
}

// ========== PART 2: Live URL Checks ==========
console.log('\n🌐 Part 2: Live URL Checks (Testing deployed site)\n');

// Extract URLs from sitemap
let sitemapUrls = [];
if (fs.existsSync(SITEMAP_PATH)) {
    const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
    const locMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
    if (locMatches) {
        sitemapUrls = locMatches.map(m => m.replace(/<\/?loc>/g, ''));
    }
}

// Add tool URLs
const toolUrls = [
    `${SITE_BASE}/sitemap.xml`,
    `${SITE_BASE}/robots.txt`,
];

function httpHead(url) {
    return new Promise((resolve) => {
        const req = https.request(url, { method: 'HEAD', timeout: 8000 }, (res) => {
            resolve({ url, status: res.statusCode, location: res.headers.location || null });
        });
        req.on('error', (err) => resolve({ url, status: 0, error: err.message }));
        req.on('timeout', () => { req.destroy(); resolve({ url, status: 0, error: 'Timeout' }); });
        req.end();
    });
}

async function runLiveChecks() {
    // Check tool URLs (sitemap.xml, robots.txt)
    console.log('📄 Checking tool files...\n');
    for (const url of toolUrls) {
        const result = await httpHead(url);
        if (result.status === 200) {
            log('pass', `${path.basename(url)} accessible`, `${url} → ${result.status}`);
        } else {
            log('fail', `${path.basename(url)} inaccessible`, `${url} → ${result.status || result.error}`);
        }
    }

    // Check page URLs from sitemap
    if (sitemapUrls.length === 0) {
        log('warn', 'No URLs found in sitemap to test');
    } else {
        console.log('\n📄 Checking page URLs (with trailing slash)...\n');
        for (const url of sitemapUrls) {
            const result = await httpHead(url);
            if (result.status === 200) {
                log('pass', `WITH slash → 200`, url);
            } else {
                log('fail', `WITH slash → ${result.status || result.error}`, `${url} (Expected 200)`);
            }
        }

        console.log('\n📄 Checking page URLs (without trailing slash)...\n');
        for (const url of sitemapUrls) {
            // Skip root URL and non-page URLs
            if (url === `${SITE_BASE}/` || url === SITE_BASE) continue;

            const noSlash = url.replace(/\/$/, '');
            const result = await httpHead(noSlash);

            if (result.status === 200) {
                // No redirect, served directly without slash - not ideal but works
                log('warn', `NO slash → 200 (no redirect)`, `${noSlash} — Consider if canonical consistency matters`);
            } else if (result.status === 301 || result.status === 302) {
                // Redirect to slash version - perfect behavior
                const target = result.location || '(unknown)';
                if (target.endsWith('/')) {
                    log('pass', `NO slash → ${result.status} redirect to slash version`, `${noSlash} → ${target}`);
                } else {
                    log('warn', `NO slash → ${result.status} redirect but NOT to slash version`, `${noSlash} → ${target}`);
                }
            } else {
                log('fail', `NO slash → ${result.status || result.error}`, `${noSlash} (Expected 301 redirect)`);
            }
        }
    }

    // ========== PART 3: Canonical URL Checks ==========
    console.log('\n🔗 Part 3: Canonical URL Checks\n');

    function httpGet(url) {
        return new Promise((resolve) => {
            const req = https.get(url, { timeout: 10000 }, (res) => {
                let body = '';
                res.on('data', chunk => body += chunk);
                res.on('end', () => resolve({ url, status: res.statusCode, body }));
            });
            req.on('error', (err) => resolve({ url, status: 0, body: '', error: err.message }));
            req.on('timeout', () => { req.destroy(); resolve({ url, status: 0, body: '', error: 'Timeout' }); });
        });
    }

    if (sitemapUrls.length === 0) {
        log('warn', 'No URLs to check canonical tags for');
    } else {
        for (const url of sitemapUrls) {
            const result = await httpGet(url);

            if (result.status !== 200) {
                log('fail', `Cannot fetch page for canonical check`, `${url} → ${result.status || result.error}`);
                continue;
            }

            // Extract canonical
            const canonicalMatch = result.body.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)
                || result.body.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);

            if (!canonicalMatch) {
                log('fail', `Missing <link rel="canonical">`, url);
                continue;
            }

            const canonical = canonicalMatch[1];

            // Check 1: Canonical exists
            log('pass', `Canonical tag found`, `${url}`);

            // Check 2: Canonical has trailing slash
            const isRoot = url === `${SITE_BASE}/` || url === SITE_BASE;
            if (canonical.endsWith('/')) {
                log('pass', `Canonical uses trailing slash`, `canonical="${canonical}"`);
            } else {
                log('warn', `Canonical missing trailing slash`,
                    `canonical="${canonical}" — Should end with / for consistency with sitemap`);
            }

            // Check 3: Canonical matches current page URL
            const normalizedCanonical = canonical.replace(/\/$/, '');
            const normalizedUrl = url.replace(/\/$/, '');
            if (normalizedCanonical === normalizedUrl) {
                log('pass', `Canonical matches page URL`, `${canonical} ≡ ${url}`);
            } else {
                log('fail', `Canonical mismatch!`,
                    `Page: ${url}\n         Canonical: ${canonical}\n         These should point to the same page.`);
            }
        }
    }

    // ========== SUMMARY ==========
    const total = pass + warn + fail;
    const score = total > 0 ? Math.round((pass / total) * 100) : 0;

    console.log('\n' + '='.repeat(60));
    console.log('📊 GitHub Pages Deployment Audit Summary\n');
    console.log(`   Total Checks : ${total}`);
    console.log(`   ✅ Pass       : ${pass}`);
    console.log(`   ⚠️  Warnings  : ${warn}`);
    console.log(`   ❌ Failures   : ${fail}`);
    console.log(`\n   📈 Score: ${score}/100`);

    if (fail === 0 && warn === 0) {
        console.log('\n   ✨ Perfect! Your site is fully ready for GitHub Pages.');
    } else if (fail === 0) {
        console.log('\n   👍 Good. No critical issues, but review warnings above.');
    } else {
        console.log('\n   🛑 Fix the failures above before deploying.');
    }
    console.log('='.repeat(60) + '\n');
}

runLiveChecks();
