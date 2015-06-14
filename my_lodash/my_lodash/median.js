
var array_sort_positive = require('./array_sort_positive.js');

function median(temp){
  var result = [];
  for (var key in temp) {
    var temp1 = array_sort_positive(temp[key]);
    if (temp1.length % 2 === 0) {
      var number_a = temp1[(temp1.length) / 2 - 1];
      var number_b = temp1[(temp1.length) / 2];
      var pos1 = (number_a + number_b) / 2;
      result.push(pos1);
    }else {
      var pos2 =temp1[Math.ceil((temp1.length) / 2) - 1];
      result.push(pos2);
    }
  }
  return result;
}

function array_sort_positive(collection){
     return collection.sort(function(a,b){
       return a - b;
    });
   }

module.exports = median;
