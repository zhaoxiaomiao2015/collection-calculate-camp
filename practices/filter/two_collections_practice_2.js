'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function choose_no_common_elements(collection_a, collection_b) {
  var result = [];
  _.each(collection_a, function(val, i){
    if(!_.exist(collection_b, val)){
      result.push(val);
    }
  });
  return result;

  }

module.exports = choose_no_common_elements;
