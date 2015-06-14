'use strict';

var _ = require('../../../my_lodash/my_lodash.js');
function average_to_letter(collection) {
  var even = Math.ceil(_.average(collection));
  return  (String.fromCharCode(even + 96));
}


module.exports = average_to_letter;
