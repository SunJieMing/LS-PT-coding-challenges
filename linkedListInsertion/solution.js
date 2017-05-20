class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insert(value) {
    const newNode = {
      value,
      next: null,
    };
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    if (this.head.next === null) {
      if (this.head.value >= newNode.value) {
        this.head = newNode;
        this.head.next = this.tail;
      } else {
        this.tail = newNode;
        this.head.next = newNode;
      }
      return;
    }
    if (this.head.value > newNode.value) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    const insertValue = (node) => {
      if (node.next === null) {
        this.tail.next = newNode;
        this.tail = newNode;
        return;
      }
      if (node.next.value >= newNode.value) {
        newNode.next = node.next;
        node.next = newNode;
        return;
      }
      insertValue(node.next);
    };
    insertValue(this.head);
  }
  removeFromHead() {
    if (this.head === null) return null;
    const headValue = this.head.value;
    this.head = this.head.next;
    return headValue;
  }
}
