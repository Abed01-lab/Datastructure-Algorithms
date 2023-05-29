// Class representing a graph node
class Node {
	constructor(id) {
	  this.id = id;
	  this.neighbors = [];
	}

	addNeighbor(neighbor, weight) {
	  this.neighbors.push({ node: neighbor, weight });
	}
  }

  // Function to find the shortest path using Dijkstra's algorithm
  function dijkstra(graph, startNode) {
	const distances = {}; // Stores the shortest distance from the start node to each node
	const visited = {}; // Keeps track of visited nodes
	const queue = []; // Priority queue to determine the next node to visit

	// Initialize distances with Infinity, except for the start node (distance = 0)
	for (const node of graph) {
	  distances[node.id] = Infinity;
	}
	distances[startNode.id] = 0;

	// Add the start node to the priority queue
	queue.push({ node: startNode, distance: 0 });

	while (queue.length > 0) {
	  // Sort the queue based on the current shortest distance
	  queue.sort((a, b) => a.distance - b.distance);

	  // Get the node with the shortest distance from the queue
	  const { node, distance } = queue.shift();

	  // Skip this node if it has already been visited
	  if (visited[node.id]) continue;

	  // Mark the node as visited
	  visited[node.id] = true;

	  // Update the distances of neighboring nodes
	  for (const neighborData of node.neighbors) {
		const neighbor = neighborData.node;
		const weight = neighborData.weight;
		const totalDistance = distance + weight;

		if (totalDistance < distances[neighbor.id]) {
		  distances[neighbor.id] = totalDistance;

		  // Add the neighboring node to the queue
		  queue.push({ node: neighbor, distance: totalDistance });
		}
	  }
	}

	return distances;
  }

  // Example usage

  // Create the graph
  const nodeA = new Node('A');
  const nodeB = new Node('B');
  const nodeC = new Node('C');
  const nodeD = new Node('D');
  const nodeE = new Node('E');

  nodeA.addNeighbor(nodeB, 4);
  nodeA.addNeighbor(nodeC, 2);
  nodeB.addNeighbor(nodeD, 5);
  nodeC.addNeighbor(nodeB, 1);
  nodeC.addNeighbor(nodeD, 8);
  nodeC.addNeighbor(nodeE, 10);
  nodeD.addNeighbor(nodeE, 2);
  nodeE.addNeighbor(nodeD, 1);

  const graph = [nodeA, nodeB, nodeC, nodeD, nodeE];

  // Find the shortest distances from nodeA to other nodes
  const distances = dijkstra(graph, nodeA);

  // Print the distances
  for (const nodeId in distances) {
	console.log(`Shortest distance from A to ${nodeId}: ${distances[nodeId]}`);
  }
