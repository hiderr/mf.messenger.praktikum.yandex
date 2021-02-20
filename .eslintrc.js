module.exports = {
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'eslint.tsconfig.json',
  },
  plugins: [
    "prettier"
  ],
  rules: {
    "linebreak-style": 0,
    "import/prefer-default-export": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/ban-types": 1
  }
};