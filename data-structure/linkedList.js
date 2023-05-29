class Node {
	constructor(value) {
	  this.value = value;
	  this.next = null;
	}
  }

  class LinkedList {
	constructor() {
	  this.head = null;
	  this.tail = null;
	}

	// Append a new node at the end of the linked list
	append(value) {
	  const newNode = new Node(value);

	  if (!this.head) {
		this.head = newNode;
		this.tail = newNode;
	  } else {
		this.tail.next = newNode;
		this.tail = newNode;
	  }
	} // O(1)

	// Prepend a new node at the beginning of the linked list
	prepend(value) {
	  const newNode = new Node(value);

	  if (!this.head) {
		this.head = newNode;
		this.tail = newNode;
	  } else {
		newNode.next = this.head;
		this.head = newNode;
	  }
	} // O(1)

	// Insert a new node at a specific index in the linked list
	insert(index, value) {
	  if (index === 0) {
		this.prepend(value);
		return;
	  }

	  const newNode = new Node(value);
	  let currentNode = this.head;
	  let previousNode = null;
	  let currentIndex = 0;

	  while (currentNode && currentIndex < index) {
		previousNode = currentNode;
		currentNode = currentNode.next;
		currentIndex++;
	  }

	  newNode.next = currentNode;
	  previousNode.next = newNode;
	  if (newNode.next === null) {
		this.tail = newNode;
	  }
	} // O(n)

	// Remove the first occurrence of a value from the linked list
	remove(value) {
	  let currentNode = this.head;
	  let previousNode = null;

	  while (currentNode) {
		if (currentNode.value === value) {
		  if (previousNode === null) {
			this.head = currentNode.next;
			if (currentNode.next === null) {
			  this.tail = null;
			}
		  } else {
			previousNode.next = currentNode.next;
			if (currentNode.next === null) {
			  this.tail = previousNode;
			}
		  }
		  return;
		}
		previousNode = currentNode;
		currentNode = currentNode.next;
	  }
	} // O(n)

	// Search for the first occurrence of a value in the linked list
	search(value) {
	  let currentNode = this.head;

	  while (currentNode) {
		if (currentNode.value === value) {
		  return true;
		}
		currentNode = currentNode.next;
	  }

	  return false;
	} // O(n)

	// Get the size of the linked list
	size() {
	  let count = 0;
	  let currentNode = this.head;

	  while (currentNode) {
		count++;
		currentNode = currentNode.next;
	  }

	  return count;
	} // O(n)

	// Convert the linked list to an array
	toArray() {
	  const array = [];
	  let currentNode = this.head;

	  while (currentNode) {
		array.push(currentNode.value);
		currentNode = currentNode.next;
	  }

	  return array;
	} // O(n)
  }

  // Example usage
  const linkedList = new LinkedList();

  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);

  console.log(linkedList.toArray()); // Output: [1, 2, 3]
  console.log(linkedList.size()); // Output: 3

  linkedList.prepend(0);
  console.log(linkedList.toArray()); // Output: [0, 1, 2, 3]

  link
