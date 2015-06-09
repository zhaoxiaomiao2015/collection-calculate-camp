'use strict';
var _ = require('../../../../my_lodash/my_lodash.js');

var even_group_calculate_average = function(collection){
  var even = _.filter_in(collection,function(element,i){
    return  element % 2 === 0;
  });
  var result = [];
  var temp = {};
  _.each(even,function(element,i){
    var element_length = (element + '').length;
    temp[element_length] = temp[element_length] || [];
    temp[element_length].push(element);
  });
  result = _.median(temp);
  return result.length === 0 ? 0 : result;
};
module.exports = even_group_calculate_average;
