'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function map_to_even(collection){
    // var double_collection = [];
    // for (var i = 0; i < collection.length; i++) {
    //     double_collection.push(collection[i] * 2);
    // }
    // return double_collection;

    var result = [];
    result = _.map(collection,function (items){
      return items * 2;
    });
    return result;
}
module.exports = map_to_even;
