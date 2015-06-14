'use strict';
var _ = require('../../my_lodash/my_lodash.js');

var map_to_three_multiples = function(collections_a){
  var result = [];
  result = _.map(collections_a,function(element){
    return element * 3;
  });
  return result;
};

module.exports = map_to_three_multiples;
