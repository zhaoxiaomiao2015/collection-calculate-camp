'use strict';
function double(element){
  var  result = element * 2;
  return result;
}
function map_to_even(collection){
  var _ = require('../lodash/array');
  return _.map(collection, double);
}
module.exports = map_to_even;
