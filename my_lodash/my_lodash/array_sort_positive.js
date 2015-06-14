function array_sort_positive(collection){
     return collection.sort(function(a,b){
       return a - b;
  });
}

module.exports = array_sort_positive;
