'use strict';

function get_union(collection_a, collection_b) {
  var union = collection_a;
  var differedce_element = collection_b;
  for (var i = 0; i < collection_a.length; i++) {
    for (var x = 0; x < collection_b.length; x++) {
        if (collection_b[x] == collection_a[i]) {
          differedce_element.splice(x,1);
        }
      }
    }

  for (var y = 0; y < differedce_element.length; y++) {
    union.push(differedce_element[y]);
    }
    return union;
  }


module.exports = get_union;
