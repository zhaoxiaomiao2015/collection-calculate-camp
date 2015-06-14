var each = require('./each.js');
var reduce = require('./reduce.js');

function max(collection) {
    var result;
    reduce(collection,function (number_a,number_b) {
      result = number_a > number_b ? number_a : number_b;
    });

    return result;
}

module.exports = max;
