// Notes:
// keep track of how many comparisons and swaps performed for each sort


function bubbleSort(array) {
  // let swapped;
  //
  // do {
  //   swapped = false
  //   for(let i = 0; i < array.length-1; i++) {
  //     if (array[i] && array[i+1] && compare(array, i+1, i)) {
  //       // console.log('array x', array[i])
  //       // console.log('array y', array[i+1])
  //       swap(array, array[i], array[i+1]);
  //       swapped = true;
  //     }
  //   }
  // } while (swapped);

  let sorted = false;
  // for (let i = 0; i < array.length; i++) {   // Handles passes
  for (let end = array.length; end > 0 && !sorted; end--) { // Optimize: dont want to keep checking up to the end each time bc end values are in order at each pass (largest is bubbled up)
    sorted = true;         // assume until proven incorect
    for (let j = 0; j < end; j++) {  // Handles bubbling: checks pairs
      if (!inOrder(array, j)) {
        swap(array, j);
        sorted = false;        // if out of order, sorted false
      }
    }
  }
  return array;
}

function inOrder(array, index) {     // pure function
  // if the pair we're checking is at the end, we know its sorted and stop compare or it will compare with undefined value
  if (index === array.length - 1) return true;
  return array[index] < array[index + 1];
}

function swap(array, index) {        // side effects
  let oldLeftValue = array[index];
  array[index] = array[index + 1];
  array[index + 1] = oldLeftValue;
}
