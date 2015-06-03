'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function choose_even(collection) {
  // var evens = [];
  // for (var i = 0; i < collection.length; i++) {
  //   if (collection[i] % 2 ===0) {
  //     evens.push(collection[i]);
  //   }
  // }
  // return evens;

  var result = [];
  result = _.filter_in(collection,function(element){
  return element % 2 === 0;
  });
  return result;
}

module.exports = choose_even;
