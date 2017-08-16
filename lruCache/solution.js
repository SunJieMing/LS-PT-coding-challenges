class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.keys = [];
    this.storage = {};
  }

  set(key, value) {
    this.keys.push(key);
    this.storage[key] = value;
    if (this.keys.length > limit) {
      const keyToRemove = this.keys.shift();
      delete this.storage[keyToRemove];
    }
  }

  get(key) {
    // When I get a key I need to move it to the front of the queue
    const indexOfKey = this.keys.indexOf(key);
    if (indexOfKey === -1) return null; 
    this.keys.splice(indexOfKey, 1);
    this.keys.push(key);
    const value = this.storage[key];
    return value;
  }
}
