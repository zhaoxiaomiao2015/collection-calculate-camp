'use strict';
var _ = require('../../my_lodash/my_lodash.js');
function calculate_elements_sum(collection, element) {
  var result = [];
  _.each(collection, function(val, i){
    if (val === element) {
      result.push(i);
    }
  });
  return result[0];
}

module.exports = calculate_elements_sum;
