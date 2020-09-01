module.exports = {
  camelcase: 0,
  'comma-dangle': 0,
  'import/prefer-default-export': 0,
  'no-console': 'warn',
  'no-nested-ternary': 0,
  'no-underscore-dangle': 0,
  'no-unused-expressions': ['error', { allowTernary: true }],
  'sort-keys': [
    'error',
    'asc',
    { caseSensitive: true, minKeys: 2, natural: false },
  ],
};
