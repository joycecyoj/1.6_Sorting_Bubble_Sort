describe('Split Array function', function() {
  const unsortedArr = [15, 25, 5, 17];
  const sorted = [5, 15, 17, 25];

  it('is able to split an array into two halves', function() {
    // your code here
    expect( split(unsortedArr)).toEqual([[ 15, 25 ], [ 5, 17 ]])
  });
});

describe('Merge function', function(){
  const firstHalf = [15, 25];
  const secondHalf = [5, 17];

  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect( merge(firstHalf, secondHalf)).toEqual([ 5, 15, 17, 25 ])
  });
});

describe('MergeSort function', function(){
  const unsortedArr = [15, 25, 5, 43, 17, 4];
  const sorted = [4, 5, 15, 17, 25, 43];

  it('is able to sort one unsorted array into one sorted array', function(){
    // test the merging algorithm
    expect(mergeSort(unsortedArr)).toEqual(sorted)
  })
  it('returns the array if the array only contains one element', function () {
    expect(mergeSort([3])).toEqual([3]);
  });
});
