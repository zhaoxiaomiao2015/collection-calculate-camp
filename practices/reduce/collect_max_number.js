var _ = require('../../my_lodash/my_lodash.js');

  function collect_max_number(collection) {
    // var result = collection[0];
    // for (var i = 0; i < collection.length; i++) {
    //     if (collection[i] > result) {
    //       result = collection[i];
    //     }
    // }
    // return result;
    return _.max(collection);
  }

module.exports = collect_max_number;
