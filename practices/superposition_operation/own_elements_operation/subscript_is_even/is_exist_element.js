'use strict';
var _ = require('../../../../my_lodash/my_lodash.js');

var is_exist_element = function(collection,element){
  var even = _.filter_in(collection,function(item,i){
    if (i % 2 === 0) {
      return item;
    }
  });
  var result = _.each(even, function(items,i){
    if (items === 3) {
      return true;
    }
    if (items !== 3) {
      return false;
    }
  });
  return even;
};
module.exports = is_exist_element;
