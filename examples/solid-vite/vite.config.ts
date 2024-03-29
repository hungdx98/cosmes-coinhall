import { builtinModules } from 'module';
import path from 'path';
import { defineConfig } from "vite";
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  //@ts-ignore
  plugins: [tsconfigPaths()],
  define: {
    global: "window",
  },
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      formats: ['es'],
      fileName: () => 'out.js',
    },
    target: "esnext",
    rollupOptions: {
      external: [...builtinModules, ...builtinModules.map((m) => `node:${m}`)],
    },
  }
});
