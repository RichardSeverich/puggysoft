import { expect, type Locator, type Page } from '@playwright/test';

export class PuggysoftLoginPage {
  readonly page: Page;
  readonly inputUsername: Locator;
  readonly inputPassword: Locator;
  readonly buttonEnter: Locator;
  readonly selectTenant: Locator;
  readonly selectRole: Locator;
  readonly buttonContinue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputUsername = page.locator("input[placeholder='Username']");
    this.inputPassword = page.locator("input[placeholder='Password']");
    this.buttonEnter = page.locator("//button[text()='Entrar']");
    this.selectTenant = page.locator("select[id='select-tenant']");
    this.selectRole = page.locator("select[id='select-role']");
    this.buttonContinue = page.locator("//button[text()='Continuar']");
  }

  async navigateLoginPage() {
    await this.page.goto('http://localhost:3000/login');
  }

  async loginWith(username: string, password: string, tenant: string, role: string) {
    await expect(this.inputUsername).toBeVisible();
    await this.inputUsername.fill(username);
    await expect(this.inputPassword).toBeVisible();
    await this.inputPassword.fill(password);
    await expect(this.buttonEnter).toBeVisible();
    await this.buttonEnter.click();
    await expect(this.selectTenant).toBeVisible();
    await this.selectTenant.selectOption(tenant);
    await expect(this.selectRole).toBeVisible();
    await this.selectRole.selectOption(role);
    await expect(this.buttonContinue).toBeVisible();
    await this.buttonContinue.click();
  }

}