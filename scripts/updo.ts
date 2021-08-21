#!/usr/bin/env node
import { execFileSync } from 'child_process'
console.log(`Updo [${process.cwd()}]`)
execFileSync('yarn', ['install'], { stdio: 'inherit' })
execFileSync('yarn', ['upgrade'], { stdio: 'inherit' })
execFileSync('yarn', ['ncu', '-u'], { stdio: 'inherit' })
execFileSync('yarn', ['reinstall'], { stdio: 'inherit' })
