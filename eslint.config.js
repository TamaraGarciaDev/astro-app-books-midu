import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import css from "@eslint/css";
import astro from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";
import astroParser from "astro-eslint-parser";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals: globals.node } },
  tseslint.configs.recommended,
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
  {
    files: ["**/*.astro"],
    plugins: { astro },
    extends: ["astro/recommended"],
    languageOptions: {
      parser: astroParser,
    },
  },
]);