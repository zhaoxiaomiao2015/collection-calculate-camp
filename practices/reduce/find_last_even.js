'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function find_last_even(collection) {
  var result;
  _.each(collection, function(val, i){
    if (val % 2 === 0)  {
      result = val;
    }
  });
  return result;
}

module.exports = find_last_even;
