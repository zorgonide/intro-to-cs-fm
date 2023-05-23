/*
  
  Create a function called heapSort that accepts an array and performs a heap sort on it in place (heap sorts are normally destructive)
  
  You will probably need at least two more functions: heapify and createMaxHeap
   
*/

const heapSort = (array) => {
  // code
  array = createMaxHeap(array);
  for (let i = array.length - 1; i > 0; i--) {
    swapPlace(0, i, array);
    heapify(array, 0, i);
  }
  return array;
};

const swapPlace = (index1, index2, array) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
  return array;
};
const createMaxHeap = (array) => {
  // code
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length);
  }
  return array;
};

const heapify = (array, index, heapSize) => {
  // code
  let l = 2 * index + 1;
  let r = 2 * index + 2;

  let largestValueIndex = index;

  if (heapSize > l && array[largestValueIndex] < array[l]) {
    largestValueIndex = l;
  }
  if (heapSize > r && array[largestValueIndex] < array[r]) {
    largestValueIndex = r;
  }
  if (largestValueIndex !== index) {
    swapPlace(index, largestValueIndex, array);
    heapify(array, largestValueIndex, heapSize);
  }
};

// unit tests
// do not modify the below code
test("heap sort", function () {
  const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1];
  heapSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
