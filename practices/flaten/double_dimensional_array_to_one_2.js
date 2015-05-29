'use strict';

function double_to_one(collection) {
    var result = [];
    var temp_array = [];
    var temp_string;
    var temp_string = collection.join(",").split(",");
    for (var i = 0; i < temp_string.length; i++) {
      temp_array.push(Number(temp_string[i]));
    }
    return repeat(temp_array);
}

function repeat(temp_array){
    var new_result = [];
    for (var i = 0; i < temp_array.length; i++) {
        var flag = false;
        for (var x = 0; x < new_result.length; x++) {
            if (temp_array[i] === new_result[x]) {
                flag = true;
                break;
            }
        }
        if (!flag) {
            new_result.push(temp_array[i]);
        }
    }
    return new_result;
}

module.exports = double_to_one;
