#!/usr/bin/env node
import { execFileSync } from 'child_process'
console.log(`Dead [${process.cwd()}]`)
execFileSync('yarn', ['ts-prune'], { stdio: 'inherit' })
