import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true // Esto silenciará las advertencias de deprecación
      }
    }
  }
})