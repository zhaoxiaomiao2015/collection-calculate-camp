'use strict';
var _ = require('../../../my_lodash/my_lodash.js');
function hybrid_operation(collection) {
  var result = [];
  _.each(collection, function(val, i){
    result.push((val * 3) + 2);
  });
  return _.sum(result);
}

module.exports = hybrid_operation;
