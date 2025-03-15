import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update base to your repository name
export default defineConfig({
  plugins: [react()],
  base: '/disaster_m/'
})
