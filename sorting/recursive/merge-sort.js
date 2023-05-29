function mergeSort(array) {
	if (array.length <= 1) {
	  return array; // Base case: an array with 0 or 1 element is already sorted
	}

	// Split the array into two halves
	const mid = Math.floor(array.length / 2);
	const leftHalf = array.slice(0, mid);
	const rightHalf = array.slice(mid);

	// Recursive calls to sort the two halves
	const sortedLeftHalf = mergeSort(leftHalf);
	const sortedRightHalf = mergeSort(rightHalf);

	// Merge the sorted halves
	return merge(sortedLeftHalf, sortedRightHalf);
  }

  function merge(left, right) {
	const mergedArray = [];
	let leftIndex = 0;
	let rightIndex = 0;

	// Merge the two sorted arrays into a single sorted array
	while (leftIndex < left.length && rightIndex < right.length) {
	  if (left[leftIndex] < right[rightIndex]) {
		mergedArray.push(left[leftIndex]);
		leftIndex++;
	  } else {
		mergedArray.push(right[rightIndex]);
		rightIndex++;
	  }
	}

	// Append the remaining elements from the left or right array
	while (leftIndex < left.length) {
	  mergedArray.push(left[leftIndex]);
	  leftIndex++;
	}

	while (rightIndex < right.length) {
	  mergedArray.push(right[rightIndex]);
	  rightIndex++;
	}

	return mergedArray;
  }
  // Big O(n log n)
  // Example usage:
  const array = [5, 3, 8, 4, 2, 1, 6];
  const sortedArray = mergeSort(array);
  console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 8]

