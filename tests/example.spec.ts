import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { queryDB, initializeDB } from '../utils/dbHelper';

test.beforeAll(async () => {
  // Initialize database before running tests
  await initializeDB();
});

test('has title', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto(process.env.URL!);
  await loginPage.login('Admin', 'admin123');
  await page.waitForTimeout(5000);

  const result: any = await queryDB('SELECT * FROM users WHERE username = ?', ['Admin']);
  console.log('📦 User info from DB:', result);
});
