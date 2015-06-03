'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function choose_no_common_elements(collection_a, collection_b) {
  var result = [];
  _.each(collection_a,function (letter) {
      if (!_.exist(collection_b,letter)) {
          result[result.length] = letter;
      }
  });
  return result;

  // var result = [];
  // var connected = collection_a.concat(collection_b);
  // var temp = {};
  //   for (var i = 0; i < connected.length; i++) {
  //     (connected[i] in temp) ? temp[connected[i]] ++ : temp[connected[i]] = 1;
  //   }
  //   for (var x in temp) {
  //     if (temp[x] === 1) {
  //       result.push(x);
  //     }
  //   }
  //   return result;
  }

module.exports = choose_no_common_elements;
