const https = require('https');
const fs = require('fs');
const path = require('path');

const coins = {
    'bitcoin': '1',
    'ethereum': '1027',
    'okb': '3897',
    'solana': '5426'
};

const outputDir = path.join(process.cwd(), 'public/icons');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const download = (url, dest) => {
    https.get(url, (res) => {
        if (res.statusCode !== 200) {
            console.error(`Failed to download ${url}: ${res.statusCode}`);
            return;
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${dest}`);
        });
    }).on('error', (err) => {
        console.error(`Error downloading ${url}: ${err.message}`);
    });
};

Object.entries(coins).forEach(([name, id]) => {
    download(`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`, path.join(outputDir, `${name}.png`));
});
