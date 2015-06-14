'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function get_union(collection_a, collection_b) {
  return _.union(collection_a, collection_b);
  }


module.exports = get_union;
