'use strict';
var _ = require('../../../../my_lodash/my_lodash.js');

var calculate_median = function(collection){
  var result;
  var temp1 = _.array_sort_positive(collection);
  if (temp1.length % 2 === 0) {
    var number_a = temp1[(temp1.length) / 2 - 1];
    var number_b = temp1[(temp1.length) / 2];
    var pos1 = (number_a + number_b) / 2;
    result =pos1;
  }else {
    var pos2 =temp1[Math.ceil((temp1.length) / 2) - 1];
    result = pos2;
  }
  return result;
};
module.exports = calculate_median;
