var isFunction = require('is-function');


module.exports = function(object, property) {
    if (object == null) return;
    var value = object[property];
    return isFunction(value) ? value.call(object) : value;
};
