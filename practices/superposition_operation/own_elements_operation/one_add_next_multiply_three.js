'use strict';
var _ = require('../../../my_lodash/my_lodash.js');

function one_add_next_multiply_three(collection){
  var result = [];
  _.each(collection,function(elemet,i){
    if (i !== collection.length - 1) {
      var temp = elemet;
      result.push((temp + collection[i+1]) * 3);
    }
  });
  return result;
}
module.exports = one_add_next_multiply_three;
