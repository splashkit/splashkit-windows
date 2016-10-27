const utils = require('../../utils')
const {homedir} = require('os')

const home = process.env.HOME

execute = function (argv, callback) {
  const cppBuild = `${home}/.splashkit/splashkit-windows/compilers/g++/include`
  const includeFolder = `${home}/.splashkit/splashkit-windows/include`
  const sklibs = {
    static: `${home}/.splashkit/splashkit-windows/compilers/g++/lib`,
    dynamic: `${home}/.splashkit/splashkit-windows/lib`
  }

  let flags

  if (process.env.MSYSTEM == 'MINGW32') {
    flags = "-static-libstdc++ -static-libgcc -lSplashKitCPP-win32 -llibSplashKit-win32 -Wl,-Bstatic -lstdc++ -lpthread"
  } else if (process.env.MSYSTEM == 'MINGW64') {
    flags = "-static-libstdc++ -static-libgcc -lSplashKitCPP-win64 -llibSplashKit-win64 -Wl,-Bstatic -lstdc++ -lpthread"
  } else {
    console.log("Can''t determine envioronment.")
  }

  const userArgs = utils.argsToString(argv['original_string'])
  const clangArgs = `-I ${includeFolder} -I ${cppBuild} -L ${sklibs.dynamic} -L ${sklibs.static}`

  utils.runCommand(`g++ ${clangArgs} ${userArgs} ${flags}`, function (err, data) {
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
