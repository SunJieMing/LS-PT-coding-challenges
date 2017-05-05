/**
 * Write a stack class. Once you're done,
 * implement a queue using two stacks.
 */
class Stack {
  constructor() {
    this.arr = [];
  }
  let length = 0;
  let stackOne = new Stack();
  let stackTwo = new Stack();
  enqueue(x) {
    return this.stackOne.push(x);
    length++;
  }
  dequeque(x) {
    if (stackTwo.isEmpty()) {
      while (!stackOne.isEmpty()) {
        stackTwo.push(stackOne.pop());
      }
      let temp = null;
      if (!stackTwo.isEmpty()) {
        temp = stackTwo.pop();
        length--;
      }
      // this.arr.push(x);
      // this.arr.pop(x);
    }
    // return this.arr.shift(x);
  }
  length() {
    return length;
  }
};

const stackOne = new Stack('hello');
const stackTwo = new Stack('howdy');
