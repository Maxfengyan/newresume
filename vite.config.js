import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";
import { svgBuilder } from "./src/plugin/icons/svgBuilder";
// https://vitejs.dev/config/

const path = require("path");

function _resolve(dir) {
  return path.resolve(__dirname, dir);
}

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": _resolve("src"),
    },
  },
  plugins: [
    vue(),
    svgBuilder("./src/plugin/icons/svg/"),
    styleImport({
      libs: [
        {
          libraryName: "vant",
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
  ],
  server: {
    port: 9900,
    host: "0.0.0.0",
  },
});
