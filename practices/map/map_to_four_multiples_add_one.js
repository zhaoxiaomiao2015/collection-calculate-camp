'use strict';
var _ = require('../../my_lodash/my_lodash.js');

var map_to_four_multiples_add_one = function(collection){
  var result = [];
  result = _.map(collection,function(element){
    return element * 4 + 1;
  });
  return result;
};

module.exports = map_to_four_multiples_add_one;
