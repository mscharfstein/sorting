function split(array) {
    return [ array.slice(0,Math.floor(array.length/2)),
            array.slice(Math.floor(array.length/2)) ];
}

function merge(a1,a2) {
    var c1 = 0,c2 = 0;
    var temp = [];
    while(c1 < a1.length && c2 < a2.length) {
        temp.push(a1[c1] < a2[c2] ? a1[c1++] : a2[c2++]);
    }
    if(c1 < a1.length) temp = temp.concat(a1.slice(c1));
    if(c2 < a2.length) temp = temp.concat(a2.slice(c2));
    return temp;
}

function mergeSort(array) {
    if(array.length <= 1) return array;
    else {
        var split_array = split(array);
        return merge(mergeSort(split_array[0]),mergeSort(split_array[1]));
    }
}