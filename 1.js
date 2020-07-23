const list = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
};

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
};

/*
First Split: [21,1,26,45,29,28,2,9,16] [49,39,27,43,34,46,40]
Second Split:  [21,1,26,45,29][28,2,9,16]  [49,39,27,43][34,46,40]
Third Split: [21,1,26] [45,29][28,2][9,16][49,39][27,43][34,46][40]
Fourth Split: [21,1][26][45][29][28][2][9][16][49][39][27][43][34][46][40]
Fifth Split: [21][1][...Fourth Split]


First Merge: [21][1]
Second Merge: [1,21][26]
Third: [45][29]
Fourth: [1,21,26][29,45]
Fifth: [28][2]
Sixth: [9][16]
Seventh:[2,28][9,16]
*/