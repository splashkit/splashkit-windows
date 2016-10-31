const utils = require('../../utils')
const {homedir} = require('os')

const home = process.env.HOME

execute = function (argv, callback) {
  const cppBuild = `${home}/.splashkit/compilers/clang++/include`
  const includeFolder = `${home}/.splashkit/include`
  const sklibs = {
    static: `${home}/.splashkit/compilers/clang++/lib`,
    dynamic: `${home}/.splashkit/lib`
  }

  let flags

  if (process.env.MSYSTEM == 'MINGW32') {
    flags = "-static-libstdc++ -static-libgcc -lSplashKitCPP-win32 -llibSplashKit-win32 -Wl,-Bstatic -lstdc++ -lpthread"

    var fs = require('fs');
    fs.createReadStream(`${home}/.splashkit/lib/win32/libfreetype-6.dll`).pipe(fs.createWriteStream('libfreetype-6.dll'));
  } else if (process.env.MSYSTEM == 'MINGW64') {
    flags = "-static-libstdc++ -static-libgcc -lSplashKitCPP-win64 -llibSplashKit-win64 -Wl,-Bstatic -lstdc++ -lpthread"
  } else {
    console.log("Can''t determine envioronment.")
  }

  const userArgs = utils.argsToString(argv['original_string'])
  const clangArgs = `-I ${includeFolder} -I ${cppBuild} -L ${sklibs.dynamic} -L ${sklibs.static}`

  utils.runCommand(`clang++ ${clangArgs} ${userArgs} ${flags}`, function (err, data) {
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
