'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var _ = require('../lodash');
  var index = _.findLastIndex(collection, function(chr) {
    if(chr %2 === 0){
      return chr;
    }
  });
  return collection[index];
}

module.exports = find_last_even;
