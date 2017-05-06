/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */
class Stack {
  constructor() {
    this.arr = [];
  }
  enqueue(x) {
    return this.arr.push(x);
  }
  dequeque() {
    return this.arr.pop();
  }
  length() {
    return this.arr.length;
  }
};

class Queue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }
  enqueue(x) {
    this.stackOne.add(x);
  }
  dequeue() {
    if (!this.stackTwo.length) {
      for (let i = 0; i < this.stackOne.length; i++) {
        this.stackTwo.add(this.stackOne.remove());
      }
    }
    return this.stackTwo.remove();
  }
}
const queue = new Queue();
