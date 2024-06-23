const { exec } = require('child_process');

test('Performance Test for get_balance API', (done) => {
  exec('artillery run artillery.yml', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      done(error);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    done();
  });
});
