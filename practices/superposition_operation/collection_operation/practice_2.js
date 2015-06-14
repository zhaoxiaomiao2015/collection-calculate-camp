'use strict';

var _ = require('../../../my_lodash/my_lodash.js');
function hybrid_operation_to_uneven(collection) {
  var result = [];
  _.each(collection, function(val, i){
    if (val % 2 !==0) {
      result.push((val * 3) + 2);
    }
  });
  return result;
}

module.exports = hybrid_operation_to_uneven;
