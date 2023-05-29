class Queue {
	constructor() {
	  this.items = [];
	}

	// Enqueue an element at the back of the queue
	enqueue(element) {
	  this.items.push(element); // O(1)
	}

	// Dequeue the element from the front of the queue
	dequeue() {
	  if (this.isEmpty()) {
		return null;
	  }
	  return this.items.shift(); // O(n)
	}

	// Get the front element of the queue without removing it
	peek() {
	  if (this.isEmpty()) {
		return null;
	  }
	  return this.items[0]; // O(1)
	}

	// Check if the queue is empty
	isEmpty() {
	  return this.items.length === 0; // O(1)
	}

	// Get the size of the queue
	size() {
	  return this.items.length; // O(1)
	}
  }

  // Example usage
  const queue = new Queue();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  console.log(queue.size()); // Output: 3
  console.log(queue.front()); // Output: 1

  console.log(queue.dequeue()); // Output: 1
  console.log(queue.isEmpty()); // Output: false

  queue.clear();
  console.log(queue.isEmpty()); // Output: true
