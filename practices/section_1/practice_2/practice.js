
var _ = require('../../../my_lodash/my_lodash.js');
function collect_same_elements(collection_a, collection_b) {
  return _.intersection(collection_a, collection_b);
}

module.exports = collect_same_elements;
