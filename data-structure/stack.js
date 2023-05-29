class Stack {
	constructor() {
	  this.items = [];
	}

	// Pushing an element onto the stack
	push(element) {
	  this.items.push(element); // O(1)
	}

	// Popping the top element from the stack
	pop() {
	  if (this.isEmpty()) {
		return null;
	  }
	  return this.items.pop(); // O(1)
	}

	// Peeking the top element of the stack
	peek() {
	  if (this.isEmpty()) {
		return null;
	  }
	  return this.items[this.items.length - 1]; // O(1)
	}

	// Checking if the stack is empty
	isEmpty() {
	  return this.items.length === 0; // O(1)
	}

	// Getting the size of the stack
	size() {
	  return this.items.length; // O(1)
	}

	// Clearing the stack
	clear() {
	  this.items = []; // O(1)
	}
  }

  // Example usage
  const stack = new Stack();

  stack.push(1);
  stack.push(2);
  stack.push(3);

  console.log(stack.size()); // Output: 3
  console.log(stack.peek()); // Output: 3

  console.log(stack.pop()); // Output: 3
  console.log(stack.isEmpty()); // Output: false

  console.log(stack.toArray()); // Output: [1, 2]
  stack.clear();
  console.log(stack.isEmpty()); // Output: true
