
  function collect_max_number(collection) {
    // var result = collection[0];
    // for (var i = 0; i < collection.length; i++) {
    //     if (collection[i] > result) {
    //       result = collection[i];
    //     }
    // }
    // return result;
    max = require('../../my_lodash/max.js');
    return max(collection);
  }

module.exports = collect_max_number;
