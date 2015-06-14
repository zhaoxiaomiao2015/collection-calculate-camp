function my_sort(array){
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = 0; j < array.length -1 -i; j++) {
      if (array[j] > array[j + 1]) {
        var temp;
        temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

function array_median(collction){
  var median;
  array = my_sort(collction);
  if (array.length % 2 !== 0) {
    median = array[(array.length + 1) / 2 -1];
  }else {
    number_a = array[array.length / 2 -1];
    number_b = array[array.length / 2];
    median = (number_a + number_b) / 2;
  }
  return median;
}

module.exports = array_median;
