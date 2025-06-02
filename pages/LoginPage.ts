import { Page, Locator } from '@playwright/test';
import locators, { LocatorKey } from '../locs/login/index';

export class LoginPage {
  readonly locators: Record<LocatorKey, Locator>;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // ตัวอย่างฟังก์ชันเรียกใช้ locator แบบ dynamic
  async fillName(name: string) {
    await this.page.waitForSelector(locators.nameInput);
    await this.page.click(locators.nameInput);
    await this.page.fill(locators.nameInput, name);
  }

  async fillPassword(password: string) {
    await this.page.waitForSelector(locators.passwordInput);
    await this.page.click(locators.passwordInput);
    await this.page.fill(locators.passwordInput, password);
  }

  async clickLogin() {
    await this.page.waitForSelector(locators.loginButton);
    await this.page.click(locators.loginButton);
  }

  async login(name: string, password: string) {
    await this.fillName(name);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}
