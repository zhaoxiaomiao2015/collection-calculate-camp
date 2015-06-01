'use strict';

function get_letter_interval_2(number_a, number_b) {
    var BOUNDARY_NUMBER = 26;
    var reduce = number_b - BOUNDARY_NUMBER;
    var remainder;
    var SECOND_NUMBER;
    var single = [];
    var double_first = [];
    var double_second = [];
    //得到单个字母
    if (number_a < number_b) {
      for (var i = number_a; i <= BOUNDARY_NUMBER; i++) {
          single.push(String.fromCharCode(i + 96));
      }
      //得到两个字母的
      for (var x = 0; x < reduce; x++) {
        remainder =(reduce + x ) % BOUNDARY_NUMBER;
        double_second.push(String.fromCharCode(remainder + 96));
        
      }

    }
    //合并为一个数组
}

module.exports = get_letter_interval_2;
