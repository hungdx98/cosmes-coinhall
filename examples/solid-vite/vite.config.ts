import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import ts from "@rollup/plugin-typescript"

export default defineConfig({
  define: {
    global: "window",
  },
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    rollupOptions: {
      external: [
        /^node:.*/,
      ]
    }
  },
  //@ts-ignore
  plugins: [{ ...ts(), ...solidPlugin(), apply: 'build' }]
});
