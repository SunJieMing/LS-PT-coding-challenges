class Stack {
  constructor() {
    this.storage = [];
  }
  add(item) {
    this.storage.push(item);
  }
  remove() {
    return this.storage.pop();
  }
  get length() {
    return this.storage.length;
  }
}

class Queue {
  constructor() {
    this.stack1 = new Stack(); // []
    this.stack2 = new Stack(); // ['f', 'e', 'd']
  }
  enqueue(item) {
    this.stack1.add(item);
  }
  dequeue() {
    if (this.stack2.length === 0) {
      const length = this.stack1.length;
      for (let i = 0; i < length; i++) {
        const valueToAdd = this.stack1.remove();
        this.stack2.add(valueToAdd);
      }
    }
    return this.stack2.remove();
  }
}


const queue = new Queue();

queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue('d');
queue.enqueue('e');
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

 
