
function up_sort(collection) {
    var number;
    for (var i = 0; i < collection.length; i++) {
        for (var x = i + 1; x < collection.length; x++) {
            if (collection[x] < collection[i]) {
                number = collection[i];
                collection[i] = collection[x];
                collection[x] = number;
            }
        }
    }
    return collection;
}

module.exports = up_sort;
