function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var _ = require('../../lodash');
  var temp = _.flatten(collection_b);
  return _.intersection(collection_a,temp);
}

module.exports = collect_same_elements;
