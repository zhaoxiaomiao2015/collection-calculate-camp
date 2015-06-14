'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function choose_multiples_of_three(collection) {
  var result = [];
  result = _.filter(collection,function(element){
    return element % 3 === 0;
  });
  return result;

}

module.exports = choose_multiples_of_three;
