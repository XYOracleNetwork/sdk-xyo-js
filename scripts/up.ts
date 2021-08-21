#!/usr/bin/env node
import { execFileSync } from 'child_process'
console.log(`Up [${process.cwd()}]`)
execFileSync('yarn', ['ncu'], { stdio: 'inherit' })
