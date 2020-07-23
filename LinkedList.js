class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertOops(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, this.head);
    }
  }


  insertBefore(item, key) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    let previous = this.head;

    while ((current !== null) && (current.value !== key)) {
      previous = current;
      current = current.next;
    }
    if (current === null) {
      console.log('Key not found, cannot insert');
      return;
    }
    let newNode = new _Node(item, previous.next);
    previous.next = newNode;
  }

  insertAfter(item, key) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    let previous = this.head;

    while ((current !== null) && (previous.value !== key)) {
      previous = current;
      current = current.next;
    }
    if (current === null) {
      if (previous.value === key) {
        this.insertLast(item);
        return;
      }
      console.log('Key not found, cannot insert');
      return;
    }
    let newNode = new _Node(item, previous.next);
    previous.next = newNode;
  }

  insertAt(item, index) {
    if (!this.head) {
      return null;
    }

    let megatron = 1;
    let current = this.head;
    let previous = this.head;

    while ((current !== null) && (megatron !== index)) {
      previous = current;
      current = current.next;
      megatron++;
    }
    if (current === null) {
      console.log('Index not found, cannot insert');
      return;
    }
    let newNode = new _Node(item, previous.next);
    previous.next = newNode;
  }

  find(item) {
    let current = this.head;
    if (!this.head) {
      return null;
    }
    while (current.value !== item) {
      if (current.next === null) {
        return null;
      } else {
        current = current.next;
      }
    }
    return current;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let previous = this.head;

    while ((current !== null) && (current.value !== item)) {
      previous = current;
      current = current.next;
    }
    if (current === null) {
      console.log('Item not found');
      return;
    }
    previous.next = current.next;
  }
}

module.exports = {
  _Node,
  LinkedList,
};