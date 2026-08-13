import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  base: process.env.VITE_BASE || "/",
  build: {
    outDir: "build",
    emptyOutDir: true
  },
  test: {
    environment: "happy-dom",
    globals: true
  }
});
