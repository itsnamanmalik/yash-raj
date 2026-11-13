import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the site works at both
  // https://<user>.github.io/ and https://<user>.github.io/<repo>/
  base: './',
})
