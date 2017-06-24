const utils = require('../../utils')
const home = process.env.HOME

execute = function (argv, callback) {
  const sklibs = `"${home}\\.splashkit\\lib"`
  const skPythonLibrary = `${home}\\.splashkit\\commands\\python3`

  const userArgs = utils.argsToString(argv['original_string'])

  envVars = process.env
  envVars["PATH"] = `${home}\\.splashkit\\lib;${home}\\.splashkit\\lib\\win64;${home}\\.splashkit\\lib\\win32;${envVars["PATH"]}`
  envVars["PYTHONPATH"] = `${skPythonLibrary}`
  utils.runCommandWithEnv(`python3 ${userArgs}`, envVars, function (err, data) {
    if (err) {
      callback(err)
    } else {
      callback(null, 'Successfully compiled with python3 🎉')
    }
  })
}

module.exports = {
  execute: execute
}