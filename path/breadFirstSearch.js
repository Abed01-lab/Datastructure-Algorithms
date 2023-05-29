// Class representing a graph node
class Node {
	constructor(id) {
	  this.id = id;
	  this.neighbors = [];
	}

	addNeighbor(neighbor) {
	  this.neighbors.push(neighbor);
	}
  }

  // Function to perform breadth-first search
  function bfs(startNode) {
	const visited = {}; // Keeps track of visited nodes
	const queue = []; // Queue to store nodes to visit
	const path = {};

	// Add the start node to the queue
	queue.push(startNode);
	visited[startNode.id] = true;

	while (queue.length > 0) {
	  // Dequeue a node from the queue
	  const currentNode = queue.shift();

	  // Process the current node (you can perform any desired operation here)
	  console.log(`Visited node: ${currentNode.id}`);

	  // Enqueue the unvisited neighbors
	  for (const neighbor of currentNode.neighbors) {
		if (!visited[neighbor.id]) {
		  queue.push(neighbor);
		  visited[neighbor.id] = true;
		}
	  }
	}
	return path
  }

  // Example usage

  // Create the graph
  const nodeA = new Node('A');
  const nodeB = new Node('B');
  const nodeC = new Node('C');
  const nodeD = new Node('D');
  const nodeE = new Node('E');

  nodeA.addNeighbor(nodeB);
  nodeA.addNeighbor(nodeC);
  nodeB.addNeighbor(nodeD);
  nodeC.addNeighbor(nodeB);
  nodeC.addNeighbor(nodeD);
  nodeC.addNeighbor(nodeE);
  nodeD.addNeighbor(nodeE);
  nodeE.addNeighbor(nodeD);

  // Perform BFS starting from nodeA
  bfs(nodeB);
