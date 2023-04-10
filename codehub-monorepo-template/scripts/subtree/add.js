const { exec, execSync } = require('child_process');
const { modules } = require('../constant/repo');
const remote = execSync(`git remote`).toString('utf8').split('\n');

modules.forEach((module) => {
  if (remote.includes(module)) return;
  execSync(`git remote add ${module} git@github.com:mmicome/${module}.git`);
  console.log(`git remote add ${module} git@github.com:mmicome/${module}.git success!!`);
});
