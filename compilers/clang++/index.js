const utils = require('../../utils')
const {homedir} = require('os')

execute = function (argv, callback) {
  const cppBuild = `${homedir()}/.splashkit/splashkit-macos/compilers/clang++`
  const sklibs = {
    static: `${homedir()}/.splashkit/splashkit-macos/compilers/clang++/lib`,
    dynamic: `${homedir()}/.splashkit/splashkit-macos/lib`
  }

  const userArgs = utils.argsToString(argv['original_string'])
  const clangArgs = `-L${sklibs.dynamic} -lSplashKit -L${sklibs.static} -lSplashKitCpp -I ${cppBuild}/include -rpath @loader_path -rpath ${sklibs.dynamic} -rpath /usr/local/lib`

  utils.runCommand(`clang++ ${clangArgs} ${userArgs}`, function (err, data) {
      if (err) {
          callback(err)
      } else {
          callback()
      }
  })
}

 module.exports = {
  execute: execute
}
