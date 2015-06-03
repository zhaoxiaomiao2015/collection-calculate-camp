'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function choose_multiples_of_three(collection) {
  var result = [];
  result = _.filter_in(collection,function(element){
    return element % 3 === 0;
  });
  return result;

  // var evens = [];
  // for (var i = 0; i < collection.length; i++) {
  //   if (collection[i] % 3 ===0) {
  //     evens.push(collection[i]);
  //   }
  // }
  // return evens;
}

module.exports = choose_multiples_of_three;
