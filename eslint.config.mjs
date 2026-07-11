import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Italian copy uses apostrophes liberally in JSX text; escaping every one
      // hurts readability and has no runtime impact.
      "react/no-unescaped-entities": "off",
      // Reading localStorage on mount (quiz result, expert widget) is a
      // legitimate client-only effect that this opinionated rule flags.
      "react-hooks/set-state-in-effect": "off",
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Data-prep helper scripts (Node .cjs) that generate the Ecwid content
    // snapshot — not part of the Next.js app, not shipped.
    "Cannabilla-Content/**",
  ]),
]);

export default eslintConfig;
