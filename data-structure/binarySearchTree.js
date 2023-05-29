class Node {
	constructor(value) {
	  this.value = value;
	  this.left = null;
	  this.right = null;
	}
  }

  class BinarySearchTree {
	constructor() {
	  this.root = null;
	}

	// Insert a value into the binary search tree
	insert(value) {
	  const newNode = new Node(value);

	  if (!this.root) {
		this.root = newNode;
	  } else {
		this.insertNode(this.root, newNode);
	  }
	} // O(log n) on average, O(n) in the worst case (unbalanced tree)

	// Helper method to recursively insert a node into the binary search tree
	insertNode(node, newNode) {
	  if (newNode.value < node.value) {
		if (!node.left) {
		  node.left = newNode;
		} else {
		  this.insertNode(node.left, newNode);
		}
	  } else {
		if (!node.right) {
		  node.right = newNode;
		} else {
		  this.insertNode(node.right, newNode);
		}
	  }
	}

	// Search for a value in the binary search tree
	search(value) {
	  return this.searchNode(this.root, value);
	} // O(log n) on average, O(n) in the worst case (unbalanced tree)

	// Helper method to recursively search for a value in the binary search tree
	searchNode(node, value) {
	  if (!node || node.value === value) {
		return node;
	  }

	  if (value < node.value) {
		return this.searchNode(node.left, value);
	  }

	  return this.searchNode(node.right, value);
	}

	// Traverse the binary search tree in pre-order
	preOrderTraversal() {
	  const result = [];
	  this.preOrder(this.root, result);
	  return result;
	} // O(n)

	// Helper method to perform pre-order traversal recursively
	preOrder(node, result) {
	  if (node) {
		result.push(node.value);
		this.preOrder(node.left, result);
		this.preOrder(node.right, result);
	  }
	}

	// Traverse the binary search tree in in-order
	inOrderTraversal() {
	  const result = [];
	  this.inOrder(this.root, result);
	  return result;
	} // O(n)

	// Helper method to perform in-order traversal recursively
	inOrder(node, result) {
	  if (node) {
		this.inOrder(node.left, result);
		result.push(node.value);
		this.inOrder(node.right, result);
	  }
	}

	// Traverse the binary search tree in post-order
	postOrderTraversal() {
	  const result = [];
	  this.postOrder(this.root, result);
	  return result;
	} // O(n)

	// Helper method to perform post-order traversal recursively
	postOrder(node, result) {
	  if (node) {
		this.postOrder(node.left, result);
		this.postOrder(node.right, result);
		result.push(node.value);
	  }
	}
  }

  // Example usage
  const bst = new BinarySearchTree();

  bst.insert(8);
  bst.insert(3);
  bst.insert(10);
  bst.insert(1);
  bst.insert(6);
  bst.insert(14);

  console.log(bst.preOrderTraversal()); // Output: [8, 3, 1, 6, 10, 14]
  console.log(bst.inOrderTraversal()); // Output: [1, 3, 6, 8, 10, 14]
  console.log(bst.postOrderTraversal()); // Output
