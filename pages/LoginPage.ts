import { Page, Locator } from '@playwright/test';
import locators, { LocatorKey } from '../locs/login/index';
import i18n, { Lang } from '../i18n';

const lang = (process.env.LANG === 'th') ? 'th' : 'en';

export class LoginPage {
  readonly locators: Record<LocatorKey, Locator>;
  readonly t = i18n[lang];
  readonly page: Page;

  constructor(page: Page) {
    this.t = i18n[lang];
    this.page = page;
  }

  // อย่าง ก์ ใช้ locator แบบ dynamic
  async fillName(name: string) {
    console.log('lang', lang);
    console.log('lang', this.t.dashboard.timeAtWork);
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
