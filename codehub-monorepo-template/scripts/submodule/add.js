const { exec } = require('child_process');
const { modules } = require('../constant/repo');

modules.forEach((module) => {
  exec(
    `git submodule add git@github.com:mmicome/${module}.git ${module}`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    }
  );
});
