# ✅ ใช้ base image จาก Microsoft Playwright ที่มี browser + dependency พร้อมใช้งาน
# เวอร์ชัน 1.52.0 และใช้ Ubuntu 24.04 (noble)
FROM mcr.microsoft.com/playwright:v1.52.0-noble

# ✅ กำหนด working directory ภายใน container เป็น /app
# คำสั่งถัดไปทั้งหมดจะทำงานในโฟลเดอร์นี้
WORKDIR /app

# ✅ คัดลอกเฉพาะไฟล์ package.json มาไว้ใน container
# เพื่อให้ Docker สามารถแคชการติดตั้ง dependencies ได้ ถ้า package.json ไม่เปลี่ยน
COPY package.json ./

# ✅ ติดตั้ง dependencies ตามที่ระบุใน package.json
# ใช้ npm ci เพราะเร็วและเสถียรกว่า npm install (เหมาะกับ CI/CD และ Docker build)
RUN npm ci

# ✅ คัดลอกไฟล์ทั้งหมดจากโปรเจกต์บนเครื่อง → ไปยัง /app ใน container
# รวมไฟล์ทดสอบ โค้ด และไฟล์ config ต่าง ๆ
COPY . .

# ✅ ติดตั้ง browser dependencies สำหรับ Chromium, Firefox, WebKit
# และตรวจสอบให้ตรงกับเวอร์ชันที่ใช้ใน Playwright
RUN npx playwright install --with-deps

# ✅ กำหนดคำสั่งเริ่มต้นเมื่อ container ถูกรัน
# ในที่นี้จะรันชุดทดสอบทั้งหมดของ Playwright
CMD ["npx", "playwright", "test"]
