'use strict';
var _ = require('../my_lodash/my_lodash.js');

function collect_min_number(collection) {
    // var result = collection[0];
    // for (var i = 0; i < collection.length; i++) {
    //   if (collection[i] < result) {
    //       result = collection[i];
    //   }
    // }
    // return result;
    return _.min(collection);

}

module.exports = collect_min_number;
