import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mywebsite/', // ⚠️ خیلی مهم: اسم ریپازیتوری گیت‌هابت باید بین دو تا اسلش باشد
})