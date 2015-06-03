'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function collect_all_even(collection) {
  var result = [];
  _.filter_in(collection,function(item){
    if(item % 2 === 0){
      result.push(item);
    }
  });
  return result;
  
  // //在这里写入代码
  // var array = [];
  // for (var i = 0; i < collection.length; i++) {
  //   if (collection[i] % 2 ===0) {
  //     array.push(collection[i]);
  //   }
  // }
  // return array;
}

module.exports = collect_all_even;
