'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var _ = require('../lodash/array');

  return dispose(number_a,number_b);
}

function dispose(number_a,number_b){
  var temp = [];
  if (number_a <= number_b) {
    for (var i = number_a; i <= number_b; i++) {
      temp = judge(i,temp);
    }
  }
  else if (number_a > number_b) {
    for (var j = number_a; j >= number_b; j--) {
      temp = judge(j,temp);
    }
  }
  return temp;
}

function judge(i,temp){
  if( i % 2 ===0){
    temp.push(i);
  }
  return temp;
}


module.exports = get_integer_interval_2;
