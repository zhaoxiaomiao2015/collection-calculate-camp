'use strict';

function choose_no_repeat_number(collection) {
  var temp = [];
  for (var i = 0; i < collection.length; i++) {
    var flag = false;
    for (var x = 0; x < temp.length; x++) {
      if (temp[x] === collection[i]) {
        flag = true;
      }
    }
    if (!flag) {
      temp.push(collection[i]);
      }
    }
      return temp;
  }

module.exports = choose_no_repeat_number;
