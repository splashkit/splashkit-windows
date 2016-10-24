'use strict';

/**
 * Dependencies
 */

var objectLength = require('object-length');
var dasherize = require('dashify');
var indent = require('indent-string');
var format = require('util').format;
var result = require('get-result');
var table = require('text-table');
var is = require('is_js');
var os = require('os');

var EOL = os.EOL;

/**
 * Expose generate-help
 */

module.exports = generateHelp;


/**
 * Generate help
 */

function generateHelp (params) {
  var output = '';

  if (params.usage) {
    var usage = result(params, 'usage');

    output += EOL;
    output += format('Usage: %s', usage);
    output += EOL;
  }

  if (params.desc) {
    var desc = result(params, 'desc');

    output += EOL;
    output += desc;
    output += EOL;
  }

  if (is.object(params.options) && objectLength(params.options) > 0) {
    var options = buildOptions(params.options);

    output += EOL;
    output += 'Options:';
    output += EOL;
    output += EOL;
    output += indent(options, ' ', 2);
    output += EOL;
  }

  if (is.array(params.commands) && params.commands.length > 0) {
    var commands = buildCommands(params.commands);

    output += EOL;
    output += 'Commands:';
    output += EOL;
    output += EOL;
    output += indent(commands, ' ', 2);
    output += EOL;
  }

  output += EOL;

  return indent(output, ' ', 2);
}


/**
 * Helpers
 */

/**
 * Output option list
 */

function buildOptions (options) {
  var result = [];

  var keys = Object.keys(options);

  keys.forEach(function (key) {
    var props = options[key];

    // convert short to long form
    if (is.string(props)) {
      props = {
        type: props
      };
    }

    // all names of an option
    // aliases come first
    // full name comes last
    var name = [
      format('--%s', dasherize(key))
    ];

    // accept both string and array
    var aliases = props.alias || props.aliases || [];

    if (is.not.array(aliases)) {
      aliases = [aliases];
    }

    // aliases are prefixed with "-"
    aliases.forEach(function (alias) {
      alias = format('-%s', alias);

      name.unshift(alias);
    });

    result.push([
      name.join(', '),
      props.desc || ''
    ]);
  });

  return table(result);
}


/**
 * Output command list
 */

function buildCommands (commands) {
  var result = [];

  commands.forEach(function (command) {
    result.push([
      command.name,
      command.desc || ''
    ]);
  });

  return table(result);
}
