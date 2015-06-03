'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function choose_common_elements(collection_a, collection_b) {
  var result = [];
  _.each(collection_a,function (letter) {
    if (_.exist(collection_b,letter)) {
      result[result.length] = letter;
      }
  });
  return result;

  // var result = [];
  // for (var i = 0; i < collection_a.length; i++) {
  //   for (var x = 0; x < collection_b.length; x++) {
  //     if (collection_a[i] === collection_b[x]) {
  //       result.push(collection_a[i]);
  //     }
  //   }
  // }
  // return result;
}

module.exports = choose_common_elements;
