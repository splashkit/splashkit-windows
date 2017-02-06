const {execSync} = require('child_process')

const argsToString = function(args) {
  return args.join(" ")
}

const runCommandWithEnv = function (cmd, envVars, callback){
  let errMsg
  try {
    execSync(cmd, {stdio:[0,1,2], env:envVars })
  }
  catch (ex) {
    errMsg = ex.message
  }
  finally {
      callback(errMsg)
  }
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

const runCommands = function (cmds, callback){
  let errMsg
  try {
	cmds.forEach(function (cmd){
		execSync(cmd, {stdio:[0,1,2]})
	})
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
  runCommands: runCommands,
  runCommandWithEnv: runCommandWithEnv,
  argsToString: argsToString
}