'use strict';

function array_sort(collection){
     return collection.sort(function(a,b){
         return b-a;
     });
   }
var rank_desc = function(collection){
  //利用sort方法进行排序
  return collection.sort(array_sort);
};

module.exports = rank_desc;
