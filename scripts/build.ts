#!/usr/bin/env node
import { execFileSync } from 'child_process'
console.log(`Build [${process.cwd()}]`)
execFileSync('yarn', ['deps'], { stdio: 'inherit' })
execFileSync('yarn', ['lint'], { stdio: 'inherit' })
execFileSync('yarn', ['compile'], { stdio: 'inherit' })
