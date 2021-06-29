// eslint-disable-next-line no-undef
module.exports = {
  extends: ['plugin:json/recommended'],
  plugins: ['sort-keys-fix', 'typescript-sort-keys', 'json', 'no-secrets'],
  rules: {
    complexity: ['error', 20],
    'max-depth': ['error', 6],
    'max-lines': ['error', { max: 512, skipBlankLines: true }],
    'max-nested-callbacks': ['error', 6],
    'max-statements': ['error', 32],
    'no-restricted-imports': [
      'warn',
      { paths: ['lodash', 'react-player', 'mapbox-gl', 'filepond', 'aos', 'react-icons'] },
    ],
    'no-secrets/no-secrets': ['off'],
    'no-tabs': ['error'],
    'no-unused-vars': 'off',
    'no-useless-escape': 'off',
    quotes: [2, 'single', 'avoid-escape'],
    'require-await': 'error',
    semi: ['warn', 'never'],
    'sort-keys': ['warn', 'asc', { caseSensitive: true, minKeys: 2, natural: false }],
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
}
