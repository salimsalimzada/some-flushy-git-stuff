console.log('some flushy console');

// write dijkstra's algorithm
// write a function that takes in a graph and a starting node and returns the shortest path to all nodes
// from the starting node
// graph is an object with keys as nodes and values as arrays of nodes
// graph = {
//   a: ['b', 'c'],
//   b: ['a', 'd'],
//   c: ['a', 'd'],
//   d: ['b', 'c', 'e'],
//   e: ['d']
// }
// starting node is a string
// startingNode = 'a'
// return value is an object with keys as nodes and values as the shortest path to that node
// return {
//   a: 0,
//   b: 1,
//   c: 1,
//   d: 2,
//   e: 3
// }

// Path: dijkstra.js
function dijkstra(graph, startingNode) {
  const visited = {};
  const distances = {};
  const queue = [];

  distances[startingNode] = 0;
  queue.push(startingNode);

  while (queue.length) {
    const node = queue.shift();
    visited[node] = true;

    graph[node].forEach(neighbor => {
      if (!visited[neighbor]) {
        const distance = distances[node] + 1;
        if (distance < distances[neighbor] || distances[neighbor] === undefined) {
          distances[neighbor] = distance;
        }
        queue.push(neighbor);
      }
    });
  }

  return distances;
}