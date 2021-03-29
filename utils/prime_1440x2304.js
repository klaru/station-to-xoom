const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1440,
    height: 2304,
    deviceScaleFactor: 0.556,
  });
  await page.goto('https://www.primetaphouse.com/on-tap');
  await page.screenshot({path: 'c:/users/kruff/Desktop/prime_1440x2304.png'});

  await browser.close();
})();
