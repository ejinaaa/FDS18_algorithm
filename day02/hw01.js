// Doubly linked list
class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    if (this.head === null && this.tail === null) return true;
    else return false;
  }

  prepend(value) {
    let curr = this.head;
    if (curr === null) {
      this.head = new Node(value, null, null);
      this.tail = this.head;
      return;
    }

    this.head.prev = new Node(value, null, this.head);
    this.head = this.head.prev;
  }

  append(value) {
    let curr = this.head;
    if (curr === null) {
      this.head = new Node(value, null, null);
      return;
    }

    let prev = null;
    let next = this.head.next;
    while (next !== null) {
      prev = curr;
      curr = next;
      next = curr.next;
    }

    this.tail = new Node(value, curr, null);
    curr.next = this.tail;
  }

  setHead(index) {
    let curr = this.head;

    for (let i = 0; i < index; i++) {
      if (curr === null) return false;
      curr = curr.next;
    }

    this.head = curr;
    curr.prev = null;
    return true;
  }

  access(index) {
    let curr = this.head;

    for (let i = 0; i < index; i++) {
      if (curr === null) return undefined;
      curr = curr.next;
    }

    return curr.value;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return true;
    }

    let curr = this.head;
    let prev = null;

    for (let i = 0; i < index; i++) {
      if (curr === null) return false;
      prev = curr;
      curr = curr.next;
    }

    prev.next = new Node(value, prev, curr);
    curr.prev = prev.next;
    return true;
  }

  remove(index) {
    if (index === 0) {
      if (this.head !== null) {
        this.head = this.head.next;
        this.head.prev = null;
        return true;
      } else {
        return false;
      }
    }

    let curr = this.head;
    let prev = null;
    let next = this.head.next;

    for (let i = 0; i < index; i++) {
      if (curr === null) return false;
      prev = curr;
      curr = curr.next;
      next = curr.next;
    }

    prev.next = next;
    next.prev = prev;
    return true;
  }

  print() {
    let curr = this.head;

    if (curr === null) {
      console.log('[]');
      return;
    }

    let s = '';
    while (curr !== null) {
      s += `${curr.value} `;
      curr = curr.next;
    }
    console.log(`[${s}]`);
  }

  printInv() {
    let curr = this.tail;

    if (curr === null) {
      console.log('[]');
      return;
    }

    let s = '';
    while (curr !== null) {
      s += `${curr.value} `;
      curr = curr.prev;
    }
    console.log(`[${s}]`);
  }
}

const myList = new DoublyLinkedList();
myList.print();
myList.printInv();

for (let i = 0; i < 10; i++) {
  myList.append(i + 1);
}
myList.print();
myList.printInv();

for (let i = 0; i < 10; i++) {
  myList.prepend(i + 1);
}
myList.print();
myList.printInv();

const value = myList.access(3);
console.log(`myList.access(3) = ${value}`);

myList.insert(8, 128);
myList.print();
myList.printInv();

myList.remove(4);
myList.print();
myList.printInv();

myList.setHead(10);
myList.print();
myList.printInv();
