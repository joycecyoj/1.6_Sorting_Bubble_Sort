function split(wholeArray) {
  let midPoint = Math.round((wholeArray.length)/2);
  let firstHalf = wholeArray.slice(0, midPoint);
  let secondHalf = wholeArray.slice(midPoint);
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf){
  let sortedArr = [];
//we need a while loop here
  if (firstHalf[i] > secondHalf[i]) {
     sortedArr.push(secondHalf[i]);
     sortedArr.push(firstHalf[i]);
   } else {
     sortedArr.push(firstHalf[i]);
     sortedArr.push(secondHalf[i]);
   }

  // for (let i = 0; i <firstHalf.length; i++) {
  //
  // }
return sortedArr
}

function mergeSort(array) {
  if (array.length === 1){
    return array;
  }

   // for (let i = 0; i < array.length; i++) {
     if (array.length > 1 ){
     console.log(split (array))
   }

}
