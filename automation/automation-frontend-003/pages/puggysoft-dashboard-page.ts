import { expect, type Locator, type Page } from '@playwright/test';

export class PuggysoftDasboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyNavBarButton(navBarButton: string) {
    await this.page.locator(`//a[text()='${navBarButton}']`).isVisible();
  }

}