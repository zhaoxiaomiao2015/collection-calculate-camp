'use strict';
var _ = require('../../../my_lodash/my_lodash.js');

function average_uneven(collection) {
  var result = [];
  _.each(collection, function(val, i){
    if (val % 2 !== 0) {
      result.push(val);
    }
  });
  return (_.average(result));
}

module.exports = average_uneven;
