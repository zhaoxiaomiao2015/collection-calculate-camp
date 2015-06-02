'use strict';

function collect_all_even(collection) {
  // //在这里写入代码
  // var array = [];
  // for (var i = 0; i < collection.length; i++) {
  //   if (collection[i] % 2 ===0) {
  //     array.push(collection[i]);
  //   }
  // }
  // return array;
  var filter_in = require('../../my_lodash/filter_in');
  var result = [];
  filter_in(collection,function(item){
    if(item % 2 === 0){
      result.push(item);
    }
  });
  return result;
}

module.exports = collect_all_even;
