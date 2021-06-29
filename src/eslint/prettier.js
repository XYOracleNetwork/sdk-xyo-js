// eslint-disable-next-line no-undef
module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        bracketSpacing: true,
        printWidth: 120,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
  },
}
