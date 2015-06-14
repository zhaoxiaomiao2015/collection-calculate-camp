'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function rank_asc(array){
  var result = _.my_sort(array, function(a, b){
    return a < b;
  });
  return result;
}

module.exports = rank_asc;
