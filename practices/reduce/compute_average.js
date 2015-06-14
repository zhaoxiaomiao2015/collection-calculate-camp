'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function compute_average(collection) {
  return _.average(collection);
}
module.exports = compute_average;
