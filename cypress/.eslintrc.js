const typescriptSharedConfig = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier/@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
}

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['simple-import-sort', 'eslint-plugin-cypress'],
  extends: ['eslint:recommended', 'prettier', 'plugin:cypress/recommended'],
  rules: {
    'no-unused-vars': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  env: {
    browser: true,
    node: true,
    'cypress/globals': true,
  },
  overrides: [
    {
      files: ['cypress/**/*.ts'],
      ...typescriptSharedConfig,
      parserOptions: {
        project: './cypress/tsconfig.json',
      },
    },
  ],
}
