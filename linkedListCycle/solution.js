class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const hasCycle = (head) => {
  let slowRunner = head;
  let fastRunner = head;

  do {
    if (fastRunner.next === null) return false;
    fastRunner = fastRunner.next;
    if (fastRunner.next === null) return false;
    fastRunner = fastRunner.next;
    slowRunner = slowRunner.next;
  } while (slowRunner !== fastRunner); // You can compare objects with === (literally must be the same)

  return true;
};

const nodeA = new Node('A');
const nodeB = nodeA.next = new Node('B');
const nodeC = nodeB.next = new Node('C');
const nodeD = nodeC.next = new Node('D');
const nodeE = nodeD.next = new Node('E');
// A -> B -> C -> D -> E -> null
console.log(hasCycle(nodeA)); // false
nodeE.next = nodeB;
// A -> B -> C
//      ^    |
//      |    v
//      E <- D
console.log(hasCycle(nodeA)); // true
