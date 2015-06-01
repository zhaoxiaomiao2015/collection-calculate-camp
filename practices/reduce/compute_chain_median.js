'use strict';

function array_sort(temp){
    	 return temp.sort(function(a,b){
         return a-b;
     	});
  	 }

function compute_chain_median(collection) {
  var median;
  var temp = collection.split('->');
  var temp_sort = array_sort(temp);
  var number_a = temp_sort[(temp_sort.length/2) - 1];
  var number_b = temp_sort[(temp_sort.length/2)];
  median = (Number(number_a) + Number(number_b)) / 2  ;
  return median;
}


module.exports = compute_chain_median;
