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
    '@typescript-eslint/no-explicit-any': 'off',
  },
}

/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['simple-import-sort', 'jest'],
  extends: ['eslint:recommended', 'prettier', 'plugin:jest/recommended'],
  rules: {
    'no-unused-vars': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
  settings: {
    jest: {
      version: 26,
    },
  },
  overrides: [
    {
      files: [
        'pages/**/*.js',
        'pages/**/*.jsx',
        'pages/**/*.tsx',
        'client/**/*.js',
        'client/**/*.tsx',
        'client/**/*.jsx',
      ],

      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier/react',
      ],

      rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
      },

      settings: {
        react: {
          version: 'detect',
        },
      },
      overrides: [
        {
          files: [
            'pages/**/*.ts',
            'pages/**/*.tsx',
            'client/**/*.ts',
            'client/**/*.tsx',
          ],

          ...typescriptSharedConfig,
          parserOptions: {
            project: './tsconfig.json',
          },
        },
      ],
    },
    {
      files: ['server/**/*.ts'],

      ...typescriptSharedConfig,
      parserOptions: {
        project: './server/tsconfig.json',
      },
    },
    {
      files: ['shared/**/*.ts'],

      ...typescriptSharedConfig,
      parserOptions: {
        project: './shared/tsconfig.json',
      },
    },
  ],
}
