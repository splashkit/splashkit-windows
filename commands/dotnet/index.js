const utils = require('../../utils')
const home = process.env.HOME

execute = function (argv, callback) {
  const sklibs = `${home}\\.splashkit\\lib`

  const userArgs = utils.argsToString(argv['original_string'])
  const skCSharpCode = `${home}\\.splashkit\\compilers\\mcs\\SplashKit.cs`
  const skCSharpProgram = `${home}\\.splashkit\\compilers\\dotnet\\Program.cs`

  envVars = process.env
  delete envVars["TMP"]
  delete envVars["TEMP"]
  
  utils.runCommandWithEnv(`dotnet ${userArgs}`, envVars, function (err, data) {
      if (err) {
          callback()
      } else {
          if ( userArgs == "new" ) {
              utils.runCommands(["md lib", `ln -s "${skCSharpCode}" ./lib/SplashKit.cs`, `cp "${skCSharpProgram}" .`], function (err1, data) {
                  if (err1) {
                      callback(null, "I couldn't add in the SplashKit library... -- ${err1}")
                  } else {
                      callback(null, 'dotnet command run successfully')
                  }
              })
          }
          else {
            callback(null, 'dotnet command run successfully')
          }
      }
  })
}

 module.exports = {
  execute : execute
}
