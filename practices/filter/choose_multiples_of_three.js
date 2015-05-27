'use strict';

function choose_multiples_of_three(collection) {
  var evens = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 3 ===0) {
      evens.push(collection[i]);
    }
  }
  return evens;
}

module.exports = choose_multiples_of_three;
