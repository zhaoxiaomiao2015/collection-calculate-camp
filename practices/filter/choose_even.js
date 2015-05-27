'use strict';

function choose_even(collection) {
  var evens = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 ===0) {
      evens.push(collection[i]);
    }
  }
  return evens;
}

module.exports = choose_even;
