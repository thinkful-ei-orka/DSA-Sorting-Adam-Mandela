/*

We would sort very muc like a bucket sorting algorithm. In that we would look for books that are in the same first letter, and if a book exists containing that letter, then we compare that book within those books piecewise.

*/

const books = ['ULYSSES',
  'THE GREAT GATSBY',
  'A PORTRAIT OF THE ARTIST AS A YOUNG MAN',
  'LOLITA',
  'BRAVE NEW WORLD',
  'THE SOUND AND THE FURY',
  'CATCH-22',
  'DARKNESS AT NOON',
  'SONS AND LOVERS',
  'THE GRAPES OF WRATH',
  'UNDER THE VOLCANO',
  'THE WAY OF ALL FLESH',
  '1984',
  'I, CLAUDIUS',
  'TO THE LIGHTHOUSE',
  'AN AMERICAN TRAGEDY',
  'THE HEART IS A LONELY HUNTER',
  'SLAUGHTERHOUSE-FIVE',
  'INVISIBLE MAN',
  'NATIVE SON'];

function bookSort(list) {
  let buckets = [];
  let resultArray = [];
  for (let i = 0; i < list.length; i++) {
    let bucket = list[i].charCodeAt(0) - 48;
    if (!buckets[bucket]) {
      buckets[bucket] = [list[i]];
    } else {
      buckets[bucket].push(list[i]);
    }
  }
  buckets.map(bucket => {
    if (bucket.length > 1) {
      bucket.sort();
    }
  });
  buckets.forEach(bucket => {
    if (bucket) {
      resultArray = resultArray.concat(bucket);
    }
  });
  return resultArray;
}

console.log(bookSort(books));
