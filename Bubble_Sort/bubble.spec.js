function numerically(a, b) { return a - b; }      // for sort

function generateArray(size, lower, upper) {
  var randomArr = []
  while (size--) {
    var randomNum = Math.floor(lower + Math.random() * upper);
    randomArr.push(randomNum);
  }
  return randomArr
}


describe('Bubble Sort', function(){
  // beforeAll(function () {
  //   spyOn( unsortedArr, 'swap').and.callThrough();
  //   spyOn( unsortedArr, 'compare').and.callThrough();
  // });

  it('sorts an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('bubble sorts an array of many elements', function(){
    expect( bubbleSort( [5, 2, 7, 9, 3, 5, 4, 1, 0]) ). toEqual( [0, 1, 2, 3, 4, 5, 5, 7, 9] );
  });

  it('sorts an array of one element', function(){
    expect( bubbleSort([1]) ). toEqual( [1] );
  });

  for (var i = 2; i < 103; i += 20) {
    it('sorts an array of '+ i + 'random items', function () {
      var arr = generateArray(i, 0, 100);
      var sorted = arr.slice(0).sort(numerically);    // slice to copy bc sort() modifys ori
      expect( bubbleSort(arr) ).toEqual( sorted );
    });
  }

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
