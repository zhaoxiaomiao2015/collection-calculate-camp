'use strict';


var rank_asc = function(collection){
    var element = [];
    for (var i = 0; i < collection.length; i++) {
      if (collection[i] < collection[ i + 1 ]) {
        element.push(collection[ i + 1 ]);
      }
      else {
        element.push(collection[i]);
      }
    }
    return element;
}

module.exports = rank_asc;
