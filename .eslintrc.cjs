module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: true },
    ],
    'quotes': [2, "single", { "avoidEscape": true }],
    '@typescript-eslint/ban-ts-comment': ['off'],
    "semi": ["error"],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
  },
}

