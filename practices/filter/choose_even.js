'use strict';
var _ = require('../../my_lodash/my_lodash.js');

function choose_even(collection) {

  var result = [];
  result = _.filter(collection,function(element){
  return element % 2 === 0;
  });
  return result;
}

module.exports = choose_even;
