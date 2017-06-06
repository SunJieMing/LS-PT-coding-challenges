/*
 * Create a linked list that maintains a sorted order to it's elements.
 * When you insert a new element insert it at it's appropriate position.
 * Example: [1] -> [2] -> [3]
 * list.insert(2);
 * [1] -> [2] -> [2] -> [3]
 * Bonus: Write automated tests
 */

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
 }




/*
  Write a function for reversing a linked list. Do it in-place.

  The function will have one input: the head of the list.
  It should return the new head of the list.
 */

 class Node {
   constructor(text) {
     this.value = text;
     this.next = null;
   }
 }

 const linkedListReverse = (node) => {
   const linkedListArray = [];
   let current = node;

   while (current !== null) {
     linkedListArray.push(current.value);
     current = current.next;
   }

   const reverseListHead = new Node(linkedListArray.pop());
   current = reverseListHead;

   while (linkedListArray.length > 0) {
     current.next = new Node(linkedListArray.pop());
     current = current.next;
   }

   return reverseListHead;
 }

 // const nodeA = new Node('A');
 // const nodeB = new Node('B');
 // nodeA.next = nodeB;
 //
 // const nodeC = new Node('C');
 // nodeB.next = nodeC;
 //
 // const nodeD = new Node('D');
 // nodeC.next = nodeD;
 //
 // console.log(nodeA);
 //
 // const nodeAA = linkedListReverse(nodeA);
 //
 // console.log(nodeAA);
 // console.log(nodeA);
