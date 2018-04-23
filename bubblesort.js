// Notes:
// keep track of how many comparisons and swaps performed for each sort


function bubbleSort(array) {
  for(let i = 0; i < array.length; i++) {
    compare(array, i, i + 1)
    }
    return array;
  }

function compare(array, x, y) {
  if (array[x] > array[y]) {
    swap(array, array[x], array[y])
  }
}

function swap(array, x, y) {
  let temp = array[x];
  array[y] = temp;
  array[x] = array[y];
}
