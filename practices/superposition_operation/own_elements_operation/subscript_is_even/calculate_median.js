'use strict';
var _ = require('../../../../my_lodash/my_lodash.js');

var calculate_median = function(collection){
  return (_.median(collection));
};
module.exports = calculate_median;
