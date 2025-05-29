import { Page, Locator } from '@playwright/test';
import locators from '../locs/login/index';

type LocatorMap = { [key: string]: string };

export class LoginPage {
  // สร้าง map เก็บ Locator objects แบบ dynamic
  private locators: { [key: string]: Locator } = {};

  constructor(private page: Page) {
    // วนลูปทุก key ใน locators แล้วสร้าง Locator instance ให้ใน this.locators
    for (const key in locators) {
      this.locators[key] = page.locator(locators[key]);
    }
  }

  // ตัวอย่างฟังก์ชันเรียกใช้ locator แบบ dynamic
  async fillName(name: string) {
    await this.locators.nameInput.waitFor();
    await this.locators.nameInput.click();
    await this.locators.nameInput.fill(name);
  }

  async fillPassword(password: string) {
    await this.locators.passwordInput.waitFor();
    await this.locators.passwordInput.click();
    await this.locators.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.locators.loginButton.waitFor();
    await this.locators.loginButton.click();
  }

  async login(name: string, password: string) {
    await this.fillName(name);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}
