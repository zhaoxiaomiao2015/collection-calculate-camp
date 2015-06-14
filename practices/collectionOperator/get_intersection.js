'use strict';

var _ = require('../../my_lodash/my_lodash.js');
function get_intersection(collection_a, collection_b) {
  return  _.intersection(collection_a, collection_b);

}

module.exports = get_intersection;
