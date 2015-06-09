'use strict';
var _ = require('../../../my_lodash/my_lodash.js');


function array_sort(array){
  for (var i = 0; i < array.length -1; i++) {
    for (var j = 0; j < array.length -1 - i; j++) {
      if (array[j] > array[j +1]) {
        var temp;
        temp = array[j +1];
        array[j +1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

function rank_by_two_large_one_small(collection){
  var temp = array_sort(collection);
  for (var i = 0; i < temp.length; i++) {
    if (i % 3 === 2) {
      var median;
      median = temp[i-2];
      temp[i-2] = temp[i-1];
      temp[i-1] = temp[i];
      temp[i] = median;
    }
  }
  return temp;
}
module.exports = rank_by_two_large_one_small;
