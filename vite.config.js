import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react-helmet-async')) return 'helmet';
          if (id.includes('framer-motion')) return 'motion';
          if (
            id.includes('react-dom') ||
            id.includes('react-router-dom') ||
            id.includes('/react/')
          ) return 'vendor';
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
  },
})
