'use strict';

function choose_even(collection) {
  // var evens = [];
  // for (var i = 0; i < collection.length; i++) {
  //   if (collection[i] % 2 ===0) {
  //     evens.push(collection[i]);
  //   }
  // }
  // return evens;


  var filter = require('../../my_lodash/filter.js');
  var each = require('../../my_lodash/each.js');
  var result = [];
  result = filter(collection,function(element){
    if(element % 2 === 0){
       return true;
    }else {
      return false;
    }
  });
  return result;
}

module.exports = choose_even;
