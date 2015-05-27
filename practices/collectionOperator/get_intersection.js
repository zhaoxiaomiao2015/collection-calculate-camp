'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var collection_c = [];
  for (var i = 0; i < collection_b.length; i++) {
    for (var x = 0; x < collection_a.length; x++) {
      if (collection_a[x] === collection_b[i]) {
        collection_c.push(collection_b[i]);
      }
    }
  }
  return collection_c;
}

module.exports = get_intersection;
