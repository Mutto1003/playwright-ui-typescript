import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('has title', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto(process.env.URL!);
  await loginPage.login('Admin', 'admin123');
  await page.waitForTimeout(5000);
});
