'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function collect_all_even(collection) {
  var result = [];
  _.filter(collection,function(item){
    if(item % 2 === 0){
      result.push(item);
    }
  });
  return result;

}

module.exports = collect_all_even;
