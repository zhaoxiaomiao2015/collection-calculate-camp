'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function grouping_count(collection) {
  var result = {};


    var temp = {};
    _.each(collection, function (element) {
        temp[element] = temp[element]||0;
        temp[element] ++ ;
    });

    return temp;
  //  for (var i = 0; i < collection.length; i++) {
  //   var count = 0;
  //   if (!result[collection[i]]) {
  //     result[collection[i]] = 0;
  //   }
  //   if (result[collection[i]]) {
  //     count = result[collection[i]];
  //   }
  //     result[collection[i]] = count + 1;
  // }
  // return result;
}

module.exports = grouping_count;
