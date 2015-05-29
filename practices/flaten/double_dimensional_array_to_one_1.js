'use strict';

function double_to_one(collection) {
    var result = [];
    var temp_string;
    var temp_string = collection.join(",").split(",");
    for (var i = 0; i < temp_string.length; i++) {
      result.push(Number(temp_string[i]));
    }
    return result;
}

module.exports = double_to_one;
