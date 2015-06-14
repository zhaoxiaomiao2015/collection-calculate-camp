var each = require('./each.js');
var reduce = require('./reduce.js');

function min(collection) {
    var result;
    reduce(collection,function (number_a,number_b) {
      return result = number_a < number_b ? number_a : number_b;
    });

    return result;
}

module.exports = min;
