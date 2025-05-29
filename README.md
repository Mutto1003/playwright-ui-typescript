# playwright-ui-typescript

## Install playwright
- npm init playwright@latest
- ✔ Do you want to use TypeScript or JavaScript? · TypeScript
- ✔ Where to put your end-to-end tests? · tests
- ✔ Add a GitHub Actions workflow? (y/N) · true
- ✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true

## Running the Example Test
- npx playwright test

## Running the Example Test in UI Mode
- npx playwright test --ui

## Run tests in headed mode
- npx playwright test --headed

## Adding the foleder utils
- ใช้ในการจัดการ ฟังก์ชันหรือโมดูลที่เป็น "เครื่องมือช่วยงานทั่วไป" ที่สามารถนำกลับมาใช้ซ้ำได้หลายที่ในโปรเจกต์ เช่น
- | File                               | Description                                                          |
- | ---------------------------------- | -------------------------------------------------------------------- |
- | [`dataHelper.ts`](./dataHelper.ts) | ฟังก์ชันช่วยจัดการและสร้างข้อมูลเทสต์ เช่น random email, mock data
- | [`authHelper.ts`](./authHelper.ts) | ฟังก์ชันที่เกี่ยวข้องกับการยืนยันตัวตน เช่น ดึง token, login แบบ API
- | [`dateHelper.ts`](./dateHelper.ts) | ฟังก์ชันจัดการวันเวลา เช่น สร้างวันที่วันนี้/พรุ่งนี้/ย้อนหลัง
- | [`fileHelper.ts`](./fileHelper.ts) | ฟังก์ชันโหลดหรือบันทึกไฟล์ เช่น JSON, CSV, text
- | [`waitHelper.ts`](./waitHelper.ts) | ฟังก์ชันรอเงื่อนไขเฉพาะหรือ wait แบบ custom

## Adding the foleder pages
- ใช้สำหรับเก็บ Page Object Model (POM) — เป็นแนวทางการเขียนโค้ดที่ช่วยให้การจัดการกับ UI ของแต่ละหน้าในแอปทำได้ง่ายและเป็นระเบียบมากขึ้น

## Adding the foleder locs
- ใช้เก็บ locators ของแต่ละหน้าในแอป

## install dotenv
- npm install dotenv
- https://www.npmjs.com/package/dotenv

## Adding the foleder env
- ใช้เก็บ environment variables

## import dotenv in playwright.config.ts
- import * as dotenv from 'dotenv';
- dotenv.config({
  path: './env/.env',
});

## Commard run env
- ENV=dev npx playwright test

## Adding the Dockerfile
- https://github.com/microsoft/playwright-docker
- https://github.com/microsoft/playwright-docker/blob/main/Dockerfile

## install mysql2
- npm install mysql2

## tsconfig.json