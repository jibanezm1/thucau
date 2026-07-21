const puppeteer = require("puppeteer-core");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: "new",
    args: ["--disable-gpu", "--enable-unsafe-swiftshader", "--use-gl=angle", "--use-angle=swiftshader"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 700 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  await page.evaluate(() => window.scrollTo(0, 600));
  await new Promise((r) => setTimeout(r, 300));
  await page.screenshot({ path: "/tmp/just-scrolled.png" });
  await new Promise((r) => setTimeout(r, 1600));
  await page.screenshot({ path: "/tmp/centered.png" });
  await browser.close();
})();
