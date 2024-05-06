import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/intelliChat.ts',
      formats: ['es'],
      fileName: 'intelliChat',
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
});
