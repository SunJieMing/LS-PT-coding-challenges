// BFS

// queue of keys on a given level
// while queue has things in it
  // take the first item from the queue
  // if queue item matches search term return true
  // if queue item has children add its children to the queue
// return false


const breadthFirstSearch = (tree, searchTerm) => {
  let queue = Object.keys(tree).map(key => {
    return tree[key];
  });
  let value;
  while (queue.length > 0) {
    value = queue.shift()
    if (value === searchTerm) return true;
    if (typeof value !== 'number') {
      let keys = Object.keys(value); // [ 'x', 'y', 'z', 'zz' ]
                                     // [1, 1, 1, {...}]
      let values = keys.map(key => value[key]); // [1, 1, 1, {...}]
      queue = queue.concat(values);  // [..] + [1, 1, 1, {...}]
    }
  }
  return false;
};


const tree = {
  x: 1,
  y: 1,
  z: {
    x: 1,
    y: 1,
    z: 1,
    zz: {
      a: 1,
      b: 1,
      c: 1,
      d: {
        a: 1,
        b: 1,
        c: 1,
        d: {
          a: 1,
          b: 1,
          c: 2,
        },
      },
    },
  },
  a: 1,
};

console.log(breadthFirstSearch(tree, 2));
