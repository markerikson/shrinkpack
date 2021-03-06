// 3rd party modules
var exec = require('child_process').exec;
var guard = require('when/guard');

// public
module.exports = guard(guard.n(10), shell);

// implementation
function shell (command) {
  return new Promise(function (resolve, reject) {
    exec(command, function onExec (err, stdout) {
      if (err) {
        reject(err);
      } else {
        resolve(String(stdout).trim());
      }
    });
  });
}
