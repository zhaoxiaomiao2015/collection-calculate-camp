'use strict';

function compute_average(collection) {
  var _ = require('../lodash');
  //在这里写入代码
  var result = _.sum(collection);
  return result/collection.length;
}

module.exports = compute_average;
