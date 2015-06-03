'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function choose_divisible_integer(collection_a, collection_b) {
  var result = [];
    _.filter_in(collection_a,function (number_a) {
        _.each(collection_b,function (number_b) {
            if (number_a % number_b === 0) {
                result[result.length] = number_a;
            }
        });
    });

    return result;

    // var result = [];
    // for (var i = 0; i < collection_a.length; i++) {
    //     for (var x = 0; x < collection_b.length; x++) {
    //         if (collection_a % collection_b === 0) {
    //             result.push(collection_a);
    //             break;
    //         }
    //     }
    // }
    // return result;
}

module.exports = choose_divisible_integer;
