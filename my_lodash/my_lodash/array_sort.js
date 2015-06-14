function array_sort(array){
  for (var i = 0; i < array.length -1; i++) {
    for (var j = 0; j < array.length -1 - i; j++) {
      if (array[j] > array[j +1]) {
        var temp;
        temp = array[j +1];
        array[j +1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
module.exprots = array_sort;
