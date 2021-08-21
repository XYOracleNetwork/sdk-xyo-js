#!/usr/bin/env node
import { execFileSync } from 'child_process'
console.log(`Compiling [${process.cwd()}]`)
execFileSync('yarn', ['tsc', '-p', 'tsconfig.build.json'], { stdio: 'inherit' })
execFileSync('yarn', ['rollup', '-c', 'rollup.config.ts'], { stdio: 'inherit' })
