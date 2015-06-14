var each = require('./each.js');

function map(collection,func) {
    var result = [];
    each(collection,function (element) {
        result[result.length] = func(element);
    });
    return result;
}

module.exports = map;
