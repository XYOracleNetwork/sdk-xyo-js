#!/usr/bin/env node
import { execFileSync } from 'child_process'
console.log(`Lint [${process.cwd()}]`)
execFileSync('yarn', ['eslint', '--ext', '.js,.jsx,.ts,.tsx,.json', './src'], { stdio: 'inherit' })
