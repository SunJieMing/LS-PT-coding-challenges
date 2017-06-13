/* Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
 * Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold.
 * Implement a data structure SetOfStacks that mimics this.
 * SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.
 * SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack
 * (that is, pop( ) should return the same values as it would if there were just a single stack).
 */

class SetOfStacks {
  constructor(limit) {
    this.limit = limit;
    this.stackArray = [];
  }

  pop() {
    let count = this.stackArray.length;

    if (count === 0) return null;

    const result = this.stackArray[count-1].pop();
    if (this.stackArray[count-1].length === 0) {
      this.stackArray.pop();
    }
    return result;
  }

  push(item) {
    let count = this.stackArray.length;

    if ((count > 0) && (this.stackArray[count-1].length < this.limit)) {
      let newItem = this.stackArray[count-1].push(item);
      return newItem;
    }

    let newArray = this.stackArray.push([item]);
    return newArray;
  }
}
