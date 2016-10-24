# generate-help [![Circle CI](https://circleci.com/gh/vdemedes/generate-help.svg?style=svg)](https://circleci.com/gh/vdemedes/generate-help)

Build a help output for CLI programs.


### Installation

```
$ npm install generate-help --save
```


### Usage

**Note**: `options` are compatible with [minimist-options](https://npmjs.org/package/minimist-options).

```js
const help = require('generate-help');

let output = help({
  usage: 'hello [options] <command>',
  desc: 'Very cool description',
  options: {
    help: {
      alias: 'h',
      desc: 'Display help'
    },

    force: {
      aliases: ['f'],
      desc: 'Force something'
    }
  },
  commands: [{
    name: 'hi',
    desc: 'Say hi'
  }, {
    name: 'yo',
    desc: 'Say yo'
  }]
});

process.stdout.write(output);
```

![](https://github.com/vdemedes/generate-help/raw/master/media/screenshot.png)


### Tests

[![Circle CI](https://circleci.com/gh/vdemedes/generate-help.svg?style=svg)](https://circleci.com/gh/vdemedes/generate-help)

```
$ make test
```


### License

MIT © [Vadym Demedes](http://vadimdemedes.com)
