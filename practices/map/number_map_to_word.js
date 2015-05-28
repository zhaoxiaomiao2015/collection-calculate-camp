'use strict';
var number_map_to_word = function(collection){
    var collection_b = [];
    for (var i = 0; i < collection.length; i++) {
      collection_b.push(String.fromCharCode(collection[i] + 96));
    }
    return collection_b;
};

module.exports = number_map_to_word;
