import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  base: "/build/",
  build: {
    outDir: "build",
    emptyOutDir: true
  },
  test: {
    environment: "happy-dom",
    globals: true
  }
});
