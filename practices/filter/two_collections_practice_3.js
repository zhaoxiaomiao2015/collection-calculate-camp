'use strict';

function choose_divisible_integer(collection_a, collection_b) {
    var temp = [];
    for (var i = 0; i < collection_a.length; i++) {
        for (var x = 0; x < collection_b.length; x++) {
            var one = collection_a[i];
            var two = collection_b[x];
            if (one % two === 0) {
                temp.push(one);
                break;
            }
        }
    }
    return temp;
}

module.exports = choose_divisible_integer;
