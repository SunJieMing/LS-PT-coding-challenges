class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const NodeA = new Node('A');
const NodeB = new Node('B');
const NodeC = new Node('C');
const NodeD = new Node('D');
const NodeE = new Node('E');

NodeA.next = NodeB;
NodeB.next = NodeC;
NodeC.next = NodeD;
NodeD.next = NodeE;

console.log(NodeA);

const reverseList = (node) => {
  let previous = null;

  while(node) {
    let next = node.next;
    node.next = previous;
    previous = node;
    node = next;
  }
  return previous;
};
