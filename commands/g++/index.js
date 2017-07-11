const utils = require('../../utils')
const {homedir} = require('os')

const home = process.env.HOME //.replace(/^(.*):\\/, '/$1/').replace(/\\/, '/').replace(/\\/, '/').replace(/C/, 'c')


execute = function (argv, callback) {
  const cppBuild = `"${home}\\.splashkit\\commands\\g++\\include"`
  const includeFolder = `"${home}\\.splashkit\\include"`
  const sklibs = {
    static: `"${home}\\.splashkit\\commands\\g++\\lib"`,
    dynamic: `"${home}\\.splashkit\\lib"`
  }

  let flags

  // Set the compiler flags based on the architecture
  if (process.env.MSYSTEM == 'MINGW32') {
    flags = `-g -std=c++14 -L${home}\\.splashkit\\lib\\win32 -static-libstdc++ -static-libgcc -lSplashKit -Wl,-Bstatic -lstdc++ -lpthread`
  } else if (process.env.MSYSTEM == 'MINGW64') {
    flags = `-g -std=c++14 -L${home}\\.splashkit\\lib\\win64 -static-libstdc++ -static-libgcc -lSplashKit -Wl,-Bstatic -lstdc++ -lpthread`
  } else {
    console.log("Can''t determine envioronment. Make sure you run in the mingw32 or mingw64 terminal.")
    callback()
    return
  }

  const userArgs = utils.argsToString(argv['original_string'])
  const gArgs = `-I ${includeFolder} -I ${cppBuild} -L ${sklibs.dynamic} -L ${sklibs.static} "${home}"/.splashkit/commands/clang++/src/*.cpp`

  utils.runCommand(`g++ ${gArgs} ${userArgs} ${flags}`, function (err, data) {
    if (err) {
      callback(err)
    } else {
      // For 32bit mingw... we need to copy the libfreetype-6.dll (until we rebuild it and SDL2_ttf)
      if (process.env.MSYSTEM == 'MINGW32') {
        var fs = require('fs');
        stream = fs.createReadStream(`${home}\\.splashkit\\lib\\win32\\libfreetype-6.dll`).pipe(fs.createWriteStream('libfreetype-6.dll'));
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
