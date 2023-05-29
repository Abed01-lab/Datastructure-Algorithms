function insertionSort(arr) {
	const length = arr.length;

	for (let i = 1; i < length; i++) {
	  let current = arr[i];
	  let j = i - 1;

	  while (j >= 0 && arr[j] > current) {
		arr[j + 1] = arr[j];
		j--;
	  }

	  arr[j + 1] = current;
	}

	return arr;
  }

  // Big O(n^2)
  // Example usage:
  const array = [64, 25, 12, 22, 11];
  const sortedArray = insertionSort(array);
  console.log(sortedArray); // Output: [11, 12, 22, 25, 64]
