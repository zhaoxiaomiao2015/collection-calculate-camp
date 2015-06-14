'use strict';

var _ = require('../../../my_lodash/my_lodash.js');
function median_to_letter(collection) {
  var temp = parseInt(_.median(collection));
  var number_a = String.fromCharCode(( parseInt(temp / 10) + 94);
  var number_b = String.fromCharCode((temp % 10) +94);
  return (number_a + number_b);

}

module.exports = median_to_letter;
