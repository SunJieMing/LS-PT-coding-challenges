/*
 * Create a function that returns true if a linked list contains a cycle, or false if it terminates
 *
 * Usually we assume that a linked list will end with a null next pointer, for example:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * const nodeA = Node('A');
 * const nodeB = nodeA.next = Node('B');
 * const nodeC = nodeB.next = Node('C');
 * const nodeD = nodeC.next = Node('D');
 * const nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 * Hint: Search for Floyd's Tortoise and Hare algorithm.
 */

 class Node {
   constructor(text) {
     this.value = text;
     this.next = null;
   }
 }

 const linkedListCycle = (node) => {
   let hare = node;
   let tortoise = node;

   do {
     if (hare.next === null) {
       return false;
     }
     hare = hare.next;

     if (hare.next === null) {
       return false;
     }

     hare = hare.next;
     tortoise = tortoise.next;

   } while (hare !== tortoise)

   return true;
 }

 module.exports = {
   Node,
   linkedListCycle,
 };
