var each = require('./each.js');

function filter_out(collection,func) {
    var result = [];
    each(collection,function (num) {
        if (!func(num)) {
            result[result.length] = num;
        }
    });
    return result;
}

module.exports = filter_out;
