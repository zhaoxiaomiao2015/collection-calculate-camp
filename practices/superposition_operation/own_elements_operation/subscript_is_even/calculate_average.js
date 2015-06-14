'use strict';

var _ = require('../../../../my_lodash/my_lodash.js');
var calculate_average = function(collection){
 return  Math.ceil(_.average(collection));

};
module.exports = calculate_average;
