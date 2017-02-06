const utils = require('../../utils')
const home = process.env.HOME

execute = function (argv, callback) {
  const sklibs = `${home}/.splashkit/lib`
  const skCSharpCode = `${home}\\.splashkit\\commands\\mcs\\SplashKit.cs`

  const userArgs = utils.argsToString(argv['original_string'])
  const mcsArgs = `"${skCSharpCode}"`

  utils.runCommand(`mcs ${userArgs} ${mcsArgs}`, function (err, data) {
      if (err) {
          callback(err)
      } else {
          callback(null, '🎉  Successfully compiled with mcs 🎉')
      }
  })
}

 module.exports = {
  execute : execute
}
