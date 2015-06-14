function array_sort_reverse(collection){
     return collection.sort(function(a,b){
       return b - a;
  });
}

module.exports = array_sort_reverse;
