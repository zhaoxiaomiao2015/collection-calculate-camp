function each(array,func){
  for (var i = 0; i < array.length; i++) {
    func(array[i],i);
    }
  }
  module.exports = each;
