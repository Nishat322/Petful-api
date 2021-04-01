class Node {
  //set initial data
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // Add some data to the queue.
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  // Remove some data from the queue.
  dequeue() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return temp.val;
  }

  // Return the next item in the queue.
  show() {
    if (!this.first) return null;
    const temp = this.first;
    return temp.val;
  }

  // Return all items in the queue.
  all() {
    if (!this.first) return null;

    let tempArr = [];
    let temp = this.first;

    while (temp) {
      tempArr.push(temp.val);
      temp = temp.next;
    }
    return tempArr;
  }
}

module.exports = Queue;