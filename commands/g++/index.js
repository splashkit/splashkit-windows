const utils = require('../../utils')
const {homedir} = require('os')

const home = process.env.HOME.replace(/^(.*):\\/, '/$1/').replace(/\\/, '/').replace(/\\/, '/').replace(/C/, 'c')


execute = function (argv, callback) {
  const cppBuild = `${home}/.splashkit/commands/g++/include`
  const includeFolder = `${home}/.splashkit/include`
  const sklibs = {
    static: `${home}/.splashkit/commands/g++/lib`,
    dynamic: `${home}/.splashkit/lib`
  }

  let flags

  if (process.env.MSYSTEM == 'MINGW32') {
    flags = `-L${home}/.splashkit/lib/win32 -static-libstdc++ -static-libgcc -lSplashKitCPP-win32 -lSplashKit -Wl,-Bstatic -lstdc++ -lpthread`

    var fs = require('fs');
    fs.createReadStream(`${process.env.HOME}\\.splashkit\\lib\\win32\\libfreetype-6.dll`).pipe(fs.createWriteStream('libfreetype-6.dll'));
  } else if (process.env.MSYSTEM == 'MINGW64') {
    flags = `-L${home}/.splashkit/lib/win64 -static-libstdc++ -static-libgcc -lSplashKitCPP-win64 -lSplashKit -Wl,-Bstatic -lstdc++ -lpthread`
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
