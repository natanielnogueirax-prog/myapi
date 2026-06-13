const path = require('node:path');

const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
  {
    ignores: ['node_modules', 'dist', 'build', '/*.js', '.eslintrc.*'],
  },
  {
    files: ['src/**/*.{ts,js,mjs,cjs}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        // Avoid parsing errors for non-TS files in the repo root.
        // (tsconfig.json includes only src/**/*)
        project: path.join(__dirname, 'tsconfig.json'),
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // Rough equivalent of: plugin:@typescript-eslint/recommended
      ...tsPlugin.configs.recommended.rules,

      // Rough equivalent of: plugin:prettier/recommended
      'prettier/prettier': 'warn',

      // Overrides from your previous .eslintrc.cjs
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': 'off',
    },
  },
];

