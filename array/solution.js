/* Make a class called Array.
 * It should have the methods push, pop, get(index), and delete(index).
 * get and delete should accept an index and get or remove the item at that index.
 * Make sure to shift the array items after deleting an item.
 * In your implementation use a JS object to build the array.
 * Do NOT use an array as the underlying data structure, that's cheating :)
 * How do these operations compare to that of a linked list?
 * When would you want to use an array vs a linked list?
 */

class ArrayList {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    this.count--;
    const poppedValue = this.storage[this.count];
    delete this.storage[this.count];
    return poppedValue;
  }

  get(index) {
    return this.storage[index];
  }

  delete(index) {
    if (index < 0 || index >= this.count) return undefined;
    const deletedValue = this.storage[index];
    for (let i = index; i < this.count; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this.storage--;
    return deletedValue;
  }
}
