/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // code goes here
  if (nums.length < 2) {
    return nums;
  }
  let length = Math.floor(nums.length / 2);
  let l = mergeSort(nums.slice(0, length));
  let r = mergeSort(nums.slice(length));

  return merge(l, r);
};

const merge = (l, r) => {
  let results = [];
  while (l.length && r.length) {
    if (l[0] < r[0]) {
      results.push(l.shift());
    } else results.push(r.shift());
  }
  return [...results, ...l, ...r];
};

// unit tests
// do not modify the below code
test.skip("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  console.log("array", ans);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
