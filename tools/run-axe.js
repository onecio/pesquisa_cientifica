const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const axeCore = require('axe-core');

(async () => {
    const url = process.argv[2] || 'http://localhost:5500';
    const reportsDir = path.join(__dirname, '..', 'reports');
    if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });

    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    try {
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle2' });

        await page.addScriptTag({ content: axeCore.source });
        const results = await page.evaluate(async () => {
            return await axe.run({
                runOnly: {
                    type: 'tag',
                    values: ['wcag2a', 'wcag2aa']
                }
            });
        });

        const outPath = path.join(reportsDir, 'axe.json');
        fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
        console.log('Axe report written to', outPath);
        console.log('Violations:', results.violations.length);
        results.violations.forEach(v => {
            console.log(`- ${v.id}: ${v.impact} (${v.nodes.length} nodes)`);
        });
    } catch (err) {
        console.error(err);
        process.exitCode = 1;
    } finally {
        await browser.close();
    }
})();
