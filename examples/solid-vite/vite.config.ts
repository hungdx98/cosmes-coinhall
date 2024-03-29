import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import ts from "@rollup/plugin-typescript";
import pkg from '../../package.json';

export default defineConfig({
  plugins: [solidPlugin()],
  define: {
    global: "window",
  },
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    rollupOptions: {
      external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.peerDependencies), ...Object.keys(pkg.devDependencies), 'fs', 'path']
    }
  }
});
