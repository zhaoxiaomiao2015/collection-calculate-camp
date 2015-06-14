'use strict';
var _ = require('../../../my_lodash/my_lodash.js');

function amount_even(collection) {
  var sum = 0;
  _.each(collection, function(val, i){
    if (val % 2 === 0) {
      sum += val;
    }
  });
  return sum;
}

module.exports = amount_even;
