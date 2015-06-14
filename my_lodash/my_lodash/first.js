
  function filter(array,fun){
    var result = [];
    each(array, function(array,i){
      if (fun(colection)) {
        result.push(colection);
      }
    });
    return result;
  }

module.exports = {'filter':filter};
