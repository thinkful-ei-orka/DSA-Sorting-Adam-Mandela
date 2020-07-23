/* eslint-disable indent */
const unsorted = [9, 1, 5, 2, 3, 4, 7, 6, 8];

function bucketSort(array, min, max) {
  let buckets = [[], [], []];

  for (let i = 0; i < array.length; i++) {
    console.log(Math.floor((array[i] - min) / ((max + 1 - min) / 3)));
  }
}

bucketSort([21, 22, 23, 24, 25, 26, 27, 28, 29], 21, 29);
