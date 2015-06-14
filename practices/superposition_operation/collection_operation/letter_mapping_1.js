'use strict';

var _ = require('../../../my_lodash/my_lodash.js');
function even_to_letter(collection) {
  var even = [];
  var result = [];
  _.each(collection, function(val, i){
    if (val % 2 === 0) {
      result.push(String.fromCharCode(val + 96));
    }
  });
  return result;
}

module.exports = even_to_letter;
