'use strict';
function double(element){
  var  result = 3 * element;
  return result;
}
var map_to_three_multiples = function(collections){
  var _ = require('../lodash/array');
  return _.map(collection, double);
};

module.exports = map_to_three_multiples;
