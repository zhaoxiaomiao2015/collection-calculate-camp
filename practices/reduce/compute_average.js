'use strict';
var _ = require('../my_lodash/my_lodash.js');

function compute_average(collection) {
  var sum = _.sum(collection);
  return sum / collection.length;

    // var sum = 0;
    // for (var i = 0; i < collection.length; i++) {
    //     sum += collection[i];
    // }
    // var average = sum/collection.length;
    // return average;
}

module.exports = compute_average;
