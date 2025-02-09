import { test, chromium } from '@playwright/test';
import { PuggysoftLoginPage } from './../pages/puggysoft-login-page';
import { PuggysoftDasboardPage } from './../pages/puggysoft-dashboard-page';

test('Login test with pages', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  const loginPage = new PuggysoftLoginPage(page);
  const dasboardPage = new PuggysoftDasboardPage(page);
  await loginPage.navigateLoginPage();
  await loginPage.loginWith("admin", "admin123", "EMPRESA 1", "ADMIN");
  await dasboardPage.verifyNavBarButton("Adm. Tenants");
  await dasboardPage.verifyNavBarButton("Adm. Usuarios");
  await dasboardPage.verifyNavBarButton("Adm. Roles");
  await page.waitForTimeout(3000);
});
