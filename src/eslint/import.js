// eslint-disable-next-line no-undef
module.exports = {
  extends: ['plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],
  plugins: ['import', 'simple-import-sort'],
  rules: {
    'import/namespace': ['warn'],
    'import/no-absolute-path': ['warn'],
    'import/no-cycle': ['off', { maxDepth: 2 }],
    'import/no-internal-modules': ['warn'],
    'import/no-named-as-default': ['off'],
    'import/no-restricted-paths': ['warn'],
    'import/no-self-import': ['warn'],
    'import/no-useless-path-segments': ['warn'],
    'simple-import-sort/exports': ['warn'],
    'simple-import-sort/imports': ['warn'],
  },
}
