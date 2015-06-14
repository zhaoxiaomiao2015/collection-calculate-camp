var each = require('./each.js');

function reduce(collection,func) {
    var resutl;
    each(collection,function (item,i) {
        if (i === 0) {
          resutl = item;
        }else{
          resutl = func(resutl,item);
        }
    });
}

module.exports = reduce;
