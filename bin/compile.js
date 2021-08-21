"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
console.log("Compiling [" + process.cwd() + "]");
child_process_1.execFileSync('yarn', ['tsc', '-p', 'tsconfig.build.json'], { stdio: 'inherit' });
child_process_1.execFileSync('yarn', ['rollup', '-c', 'rollup.config.ts'], { stdio: 'inherit' });
