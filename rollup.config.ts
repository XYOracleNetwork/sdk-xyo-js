import typescript from 'rollup-plugin-typescript2'

export default [
  {
    external: ['axios', 'rollbar'],
    input: './src/index.ts',
    output: [
      {
        exports: 'auto',
        file: './dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        exports: 'auto',
        file: './dist/index.js',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [typescript()],
  },
  {
    external: ['axios', 'rollbar'],
    input: './src/assertEx.ts',
    output: [
      {
        exports: 'auto',
        file: './dist/assertEx.js',
        format: 'es',
        sourcemap: true,
      },
    ],
    plugins: [typescript()],
  },
]
