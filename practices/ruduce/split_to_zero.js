'use strict';

function collect_max_number(number_a,number_b) {
  //在这里写入代码
  var result = [];
  for (var i = 0; i < number_a.length; i++) {
    if (number_a % 0.2 === 0) {
      result.push( number_a);
      for (var j = number_a; j >= 0; j = j - number_b) {
        result.push(number_a - j);
      }
    }else {
      if (number_a - number_b > 0) {

      }
    }
  }
  return result;
}

module.exports = collect_max_number;
