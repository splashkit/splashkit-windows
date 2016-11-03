const utils = require('../../utils')
const {homedir} = require('os')

const home = process.env.HOME

execute = function (argv, callback) {
  const cppBuild = `${home}/.splashkit/commands/g++/include`
  const includeFolder = `${home}/.splashkit/include`
  const sklibs = {
    static: `${home}/.splashkit/commands/g++/lib`,
    dynamic: `${home}/.splashkit/lib`
  }

  let flags

  // Set the compiler flags based on the architecture
  if (process.env.MSYSTEM == 'MINGW32') {
    flags = "-static-libstdc++ -static-libgcc -lSplashKitCPP-win32 -llibSplashKit-win32 -Wl,-Bstatic -lstdc++ -lpthread"
  } else if (process.env.MSYSTEM == 'MINGW64') {
    flags = "-static-libstdc++ -static-libgcc -lSplashKitCPP-win64 -llibSplashKit-win64 -Wl,-Bstatic -lstdc++ -lpthread"
  } else {
    console.log("Can''t determine envioronment. Make sure you run in the mingw32 or mingw64 terminal.")
    callback()
    return
  }

  const userArgs = utils.argsToString(argv['original_string'])
  const clangArgs = `-I ${includeFolder} -I ${cppBuild} -L ${sklibs.dynamic} -L ${sklibs.static}`

  utils.runCommand(`g++ ${clangArgs} ${userArgs} ${flags}`, function (err, data) {
    if (err) {
      callback(err)
    } else {
      // For 32bit mingw... we need to copy the libfreetype-6.dll (until we rebuild it and SDL2_ttf)
      if (process.env.MSYSTEM == 'MINGW32') {
        var fs = require('fs');
        stream = fs.createReadStream(`${home}/.splashkit/lib/win32/libfreetype-6.dll`).pipe(fs.createWriteStream('libfreetype-6.dll'));
        stream.on('finish', function () { callback() });
      } else {
        callback()
      }
    }
  })
}

 module.exports = {
  execute: execute
}
