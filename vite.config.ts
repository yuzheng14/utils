import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    target: 'esnext',
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
    minify: false,
  },
  plugins: [dts({ rollupTypes: true })],
})
