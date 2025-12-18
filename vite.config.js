import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { plugin as markdown } from 'vite-plugin-markdown' // <-- Import

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    markdown({ mode: ['html', 'toc', 'react'] }) // <-- Configuration du plugin
  ],
})