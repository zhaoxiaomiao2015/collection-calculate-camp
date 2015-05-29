'use strict';

function compare_collections(collection_a, collection_b) {
    var string_a = collection_a.toString();
    var string_b = collection_b.toString();
    if (string_a === string_b) {
        return true;
    }else {
        return false;
    }
}

module.exports = compare_collections;
