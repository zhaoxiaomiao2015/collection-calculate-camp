'use strict';
var map_to_three_multiples = function(collections_a){
  var double_collection = [];
  for (var i = 0; i < collections_a.length; i++) {
      double_collection.push(collections_a[i] * 3);
  }
  return double_collection;

};

module.exports = map_to_three_multiples;
