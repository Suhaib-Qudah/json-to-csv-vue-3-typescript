import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/JsonToCSV.vue',
      name: 'JsonToCSV',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
