import typescript from '@rollup/plugin-typescript'

export default [
  {
    external: ['rollbar', 'tslib', 'axios'],
    input: 'src/index.ts',
    output: [
      {
        exports: 'auto',
        file: 'dist/index.cjs',
        format: 'cjs',
      },
      {
        file: 'dist/index.js',
        format: 'es',
      },
    ],
    plugins: [typescript({ tsconfig: './tsconfig.json' })],
  },
]
