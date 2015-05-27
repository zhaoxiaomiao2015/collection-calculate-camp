'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var _ = require('../lodash/array');
  var flag = _.difference(collection_a, collection_b);
  if (flag.length === 0) {
      return true;
  }else {
    return false;
  }
}

module.exports = compare_collections;
