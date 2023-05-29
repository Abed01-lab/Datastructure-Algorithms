// Class representing a graph node
class Node {
	constructor(id) {
	  this.id = id;
	  this.visited = false;
	  this.neighbors = [];
	}

	addNeighbor(neighbor) {
	  this.neighbors.push(neighbor);
	}
  }

  // Function to perform depth-first search
  function dfs(graph, startNode) {
	startNode.visited = true;
	console.log(`Visited node: ${startNode.id}`);

	for (const neighbor of startNode.neighbors) {
	  if (!neighbor.visited) {
		dfs(graph, neighbor);
	  }
	}
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

  // Perform DFS starting from nodeA
  dfs([nodeA, nodeB, nodeC, nodeD, nodeE], nodeD);
