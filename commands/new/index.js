const utils = require('..\\..\\utils')
const home = process.env.HOME

execute = function (argv, callback) {
  const sklibs = `${home}\\.splashkit\\lib`

  const userArgs = utils.argsToString(argv['original_string'])
  const skLanguageResources = {
      "c++": {
          "files": `${home}\\.splashkit\\commands\\new\\c++\\`,
          "proc": function ( ) {
            
            utils.runCommand(`cp -r -n "${home}\\.splashkit\\commands\\new\\c++\\program.cpp" .`, function (err1, data) {
                if (err1) {
                    callback(err1)
                    return
                }
            })

            utils.runCommand(`cp -r -n "${home}\\.splashkit\\commands\\new\\c++\\.vscode" .`, function (err1, data) {
                if (err1) {
                    callback(err1)
                    return
                }
            })

            utils.runCommands(["if not exist include md include", `ln -f -s "${home}\\.splashkit\\commands\\clang++\\include" ./include/splashkit`], function (err1, data) {
                    if (err1) {
                        callback(`Failed to link in splashkit header files ${err1}`)
                        return
                    }
                })
          }
      }
  }

  const userLang = argv["_"][1]

  if ( userLang in skLanguageResources )
  {
    skLanguageResources[userLang]["proc"]()

    callback(null, `Successfully created a new ${userLang} project! 🎉`)
  }
  else
  {
      callback(`SKM does not have a project template for the ${userLang} programming language`)
  }
}

 module.exports = {
  execute : execute
}
