module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:flowtype/recommended',
    'plugin:import/errors',
    'prettier',
    'prettier/flowtype',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  plugins: ['flowtype', 'import', 'prettier'],
  rules: {
    'prettier/prettier': ['warn', { trailingComma: 'all', singleQuote: true }],
  },
};