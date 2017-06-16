const utils = require('../../utils')
const home = process.env.HOME

execute = function (argv, callback) {
  const sklibs = `${home}/.splashkit/lib`

  const userArgs = utils.argsToString(argv['original_string'])
  const skLanguageResources = {
      "c++": {
          "files": `${home}/.splashkit/commands/new/c++`,
          "proc": function ( ) {
            utils.runCommand(`ln -f -s "${home}/.splashkit/commands/clang++/include" ./include/splashkit`, function (err1, data) {
                    if (err1) {
                        callback(`Failed to link in splashkit header files ${err1}`)
                    }
                })
          }
      }
  }

  const userLang = argv["_"][1]

  if ( userLang in skLanguageResources )
  {
    utils.runCommand(`cp -r -n "${skLanguageResources[userLang]["files"]}/" .`, function (err1, data) {
        if (err1) {
            callback(err1)
            return
        }
    })

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
