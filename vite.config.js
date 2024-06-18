import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'build'
  },
  plugins: [react()],
  resolve: {
    alias: {
      // Adicione aliases se necessário
    },
  },
  server: {
    // Configurações do servidor, se necessário
  },
  optimizeDeps: {
    // Otimização de dependências, se necessário
  },
})
