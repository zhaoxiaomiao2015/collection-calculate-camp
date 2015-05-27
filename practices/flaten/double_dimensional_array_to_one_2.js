'use strict';

function double_to_one(collection) {
  var _ = require('../lodash/array');
  var tem = _.flattenDeep(collection);
  return _.uniq(tem);
}

module.exports = double_to_one;
