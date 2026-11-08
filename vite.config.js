import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User pages repo: served at https://kirky-x.github.io/ root, so base stays '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
