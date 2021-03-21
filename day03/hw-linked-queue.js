// Linked queue

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedQueue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  put(value) {
    if (this.front === null) {
      this.rear = this.front = new Node(value, null, null);
    } else {
      const node = new Node(value, this.rear, null);
      this.rear.next = node;
      this.rear = node;
    }
  }

  get() {
    if (this.front === null) return false;

    const value = this.front.value;

    this.front = this.front.next;
    return value;
  }

  peek() {
    if (this.front === null) return false;

    return this.front.value;
  }

  print() {
    let curr = this.front;

    if (this.curr === null) return '';

    let s = '';
    while (curr !== null) {
      s += `${curr.value}`;
      curr = curr.next;
    }

    console.log(s);
  }
}

const queue = new LinkedQueue();
queue.print();

queue.put(1);
queue.put(2);
queue.put(3);
queue.put(4);
queue.put(5);
queue.put(6);
queue.print();

console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
queue.print();

queue.put(4);
queue.put(5);
queue.put(6);
queue.print();

console.log(queue.get());
console.log(queue.get());
console.log(queue.get());
queue.print();
