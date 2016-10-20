const {execSync} = require('child_process')

const argsToString = function(args) {
  return args.join(" ")
}

const runCommand = function (cmd, callback){
  let errMsg
  try {
    execSync(cmd, {stdio:[0,1,2]})
  }
  catch (ex) {
    errMsg = ex.message
  }
  finally {
      callback(errMsg)
  }
}

module.exports = {
  runCommand: runCommand,
  argsToString: argsToString
}