//const { exec } = require('child_process');
let ok = true;

for (let i = 0; i < 30; ++i) {
/*  exec('ts-node check.ts', (error, stdout, stderr) => {
    if (error) {
      console.log(i);
      ok = false;
    }
  });*/
  console.log(i);
}

if (!ok) {
  throw "Error";
}
