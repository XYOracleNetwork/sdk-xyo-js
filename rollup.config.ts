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
        sourcemap: true,
      },
    ],
    plugins: [typescript({ tsconfig: './tsconfig.cjs.json' })],
  },
]
