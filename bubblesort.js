// Notes:
// keep track of how many comparisons and swaps performed for each sort


function bubbleSort(array) {
  let swapped = false;
  for(let i = 0; i < array.length-1; i++) {
    debugger;
    if(!swapped) {
      compare(array, i, i + 1)
    }
    else {
      continue;
    }
    }
    return array;
  }

function compare(array, x, y) {
  if (array[x] > array[y]) {
    swap(array, array[x], array[y]);
    swapped = true;
  }
  else {
    swapped = true;
  }
}

function swap(array, x, y) {
  let temp = array[x];
  array[x] = array[y];
  array[y] = temp;
}
