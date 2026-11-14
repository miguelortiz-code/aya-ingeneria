import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@':          path.resolve(__dirname, './src'),
      '@atoms':     path.resolve(__dirname, './src/components/atoms'),
      '@molecules': path.resolve(__dirname, './src/components/molecules'),
      '@organisms': path.resolve(__dirname, './src/components/organisms'),
      '@templates': path.resolve(__dirname, './src/components/templates'),
      '@pages':     path.resolve(__dirname, './src/components/pages'),
      '@data':      path.resolve(__dirname, './src/data'),
      '@hooks':     path.resolve(__dirname, './src/hooks'),
    },
  },
  server:  { historyApiFallback: true },
  preview: { historyApiFallback: true },
})
