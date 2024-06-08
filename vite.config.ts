import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    target: 'esnext',
    sourcemap: true,
    lib: {
      entry: {
        index: 'src/index.ts',
        kotlin: 'src/kotlin.ts',
      },
      formats: ['es'],
    },
    minify: false,
  },
  plugins: [dts({ rollupTypes: true })],
})
