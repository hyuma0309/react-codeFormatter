module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  extends: ["next/core-web-vitals", "plugin:import/recommended", "plugin:import/warnings", "prettier"],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        "next/core-web-vitals",
        "plugin:import/recommended",
        "plugin:import/warnings",
        "plugin:@typescript-eslint/recommended", // TypeScript rules
        "prettier",
      ],
      rules: {
        "import/order": [
          "error",
          {
            alphabetize: {
              order: "asc",
            },
          },
        ],
      },
    },
  ],
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
  plugins: ["@typescript-eslint"],
};
