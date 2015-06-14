'use strict';

var _ = require('../../my_lodash/my_lodash.js');
var rank_desc = function(collection){
  var result = _.my_sort(collection, function(a, b){
    return a > b;
  });
  return result;
};

module.exports = rank_desc;
