'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var _ = require('../lodash');
  return _.max(collection);
}

module.exports = collect_max_number;
