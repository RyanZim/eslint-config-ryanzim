'use strict';
module.exports = {
  'parserOptions': {
    'ecmaVersion': 6,
  },
  'extends': 'eslint:recommended',
  'rules': {
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'curly': ['error', 'multi'],
    'brace-style': ['error', '1tbs'],
    'one-var': ['error', 'never'],
    'quotes': ['error', 'single', {avoidEscape: true}],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    // STYLISTIC PREFERENCES
    // Spacing:
    'space-infix-ops': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'comma-spacing': ['error', {before: false, after: true}],
    // Newlines:
    'no-multiple-empty-lines': ['error', {max: 2, maxBOF: 0, maxEOF: 1}],
    // BEST PRACTICES & POSSIBLE ERRORS:
    'strict': 'error',
    'block-scoped-var': 'error',
    'handle-callback-err': 'error',
    'linebreak-style': ['error', 'unix'],
    'eol-last': 'error',
    'no-trailing-spaces': 'error',
  },
};
