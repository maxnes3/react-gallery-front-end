/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser:true,
    es2020: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.app.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin', 
    'react-refresh',
    'prettier',
  ],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: [
    'dist', 
    'node_modules', 
    '.eslintrc.cjs',
    '*.config.*'
  ],
  rules: {
    // rules for airbnb
    'no-console': 'off',
    'eqeqeq': ['error', 'always'],
    'prefer-const': 'error',
    'react/react-in-jsx-scope': 'off',

    // rules for airbnb-typescript
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/consistent-type-definitions': 'warn',

    // rules for react-refresh
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    // rules for prettier
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        semi: true,
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'auto',
        singleQuote: true,
        arrowParens: 'always',
        plugins: ['prettier-plugin-tailwindcss'],
      },
    ],
  },
}