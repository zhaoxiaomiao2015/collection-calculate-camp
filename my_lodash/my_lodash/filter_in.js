var each = require('./each.js');

function filter_in(collection,func) {
    var result = [];
    each(collection,function (items,i) {
        if (func(items)) {
            result[result.length] = items;
        }
    });
    return result;
}

module.exports = filter_in;
