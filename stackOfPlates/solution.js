class Stack {
  constructor(n = 5) {
    this.stacks = [[]];
    this.limit = n;
  }
  push(value) {
    const topStack = this.stacks[this.stacks.length - 1];
    if (topStack.length === this.limit) {
      this.stacks.push([value]);
      return this.length;
    }
    topStack.push(value);
    return this.length;
  }
  pop() {
    const topStack = this.stacks[this.stacks.length - 1];
    if (topStack.length === 0 && this.stacks.length > 1) {
      this.stacks.pop();
      return this.stacks[this.stacks.length - 1].pop();
    }
    return topStack.pop();
  }
  get length() {
    return (this.stacks.length - 1) * 5 + this.stacks[this.stacks.length - 1].length;
  }
}
