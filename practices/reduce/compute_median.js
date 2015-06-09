'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function compute_median(collection) {
  //在这里写入代码
  var result = _.array_median(collection);
  return result;
}

module.exports = compute_median;
