/**
* Write a stack class. Once you're done,
* implement a queue using two stacks.
*/

class Stack {
  constructor() {
    this.stack = [];
  }

  get size() {
    return this.stack.length;
  }

  add(obj) {
    this.stack.push(obj);
  }

  remove() {
    return this.stack.pop();
  }
}

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  get size() {
    let size1 = this.stack1.size;
    let size2 = this.stack2.size;
    return (size1+size2);
  }

  enqueue(obj) {
    this.stack1.add(obj);
  }

  dequeue() {
    if ((this.stack1.size === 0) && (this.stack2.size === 0)) {
      return undefined;
    }

    if (this.stack1.size === 1) {
      return this.stack1.remove();
    }

    let result;

    if (this.stack2.size === 0) {
      do {
        let temp = this.stack1.remove();
        this.stack2.add(temp);
      } while (this.stack1.size > 1);

      result = this.stack1.remove();

      do {
        let temp = this.stack2.remove();
        this.stack1.add(temp);
      } while (this.stack2.size > 0);
    }
    return result;
  }
}
