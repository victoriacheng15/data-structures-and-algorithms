module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, parser: 'flow', endOfLine: 'auto' },
    ],
    'no-console': 0,
    'no-param-reassign': 0,
    'no-unused-expressions': 0,
    'no-restricted-syntax': 0
  },
};
