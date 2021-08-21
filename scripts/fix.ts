#!/usr/bin/env node
import { execFileSync } from 'child_process'
console.log(`Fix [${process.cwd()}]`)
execFileSync('yarn', ['eslint', '--ext', '.js,.jsx,.ts,.tsx,.json', './src', '--fix'], { stdio: 'inherit' })
