'use strict';
var _ = require('../../../my_lodash/my_lodash.js');

var even_asc_odd_desc = function(collection){
  var even = [];
  var uneven = [];
  var result = [];
  _.each(collection,function(element,i){
    if (element % 2 === 0) {
      even.push(element);
    }else {
      uneven.push(element);
    }
  });
  even = _.array_sort_positive(even);
  uneven =_.array_sort_reverse(uneven);
  result = even.concat(uneven);
  return result;

};
module.exports = even_asc_odd_desc;
