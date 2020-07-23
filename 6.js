const unsorted = [9, 1, 5, 2, 3, 4, 7, 6, 8, 0, 45, 6, 56, 3, 15, 87, 4];

function bucketSort(list) {
  let buckets = [];
  let resultArray = [];
  for (let i = 0; i < list.length; i++) {
    let bucket = list[i];
    if (!buckets[bucket]) {
      buckets[bucket] = [list[i]];
    } else {
      buckets[bucket].push(list[i]);
    }
  }

  buckets.forEach(bucket => {
    if (bucket) {
      resultArray = resultArray.concat(bucket);
    }
  });
  return resultArray;
}


console.log(bucketSort(unsorted));