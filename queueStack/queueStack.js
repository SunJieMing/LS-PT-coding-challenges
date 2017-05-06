/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */
class Stack {
  constructor() {
    this.arr = [];
  }
  add(x) {
    return this.arr.push(x);
  }
  remove() {
    return this.arr.pop();
  }
  get length() {
    return this.arr.length;
  }
}

class Queue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }
  enqueue(x) {
    this.stackOne.add(x);
  }
  dequeue() {
    if (this.stackTwo.length===0) {
      const length = this.stackOne.length;
      for (let i = 0; i < length; i++) {
        const value = this.stackOne.remove();
        this.stackTwo.add(value);
      }
    }
    return this.stackTwo.remove();
  }
}
