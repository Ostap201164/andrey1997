import { defineConfig } from "vite";
import { resolve } from "path";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  root: "src",
  define: { "process.env": process.env },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
    },
    outDir: "../dist",
  },

  plugins: [injectHTML(), FullReload(["./src//.html"])],
});