
function each(array,func){
  for (var i = 0; i < array.length; i++) {
    func(array[i],i);
  }
}


function my_sort(array, fun){
  var new_array = [];
  each(array,function(val,i){
    new_array.push(val);
  });

  each(new_array,function(vali,i){
    each(new_array,function(valj,j){
      if (fun(new_array[j], new_array[j + 1])) {
        var temp;
        temp = new_array[j + 1];
        new_array[j + 1] = new_array[j];
        new_array[j] = temp;
      }
    });
  });
  return new_array;
}


function array_sort(array){
  var new_array = [];
  each(array,function(val,i){
    new_array.push(val);
  });

  each(new_array,function(vali,i){
    each(new_array,function(valj,j){
      if (new_array[j] > new_array[j + 1]) {
        var temp;
        temp = new_array[j + 1];
        new_array[j + 1] = new_array[j];
        new_array[j] = temp;
      }
    });
  });
  return new_array;
}

function median(array){
  var temp_array = array_sort(array);
  var median;
  if (temp_array.length % 2 !== 0) {
    median = temp_array[parseInt(temp_array.length / 2)];
  }else {
    var number_a;
    var number_b;
    number_a = temp_array[((temp_array.length / 2) - 1)];
    number_b = temp_array[(temp_array.length / 2)];
    median = (number_a + number_b) / 2;
  }
  return median;
}

function exist(array, number){
  var result = false;
  each(array,function(val,i){
    if (val === number) {
      result = true;
    }
  });
  return result;
}

function intersection(collection_a, collection_b){
  var result = [];
  each(collection_a, function(vala,i){
    each(collection_b, function(valb, j){
      if (vala === valb) {
        result.push(vala);
      }
    });
  });
  return result;
}

function union(collection_a, collection_b){
  var result = [];
  each(collection_a, function(val, i){
    result.push(val);
  });
  each(collection_b, function(valb, j){
    if(!(exist(result,valb))){
      result.push(valb);
    }
  });
  return result;
}

function filter(array, fun){
  var result = [];
  each(array, function(val, i){
    if (fun(val,i)) {
      result.push(val);
    }
  });
  return result;
}

function last(array){
  var result = [];
  each(array, function(val, i){
    result.push(i);
  });
  return result[(result.length - 1)];
}

function repeat(array){
  var result = [];
  each(array, function(val, i){
    if(!exist(result,val)){
      result.push(val);
    }
  });
  return result;
}

function group(array){
  var temp = {};
  each(array, function (element) {
      temp[element] = temp[element.length]||0;
      temp[element] ++ ;
  });
  return temp;
}

function map(array, fun){
  var result = [];
  each(array, function(val, i){
    result.push(fun(val, i));
  });
  return result;
}

function max(array){
  var max_number;
  each(array, function(val, i){
    if (i === 0) {
      max_number = val;
    }else {
      if (val > max_number) {
        max_number = val;
      }
    }
  });
  return max_number;
}

function min(array){
  var min_number;
  each(array, function(val, i){
    if (i === 0) {
      min_number = val;
    }else {
      if (val < min_number) {
        min_number = val;
      }
    }
  });
  return min_number;
}

function sum(array){
  var sum = 0;
  each(array, function(val, i){
    sum += val;
  });
  return sum;
}

function average(array) {
  var sums = sum(array);
  return (sums / array.length);
}








module.exports = {
  'filter': filter,
  'last': last,
  'each':each,
  'array_sort':array_sort,
  'intersection':intersection,
  'union': union,
  'repeat' :repeat,
  'group': group,
  'map': map,
  'max': max,
  'my_sort': my_sort,
  'min': min,
  'sum': sum,
  'average': average,
  'median': median,
  // 'map': require('./my_lodash/map'),
  // 'each': require('./my_lodash/each'),
  'exist': require('./my_lodash/exist'),
  'filter_out': require('./my_lodash/filter_out'),
  'first': require('./my_lodash/first'),
  // 'last': require('./my_lodash/last'),
  // 'max': require('./my_lodash/max'),
  // 'min': require('./my_lodash/min'),
  // 'sum': require('./my_lodash/sum'),
  // 'median': require('./my_lodash/median'),
  'up_sort' :require('./my_lodash/up_sort'),
  'array_sort_positive': require('./my_lodash/array_sort_positive'),
  'array_sort_reverse': require('./my_lodash/array_sort_reverse'),
  'array_median': require('./my_lodash/array_median'),
  // 'array_sort' : require('./my_lodash/array_sort')
};
