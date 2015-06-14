'use strict';

var _ = require('../../my_lodash/my_lodash.js');
function find_first_even(collection) {
    var result = [];
    _.each(collection, function(val, i){
      if (val % 2 === 0)  {
        result.push(val);
      }
    });
    return result[0];
}

module.exports = find_first_even;
