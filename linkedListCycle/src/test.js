const linkedListHelpers = require('./linkedListCycle');

describe('linkedListCycle(node)', function() {
  it('should return false if the linked list has no cycle', function() {
    const nodeA = new linkedListHelpers.Node('A');
    const nodeB = new linkedListHelpers.Node('B');
    nodeA.next = nodeB;

    const nodeC = new linkedListHelpers.Node('C');
    nodeB.next = nodeC;

    const nodeD = new linkedListHelpers.Node('D');
    nodeC.next = nodeD;

    const nodeE = new linkedListHelpers.Node('E');
    nodeD.next = nodeE;
    expect(linkedListHelpers.linkedListCycle(nodeA)).toBe(false);
  });
  it('should return true if the linked list has a cycle', function() {
    const nodeA = new linkedListHelpers.Node('A');
    const nodeB = new linkedListHelpers.Node('B');
    nodeA.next = nodeB;

    const nodeC = new linkedListHelpers.Node('C');
    nodeB.next = nodeC;

    const nodeD = new linkedListHelpers.Node('D');
    nodeC.next = nodeD;

    const nodeE = new linkedListHelpers.Node('E');
    nodeD.next = nodeE;
    nodeE.next = nodeB;
    expect(linkedListHelpers.linkedListCycle(nodeA)).toBe(true);
  });
});
