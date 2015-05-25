'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var _ = require('../lodash/array');
  var temp = [];
  for (var number_c = number_a; number_c >= number_a && number_c <= number; number_c ++) {
      temp.push(number_c);
  }
  var evens = _.remove(temp, function(n) {
    return n % 2 == '0';
    });
    return evens;

    var temp1 = [];
    for (var number_c = number_b; number_c >= number_a && number_c <= number; number_c --) {
        temp1.push(number_c);
    }
    var evens1 = _.remove(temp1, function(n) {
      return n % 2 == '0';
      });
      return evens;

      var temp2 = [];
      for (var number_c = number_a; number_c >= number_a && number_c <= number; number_c ++) {
          temp1.push(number_c);
      }
      var evens2 = _.remove(temp1, function(n) {
        return n % 2 == '0';
        });
        return evens2;

        var temp3 = [];
        for (var number_c = number_a; number_c >= number_a && number_c <= number; number_c ++) {
            temp1.push(number_c);
        }
        var evens3 = _.remove(temp1, function(n) {
          return n % 2 == '0';
          });
          return evens3;


}

module.exports = get_integer_interval;
