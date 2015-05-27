'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var _ = require('../lodash/array');
  return dispose(number_a,number_b);
}

function dispose(number_a,number_b){
  var temp = [];
  if (number_a <= number_b) {
    //根据给出的两个数字得到自增的偶数区间
    for (var i = number_a; i <= number_b; i++) {
     temp.push(i);
    }
  }
  else if (number_a > number_b) {
    //根据给出的两个数字得到自减的偶数区间
    for (var j = number_a; j >= number_b; j--) {
      temp.push(j);
    }
  }
  return temp;
}


module.exports = get_integer_interval;
