'use strict';
var _ = require('../../my_lodash/my_lodash.js');

var map_to_four_multiples_add_one = function(collection){
  var result = [];
  result = _.map(collection,function(element){
    return element * 4 + 1;
  });
  return result;
  // var double_collection = [];
  // for (var i = 0; i < collection.length; i++) {
  //     double_collection.push(collection[i] * 4 + 1);
  // }
  // return double_collection;

};

module.exports = map_to_four_multiples_add_one;
