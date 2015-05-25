'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  //在第一个数组元素中删除与第二个数组相同的元素
  var _ = require('../lodash/array');
  var temp = [];
  temp = _.difference(collection_b,collection_a);
  return collection_a.concat(temp);
}

module.exports = get_union;
