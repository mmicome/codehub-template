/**
 * 递归安装依赖
 * node dependence.js a@0.0.0 [options]
 */

const { exec } = require('child_process');
const process = require('node:process');
const { modules } = require('../constant/repo');
console.log(modules);
const params = process.argv.slice(2);
if (!params || params.length === 0) return;
modules.forEach((modules) => {
  // console.log(params.join(' '))
  exec(`cd ${modules} && pnpm add ${params.join(' ')}`, (error, stdout, stderr) => {
    if (error) {
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
  });
});
