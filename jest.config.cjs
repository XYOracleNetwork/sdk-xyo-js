const generateJestConfig = ({ esModules }) => {
  const esModuleslist = Array.isArray(esModules) ? esModules.join('|') : esModules
  return {
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.test.json',
      },
    },
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    preset: 'ts-jest/presets/default-esm',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    transform: {
      [`(${esModuleslist}).+\\.[jt]s$`]: 'babel-jest',
      '^.+\\.tsx?$': 'ts-jest/legacy',
    },
    transformIgnorePatterns: [`./node_modules/(?!${esModuleslist})`],
  }
}

module.exports = generateJestConfig({ esModules: ['is-ip', 'ip-regex'] })
