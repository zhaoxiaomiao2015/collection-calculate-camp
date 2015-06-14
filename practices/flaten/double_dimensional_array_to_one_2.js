'use strict';

var _ = require('../../my_lodash/my_lodash.js');
function double_to_one(collection) {
    var result = [];
    var temp_array = [];
    var temp_string = collection.join(",").split(",");
    for (var i = 0; i < temp_string.length; i++) {
      temp_array.push(Number(temp_string[i]));
    }
    return _.repeat(temp_array);
}

module.exports = double_to_one;
