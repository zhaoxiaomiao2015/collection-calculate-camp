'use strict';

function double(element){
  var  result = 4 * element + 1;
  return result;
}
var map_to_four_multiples_add_one = function(collection){

  var _ = require('../lodash/array');
  return _.map(collection, double);
};

module.exports = map_to_four_multiples_add_one;
