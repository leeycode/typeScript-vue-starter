module.exports = {
  plugins: ["vue", "@typescript-eslint"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    env: { es6: true },
    sourceType: "module",
    ecmaFeatures: {
      legacyDecorators: true,
      experimentalObjectRestSpread: true
    }
  },
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "plugin:vue/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/essential",
    "standard"
  ],
  rules: {
    // default eslint rules
    "one-var": 0,
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    "no-debugger": 0,
    "no-console": 0,
    semi: [2, "always"],
    "no-extra-semi": 2,
    "space-before-function-paren": 0,
    eqeqeq: 0,
    "spaced-comment": 0,
    "no-useless-escape": 0,
    "no-tabs": 0,
    "no-mixed-spaces-and-tabs": 0,
    "new-cap": 0,
    camelcase: 0,
    "no-new": 0,
    indent: "off",
    semi: "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^h$"
      }
    ],
    // typescript-eslint rules
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
    "@typescript-eslint/semi": ["error"],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-inferrable-types": 0
  }
};
