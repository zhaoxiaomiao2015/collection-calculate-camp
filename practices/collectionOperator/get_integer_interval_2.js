'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var _ = require('../lodash/array');
  var collection_c = [];
   collection_c = _.intersection(number_b,number_a);
  return collection_c;
}

module.exports = get_integer_interval_2;
