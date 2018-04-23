describe('Bubble Sort', function(){
  let unsortedArr = [15, 25, 5, 17, 1];
  let sortedArr = [1, 5, 15, 17, 25];

  // beforeAll(function () {
  //   spyOn( unsortedArr, 'swap').and.callThrough();
  //   spyOn( unsortedArr, 'compare').and.callThrough();
  // });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('bubble sorts an array', function(){
    expect( bubbleSort('unsortedArr')). toEqual('sortedArr');
  });

  it('returns arr if only one item long', function(){
    expect( bubbleSort([1])). toEqual([1]);
  });

  // it('number of swaps taken is correct', function() {
  //   bubbleSort(unsortedArr);
  //   expect(unsortedArr.swap.calls.count()).toEqual(8);
  // });
  //
  // it('number of comparisons taken is correct', function() {
  //   bubbleSort(unsortedArr);
  //   expect(unsortedArr.compare.calls.count()).toEqual(14);
  // });

});
