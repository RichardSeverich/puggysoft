import { chromium, test, expect } from '@playwright/test';

test('Login', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3000/login');
  await page.locator("input[placeholder='Username']").fill("admin");
  await page.locator("input[placeholder='Password']").fill("admin123");
  await page.locator("//button[text()='Entrar']").click();
  await page.selectOption("select[id='select-tenant']", 'EMPRESA 1');
  await page.selectOption("select[id='select-role']", 'ADMIN');
  await page.locator("//button[text()='Continuar']").click();
  await page.locator("//a[text()='Adm. Tenants']").isVisible();
  await page.locator("//a[text()='Adm. Usuarios']").isVisible();
  await page.locator("//a[text()='Adm. Roles']").isVisible();
  await page.waitForTimeout(3000);
});
