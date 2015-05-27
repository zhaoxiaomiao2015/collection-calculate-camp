'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var temp = [];
  if (number_a <= number_b) {
    for (var i = number_a; i <= number_b; i++) {
     temp.push(String.fromCharCode(96+i));
    }
  }
  else if (number_a > number_b) {
    for (var j = number_a; j >= number_b; j--) {
      temp.push(String.fromCharCode(96+j));
    }
  }
  return temp;
}

module.exports = get_letter_interval;
