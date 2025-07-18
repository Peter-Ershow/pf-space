import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Make sure this matches your deployment
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})