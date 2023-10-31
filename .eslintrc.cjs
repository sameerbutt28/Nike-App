module.exports = {
  ignorePatterns: ['node_modules/', 'dist/'],
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true,
      },
    },
    // Other overrides
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  root: true,
  env: { browser: true, es2020: true, 
    node: true,},
  plugins: ['prettier'],
  extends: ['airbnb', 'plugin:react/recommended'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'prettier/prettier': 'error',
    'max-len': ['error', { 'code': 120 }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
