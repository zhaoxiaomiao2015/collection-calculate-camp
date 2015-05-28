'use strict';

var map_to_four_multiples_add_one = function(collection){
  var double_collection = [];
  for (var i = 0; i < collection.length; i++) {
      double_collection.push(collection[i] * 4 + 1);
  }
  return double_collection;

};

module.exports = map_to_four_multiples_add_one;
