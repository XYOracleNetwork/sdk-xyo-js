#!/usr/bin/env node
import { execFileSync } from 'child_process'
console.log(`Reinstall [${process.cwd()}]`)
execFileSync('yarn', ['clean'], { stdio: 'inherit' })
execFileSync('yarn', ['install'], { stdio: 'inherit' })
