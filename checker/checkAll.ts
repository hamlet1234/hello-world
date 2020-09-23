const { exec } = require('child_process');
let ok = true;

for (let i = 0; i < 10; ++i) {
  exec('ts-node check.ts', (error, stdout, stderr) => {
    if (error) {
      console.log(i);
      ok = false;
    }
  });
}
if (!ok) {
  throw "Error";
}
