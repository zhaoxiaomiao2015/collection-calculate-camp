'use strict';

function compute_chain_median(collection) {
  var medain;
  var element_array = [];
  element_array = collection.split('->');
  medain = element_array[(element_array.legth + 1)/2];
  return medain;

}

module.exports = compute_chain_median;
