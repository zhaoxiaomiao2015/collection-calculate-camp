'use strict';

function find_first_even(collection) {
  //在这里写入代码
  var _ = require('../lodash');
  var index = _.findIndex(collection, function(chr) {
    if(chr %2 === 0){
      return chr;
    }
  });
  return collection[index];
}

module.exports = find_first_even;
