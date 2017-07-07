const graph = {
  a: {
    value: 'a',
    edges: []
  },
  b: {
    value: 'b',
    edges: []
  },
  c: {
    value: 'c',
    edges: []
  },
  d: {
    value: 'd',
    edges: []
  },
  e: {
    value: 'e',
    edges: []
  },
  f: {
    value: 'f',
    edges: []
  },
  g: {
    value: 'g',
    edges: []
  }
};

graph.a.edges.push(graph.b, graph.d, graph.e);
graph.b.edges.push(graph.a, graph.e);
graph.d.edges.push(graph.f, graph.e);
graph.e.edges.push(graph.c, graph.a);
graph.f.edges.push(graph.d);
graph.g.edges.push(graph.c, graph.f);


// a -> g === false
// a -> f === true

const routeBetweenNodes = (node1, node2) => { // DFS solution - How would you implement with BFS?
  let routeExists = false;
  const searchGraph = (node) => { // Recursive subroutine
    if (node.visited === true || routeExists === true) return;
    node.visited = true;
    for (let i = 0; i < node.edges.length; i++) {
      if (node.edges[i] === node2) return routeExists = true;
      if (node.edges[i].edges.length > 0) searchGraph(node.edges[i]);
    }
  };
  searchGraph(node1);
  return routeExists;
};

console.log(routeBetweenNodes(graph.a, graph.f));
console.log(routeBetweenNodes(graph.a, graph.g));
