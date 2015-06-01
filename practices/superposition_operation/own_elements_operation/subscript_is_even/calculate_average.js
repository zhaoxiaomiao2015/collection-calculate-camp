'use strict';
var calculate_average = function(collection){
  var sum = 0;
  var even = 0;
  for (var i = 0; i < collection.length; i++) {
    sum += collection[i];
  }
  even = sum /collection.length-1;
  return Math.ceil(even);

};
module.exports = calculate_average;
