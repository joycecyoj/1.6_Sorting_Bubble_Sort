// Notes:
// keep track of how many comparisons and swaps performed for each sort


function bubbleSort(array) {
  let swapped;

  do {
    swapped = false
    for(let i = 0; i < array.length-1; i++) {
      if (array[i] && array[i+1] && compare(array, i+1, i)) {
        // console.log('array x', array[i])
        // console.log('array y', array[i+1])
        swap(array, array[i], array[i+1]);
        swapped = true;
      }
    }
  } while (swapped);

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 1; j < array.length; j++) {
//       if (compare(array, j-1, j)) {
//         swap(array, j-1, j);
//       }
//     }
//   }
  return array;
}

function compare(array, x, y) {
  return (array[x] > array[y] ? true : false);
}

function swap(array, x, y) {
  let temp = array[x];
  array[x] = array[y];
  array[y] = temp;
}
