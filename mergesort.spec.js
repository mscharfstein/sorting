describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    var array = [4,2,6,7];
    var arrayodd = [4,2,6,7,9];
    expect(split(array)).toEqual([[4,2],[6,7]]);
    expect(split(arrayodd)).toEqual([[4,2],[6,7,9]]);
  });
});

describe('Merge', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    var a1 = [1,3];
    var a2 = [2,4];
    var a3 = [2,4,5,6,7,8,9];
    expect(merge(a1,a2)).toEqual([1,2,3,4]);
    expect(merge(a1,a3)).toEqual([1,2,3,4,5,6,7,8,9]);
});
});

describe('Merge Sort', function(){
  it('is able to merge sort an undordered array', function(){
    var a1 = [1,8,9,3,7,5,2];
    expect(mergeSort(a1)).toEqual([1,2,3,5,7,8,9]);
    });

  it('is able to merge sort an undordered array', function(){
    var a1 = [2,3,2];
    expect(mergeSort(a1)).toEqual([2,2,3]);
    });

  it('is able to merge sort an undordered array', function(){
    var a1 = [];
    expect(mergeSort(a1)).toEqual([]);
    });

});
