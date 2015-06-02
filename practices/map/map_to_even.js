'use strict';

function map_to_even(collection){
    // var double_collection = [];
    // for (var i = 0; i < collection.length; i++) {
    //     double_collection.push(collection[i] * 2);
    // }
    // return double_collection;

    var map = require('../../my_lodash/map.js');
    var result = [];
    result = map(collection,function (items){
      return items * 2;
    });
    return result;
}
module.exports = map_to_even;
