const utils = require('../../utils')
const {homedir} = require('os')

execute = function (argv, callback) {
  const cppBuild = `${homedir()}/.splashkit/splashkit-windows/compilers/g++`
  const sklibs = {
    static: `${homedir()}/.splashkit/splashkit-windows/compilers/g++/lib`,
    dynamic: `${homedir()}/.splashkit/splashkit-windows/lib`
  }

  const userArgs = utils.argsToString(argv['original_string'])
//   const clangArgs = `-L${sklibs.dynamic} -lSplashKit -L${sklibs.static} -lSplashKitCpp -I ${cppBuild}/include -rpath @loader_path -rpath ${sklibs.dynamic} -rpath /usr/local/lib`
  const clangArgs = `-I ${cppBuild} -I ${`${cppBuild}/include`} -L ${sklib.dynamic} -L ${sklibs.static}  -static-libstdc++ -static-libgcc -lSplashKitCPP-win32 -llibSplashKit-win32 -Wl,-Bstatic -lstdc++ -lpthread`

  utils.runCommand(`g++ ${clangArgs} ${userArgs}`, function (err, data) {
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

// g++ -I {include} -I {clang++/include} -L {lib} -L {g++/lib}  -static-libstdc++ -static-libgcc cave_escape_1.cpp -lSplashKitCPP-win32 -llibSplashKit-win32 -Wl,-Bstatic -lstdc++ -lpthread
// g++ -I {include} -I {clang++/include} -L {lib} -L {g++/lib}  -static-libstdc++ -static-libgcc cave_escape_1.cpp -lSplashKitCPP-win32 -llibSplashKit-win32 -Wl,-Bstatic -lstdc++ -lpthread