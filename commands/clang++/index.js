const utils = require('../../utils')

const home = process.env.HOME

execute = function (argv, callback) {
  const cppBuild = `"${home}/.splashkit/commands/clang++/include"`
  const includeFolder = `"${home}/.splashkit/include"`
  const sklibs = {
    static: `"${home}/.splashkit/commands/clang++/lib"`,
    dynamic: `"${home}/.splashkit/lib"`
  }

  let flags

  if (process.env.MSYSTEM == 'MINGW32') {
    flags = `-L"${home}/.splashkit/lib/win32" -static-libstdc++ -static-libgcc -lSplashKitCPP-win32 -lSplashKit -Wl,-Bstatic -lstdc++ -lpthread`

    var fs = require('fs');
    fs.createReadStream(`"${home}"/.splashkit/lib/win32/libfreetype-6.dll`).pipe(fs.createWriteStream('libfreetype-6.dll'));
  } else if (process.env.MSYSTEM == 'MINGW64') {
    flags = `-L"${home}/.splashkit/lib/win64" -static-libstdc++ -static-libgcc -lSplashKitCPP-win64 -lSplashKit -Wl,-Bstatic -lstdc++ -lpthread`
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
