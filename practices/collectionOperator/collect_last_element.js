'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  var _ = require('../lodash/array');
  return _.last(collection);
}

module.exports = collect_last_element;
