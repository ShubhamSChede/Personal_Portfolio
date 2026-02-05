import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ["node_modules/**", ".next/**", "out/**", ".vercel/**"],
  },
  ...compat.extends("next/core-web-vitals").map(config => {
    // Remove parser if it contains functions that can't be serialized
    if (config.languageOptions?.parser) {
      const { parser, ...restLanguageOptions } = config.languageOptions;
      return {
        ...config,
        languageOptions: restLanguageOptions,
      };
    }
    return config;
  }),
];

export default eslintConfig;
