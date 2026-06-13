import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 👈 ۱. اضافه کردن پلاگین تیلویند

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 👈 ۲. فعال‌سازی تیلویند
  ],
  base: '/mywebsite/',
})