describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array of one element', function() {
    expect( bubbleSort([1])).toEqual([1]);
  });

  it('handles an array of two elements', function() {
    expect( bubbleSort([5,2])).toEqual([2,5]);
  });

  it('handles an array of many elements', function() {
    expect( bubbleSort([5,2,1,8,10,17,6])).toEqual([1,2,5,6,8,10,17]);
  });

  //before(function () {
    //spyOn(array, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  //});
  it('takes 6 swaps to sort array', function () {
    var array = [5,2,1,8,10,17,6];
    spyOn(window, 'swap').and.callThrough();
    bubbleSort(array);
    expect(window.swap.calls.count()).toEqual(6);
  });
});

