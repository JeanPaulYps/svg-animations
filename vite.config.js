import { defineConfig } from "vite";
import { globSync } from "glob";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
  plugins: [],
  build: {
    outDir: "dist/",
    rollupOptions: {
      input: globSync("**/*.html", { ignore: 'dist/**' }),
    },
  },
});
