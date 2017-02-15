const utils = require('../../utils')
const home = process.env.HOME

execute = function (argv, callback) {
  const sklibs = `${home}/.splashkit/lib`

  const userArgs = utils.argsToString(argv['original_string'])
  const skResources = `${home}/.splashkit/commands/resources/Resources`

  utils.runCommand(`cp -r -n "${skResources}" .`, function (err1, data) {
      if (err1) {
          callback(err1)
      } else {
          callback(null, 'Resources folder successfully created 🎉')
      }
  })
}

 module.exports = {
  execute : execute
}
