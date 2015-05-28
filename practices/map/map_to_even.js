'use strict';

function map_to_even(collection){
    var double_collection = [];
    for (var i = 0; i < collection.length; i++) {
        double_collection.push(collection[i] * 2);
    }
    return double_collection;
}
module.exports = map_to_even;
