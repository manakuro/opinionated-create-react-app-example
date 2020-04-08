module.exports = {
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  rules: {
    quotes: ['error', 'single'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'all'
      },
    ],
    "@typescript-eslint/no-angle-bracket-type-assertion": "off",
    "@typescript-eslint/consistent-type-assertions": "warn"
  },
}
