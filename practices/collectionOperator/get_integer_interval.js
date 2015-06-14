'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function get_integer_interval(number_a, number_b) {
  return dispose(number_a,number_b);
}

function dispose(number_a,number_b){
  var temp = [];
  if (number_a <= number_b) {
    for (var i = number_a; i <= number_b; i++) {
     temp.push(i);
    }
  }
  else if (number_a > number_b) {
    for (var j = number_a; j >= number_b; j--) {
      temp.push(j);
    }
  }
  return temp;
}


module.exports = get_integer_interval;
