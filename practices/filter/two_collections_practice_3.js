'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function choose_divisible_integer(collection_a, collection_b) {
  var result = [];
    _.filter(collection_a,function (number_a) {
        _.each(collection_b,function (number_b) {
            if (number_a % number_b === 0) {
                result[result.length] = number_a;
            }
        });
    });
    return result;
}

module.exports = choose_divisible_integer;
