const { LinkedList } = require('./LinkedList');

let SLL = new LinkedList;
SLL.insertLast('Car');
SLL.insertLast('Audi');
SLL.insertLast('Dodge');
SLL.insertLast('Bughatti');
SLL.insertLast('Honda');
SLL.insertLast('Echidna');
SLL.insertLast('Ford');
SLL.insertLast('GEM');

function llSort(linkedList) {
  let array = buildListArray(linkedList);
  array = mSort(array);
  linkedList.head = null;
  array.forEach(value => linkedList.insertLast(value));
  return linkedList;
}
function buildListArray(linkedList) {
  if (linkedList !== null) {
    if (linkedList.head) { linkedList = linkedList.head; }
    return [linkedList.value, ...buildListArray(linkedList.next)];
  } else {
    return [];
  }
}

function mSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);
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

console.log(llSort(SLL));