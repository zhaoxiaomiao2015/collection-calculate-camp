'use strict';

function calculate_elements_sum(collection, element) {
  var subscript;
  for (var i = collection.length; i >= 0; i--) {
      if (collection[i] === element) {
          subscript = i;
          break;
      }
  }
return subscript;

}

module.exports = calculate_elements_sum;
