import { defineConfig } from 'vite'
import { resolve } from 'path'
import { promisify } from 'util'
import { ExecException, exec } from 'child_process'

export default defineConfig({
  build: {
    target: 'esnext',
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    // 在 plugin 中使用 vite 的 hook 生成 typescript 声明文件
    {
      name: 'generate-typescript-declaration',
      async writeBundle() {
        try {
          await promisify(exec)('pnpm tsc')
        } catch (error) {
          const { stdout, stderr } = error as { stdout: string; stderr: string } & ExecException
          this.error(`生成 typescript 声明文件失败：\n\tstdout: ${stdout}\n\tstderr:${stderr}`)
        }
      },
    },
  ],
})
