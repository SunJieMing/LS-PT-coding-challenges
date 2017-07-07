class Stack {
  constructor(n = 5) {
    this.stacks = [[]];
    this.limit = n;
  }
  push(value) {
    if (this.topStack.length === this.limit) {
      this.stacks.push([value]);
      return this.length;
    }
    this.topStack.push(value);
    return this.length;
  }
  pop() {
    if (this.topStack.length === 0 && this.stacks.length > 1) {
      this.stacks.pop();
      return this.topStack.pop();
    }
    return this.topStack.pop();
  }
  get topStack() {
    return this.stacks[this.stacks.length - 1];
  }
  get length() {
    return (this.stacks.length - 1) * this.limit + this.stacks[this.stacks.length - 1].length;
  }
}

const stack = new Stack(2);
stack.push('a');
stack.push('b');
stack.push('c');
stack.push('d');
stack.push('e');
console.log(stack);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack);
