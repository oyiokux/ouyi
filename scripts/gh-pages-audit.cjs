const fs = require('fs');
const path = require('path');

const NEXT_CONFIG_PATH = path.join(process.cwd(), 'next.config.ts');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const WORKFLOW_DIR = path.join(process.cwd(), '.github/workflows');

console.log('\n🚀 Running GitHub Pages Deployment Audit...\n');

let pass = 0;
let warn = 0;
let error = 0;

function log(status, message) {
    if (status === 'pass') {
        console.log(`✅ [PASS] ${message}`);
        pass++;
    } else if (status === 'warn') {
        console.log(`⚠️  [WARN] ${message}`);
        warn++;
    } else {
        console.log(`❌ [FAIL] ${message}`);
        error++;
    }
}

// 1. Check next.config.ts
if (fs.existsSync(NEXT_CONFIG_PATH)) {
    const content = fs.readFileSync(NEXT_CONFIG_PATH, 'utf-8');

    // Check output: export
    if (/output:\s*['"]export['"]/.test(content)) {
        log('pass', 'Static export enabled (output: "export")');
    } else {
        log('fail', 'Missing `output: "export"` in next.config.ts (Required for GitHub Pages)');
    }

    // Check trailingSlash: true (Crucial for 404s on subpaths)
    if (/trailingSlash:\s*true/.test(content)) {
        log('pass', 'Trailing slash enabled (fixes 404s on subdirectories)');
    } else {
        log('fail', 'Missing `trailingSlash: true`. Subpaths like /ouyi-app/ will 404 on refresh!');
    }

    // Check image optimization
    if (/unoptimized:\s*true/.test(content)) {
        log('pass', 'Image optimization disabled (GitHub Pages does not support it)');
    } else {
        log('fail', 'Image optimization enabled? Set `images.unoptimized = true` or use `next/image` loaders.');
    }

    // Check basePath
    if (/basePath:/.test(content)) {
        log('pass', '`basePath` configuration found (Required for repo sub-path deployment)');
    } else {
        log('warn', 'No `basePath` found. If deploying to username.github.io/repo, this is required!');
    }

} else {
    log('fail', 'next.config.ts not found!');
}

// 2. Check .nojekyll (Crucial for _next folder)
const noJekyllPath = path.join(PUBLIC_DIR, '.nojekyll');
if (fs.existsSync(noJekyllPath)) {
    log('pass', '.nojekyll file exists (Prevents generic 404s for _next assets)');
} else {
    log('warn', 'Missing `public/.nojekyll`. GitHub Pages ignores folders start with "_" (_next) by default.');
    console.log('   👉 Tip: I can create this file for you to prevent style loading issues.');
}

// 3. Check GitHub Actions Workflow
if (fs.existsSync(WORKFLOW_DIR) && fs.readdirSync(WORKFLOW_DIR).some(f => f.endsWith('.yml'))) {
    log('pass', 'GitHub Actions workflow file detected');
} else {
    log('warn', 'No GitHub Actions workflow found in .github/workflows.');
}

// Summary
console.log('\n========================================');
console.log(`Audit Complete: ${pass} Pass, ${warn} Warn, ${error} Fail`);
if (error === 0) {
    console.log('\n✨ Ready for GitHub Pages Deployment! ✨');
} else {
    console.log('\n🛑 Please fix the errors above before deploying.');
}
console.log('========================================\n');
