import { test, expect } from '@playwright/test';
// import { initializeDB } from '../db/initialize';
// import { queryDB } from '../db/query';
// import { getUserByEmail } from '../db/commonQueries';
import { LoginPage } from '../pages/LoginPage';
import * as loginData from '../data-test/loginData.json';
const testData = loginData;

test.beforeAll(async () => {
  // Initialize database before running tests
  // await initializeDB();
});

test('has title', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto(process.env.URL!);
  await loginPage.login(testData.validAdmin.username, testData.validAdmin.password);
  // await loginPage.login('Admin', 'admin123');
  await page.waitForTimeout(5000);

  console.log("Test no: 002")

  // const result = await getUserByEmail('Admin');
  // console.log('📦 User info from DB:', result);
});
