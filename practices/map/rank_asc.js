'use strict';
var _ = require('../my_lodash/my_lodash.js');

var rank_asc = function(collection){
  var _sort = _.up_sort(collection);
  var length = result_sort.length;
  var result = [];
  for (;length--;) {
    result[result.length] = result_sort[length];
  }
  return result;

    // var element = [];
    // for (var i = 0; i < collection.length; i++) {
    //   if (collection[i] < collection[ i + 1 ]) {
    //     element.push(collection[ i + 1 ]);
    //   }
    //   else {
    //     element.push(collection[i]);
    //   }
    // }
    // return element;
}

module.exports = rank_asc;
