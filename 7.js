const unshuffled = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(array) {
  let temp;
  let position;
  for (let i = 0; i < array.length; i++) {
    position = Math.floor(Math.random() * array.length);
    temp = array[i];
    array[i] = array[position];
    array[position] = temp;
  }
  return array;
}

console.log(shuffle(unshuffled));