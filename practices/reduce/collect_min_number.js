'use strict';

function collect_min_number(collection) {
    var result = collection[0];
    for (var i = 0; i < collection.length; i++) {
      if (collection[i] < result) {
          result = collection[i];
      }
    }
    return result;
}

module.exports = collect_min_number;
