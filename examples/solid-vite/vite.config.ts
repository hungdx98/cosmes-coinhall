import { builtinModules } from 'module';
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  define: {
    global: "window",
  },
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      external: ['@bufbuild/protobuf', '@scure/base', '@walletconnect/sign-client', '@walletconnect/legacy-client', '@scure/bip39', 'lodash-es', '@scure/bip32', '@noble/hashes', '@noble/secp256k1'],
    },
  }
});
