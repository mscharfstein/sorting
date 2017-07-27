function bubbleSort(array) {
  var length = array.length-1;
  for (var i = length; i >= 1; i--) {
    for (var j = 0; j < i; j++) {
      if (array[j]>array[j+1]) {
        array = swap(array,j,j+1);
      }
    }
  }
  return array;
}

function swap(array, el1, el2) {
  var firstEl = array[el1];
  array[el1] = array[el2];
  array[el2] = firstEl;
  return array;
}
