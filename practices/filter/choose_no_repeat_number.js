'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function choose_no_repeat_elementber(collection) {
  var result = [];
   _.each(collection,function (element) {
       if (!_.exist(result,element)) {
         result[result.length] = element;
       }
   });
  return result;
  // var temp = [];
  // for (var i = 0; i < collection.length; i++) {
  //   var flag = false;
  //   for (var x = 0; x < temp.length; x++) {
  //     if (temp[x] === collection[i]) {
  //       flag = true;
  //     }
  //   }
  //   if (!flag) {
  //     temp.push(collection[i]);
  //     }
  //   }
  //     return temp;
  }

module.exports = choose_no_repeat_elementber;
