/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/
const getDigit = (num, place, longest) => {
  num = num.toString();
  let size = num.length;
  let displace = longest - size;
  return num[place - displace] || 0;
};
const getLongest = (nums) => {
  return Math.max(...nums).toString().length;
};

function radixSort(array) {
  // code goes here
  const longest = getLongest(array);
  let buckets = new Array(10).fill().map(() => []);
  for (let i = longest - 1; i >= 0; i--) {
    while (array.length) {
      let current = array.shift();
      buckets[getDigit(current, i, longest)].push(current);
    }
    for (let x = 0; x < 10; x++) {
      while (buckets[x].length) {
        array.push(buckets[x].shift());
      }
    }
  }
  return array;
}

// unit tests
// do not modify the below code
test("radix sort", function () {
  test("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  test("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
