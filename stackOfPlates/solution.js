class Stack {
  constructor(n = 5) {
    this._stacks = [[]];
    this._limit = n;
  }

  push(value) {
    if (this._topStack.length === this._limit) {
      this._stacks.push([value]);
      return this._length;
    }
    this._topStack.push(value);
    return this._length;
  }

  pop() {
    if (this._topStack.length === 0 && this._stacks.length > 1) {
      this._stacks.pop();
      return this._topStack.pop();
    }
    return this._topStack.pop();
  }

  get _topStack() {
    return this._stacks[this._stacks.length - 1];
  }

  get _length() {
    return (this._stacks.length - 1) * this._limit + this._topStack.length;
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
