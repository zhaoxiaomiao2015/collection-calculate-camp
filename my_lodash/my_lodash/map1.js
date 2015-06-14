
 var each = require('./each.js');

 function map(collection,func) {
     var result = [];
     each(collection,function (item) {
         result.push(func(item));
     });
     return result;
 }

 module.exports = map;
