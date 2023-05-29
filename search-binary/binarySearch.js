function binarySearch(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
	  const mid = Math.floor((left + right) / 2);
	  const midValue = arr[mid];

	  if (midValue === target) {
		return mid;
	  } else if (midValue < target) {
		left = mid + 1;
	  } else {
		right = mid - 1;
	  }
	}

	return -1; // Target not found
  }

  // Example usage
  const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
  const target = 4;

  const index = binarySearch(array, target);

  if (index !== -1) {
	console.log(`Target ${target} found at index ${index}.`);
  } else {
	console.log(`Target ${target} not found in the array.`);
  }
